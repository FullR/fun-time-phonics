import Scene from "scene";

const OWL = {
  "DEFAULT": 0,
  "SPEAKING_OPEN": 1,
  "SPEAKING_CLOSED": 2
};

export default class Lesson extends Scene {
  constructor(options) {
    super(options);
    this.owl = new PIXI.MovieClip([
      require("owl/default.png"),
      require("owl/speaking-opened.png"),
      require("owl/speaking-closed.png")
    ]);
  }

  setOwlFrame(newState) {

  }
}
