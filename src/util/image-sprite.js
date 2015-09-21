export default function imageSprite(imagePath) {
  return new PIXI.Sprite(PIXI.Texture.fromImage(imagePath));
}
