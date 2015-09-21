
export default function hoverSprite(baseTextureImage, hoverTextureImage, activeTextureImage) {
  const baseTexture = PIXI.Texture.fromImage(baseTextureImage);
  const hoverTexture = PIXI.Texture.fromImage(hoverTextureImage);
  const sprite = new PIXI.MovieClip(activeTextureImage ? [baseTextureImage, hoverTextureImage, activeTextureImage] : [baseTexture, hoverTexture]);

  const enableActive = () => sprite.gotoAndStop(activeTextureImage ? 2 : 1); // use activeTextureImage if it exists otherwise, use the hover texture
  const enableHover = () => sprite.gotoAndStop(1);
  const disableHover = () => sprite.gotoAndStop(0);

  sprite.interactive = true;
  sprite.on("touchstart", enableActive);
  sprite.on("mousedown", enableActive);

  sprite.on("mouseover", enableHover);

  sprite.on("mouseout", disableHover);
  sprite.on("touchend", disableHover);
  return sprite;
}
