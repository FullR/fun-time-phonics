import win from "util/win";
import Scene from "scene";
import Sound from "sound";
import {merge} from "lodash";
import imageSprite from "util/image-sprite";
import hoverSprite from "util/hover-sprite";
import clickable from "util/clickable";
const log = debug("tctc:splash");

export default class Splash extends Scene {
  constructor(options) {
    super(options);
    this.welcome = new Sound({
      paths: require("welcome.wav")
    });

    const background = imageSprite(require("splash.png"));
    const arrow = hoverSprite(require("arrow.png"), require("arrow_hover.png"));
    arrow.anchor.x = 1;
    arrow.anchor.y = 1;
    arrow.position.x = win.width - (win.width / 10);
    arrow.position.y = win.height - (win.height / 10);
    log(arrow, arrow.width);

    background.width = win.width;
    background.height = win.height;

    clickable(arrow, () => this.showNextScene());

    this.addChild(background);
    this.addChild(arrow);
  }

  load() {
    return this.welcome.load();
  }

  afterLoad() {
    this.welcome.play().subscribe();
  }

  unload() {
    return this.welcome.unload();
  }

  showNextScene() {
    log("Showing next scene", this.sceneManager);
  }
}
