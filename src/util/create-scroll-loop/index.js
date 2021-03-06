function getScrollDistance(parentEl, targetEl) {
  const maxScrollTop = parentEl.scrollHeight - parentEl.clientHeight;
  return parentEl.scrollTop - Math.min(targetEl.offsetTop, maxScrollTop);
}

export default function createScrollLoop(parentEl, targetEl, duration, onComplete) {
  const startTime = Date.now();
  const startDistance = getScrollDistance(parentEl, targetEl);
  const speed = Math.abs(startDistance) / duration;
  let lastFrame = startTime;
  let animating = true;

  if(!duration) {
    console.log(targetEl.offsetTop, startDistance);
    parentEl.scrollTop = targetEl.offsetTop;
    onComplete();
    animating = false;
    return () => {};
  }

  function onFrame() {
    if(!animating) return;
    const now = Date.now();
    const distance = getScrollDistance(parentEl, targetEl);
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
