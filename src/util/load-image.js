export default function loadImage(path) {
  return new Promise((resolve, reject) => {
    const image = document.createElement("img");
    image.onload = resolve;
    image.onerror = reject;
    image.src = path;
  });
}
