export default function loadImage(src) {
  return new Promise((resolve, reject) => {
    const image = document.createElement("img");
    image.onload = resolve;
    image.onerror = reject;
    image.src = src;
  });
}
