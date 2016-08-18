export default function createScrollLoop(parentEl, targetEl, duration, onComplete) {
  const startTime = Date.now();
  const startDistance = parentEl.scrollTop - targetEl.offsetTop;
  const speed = Math.abs(startDistance) / duration;
  let lastFrame = startTime;
  let animating = true;

  if(!duration) {
    parentEl.scrollTop = targetEl.offsetTop;
    onComplete();
    animating = false;
    return () => {};
  }

  function onFrame() {
    if(!animating) return;
    const now = Date.now();
    const distance = parentEl.scrollTop - targetEl.offsetTop;
    const deltaTime = now - lastFrame;
    const deltaScroll = Math.min(speed * deltaTime, Math.abs(distance));
    lastFrame = now;

    if(distance !== 0) {
      parentEl.scrollTop -= Math.sign(distance) * deltaScroll;
    } else {
      animating = false;
      if(onComplete) {
        onComplete();
      }
    }
    if(animating) {
      requestAnimationFrame(onFrame);
    }
  }

  if(startDistance) {
    requestAnimationFrame(onFrame);
  } else {
    animating = false;
    onComplete();
  }

  return () => {
    animating = false;
  };
}
