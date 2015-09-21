export default function clickable(sprite, onClick) {
  sprite.interactive = true;
  sprite.buttonMode = true;
  sprite.defaultCurcor = "pointer";
  sprite.on("mouseup", onClick);
  sprite.on("touchend", onClick);
  return sprite;
}