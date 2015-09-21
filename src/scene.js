
export default class Scene extends PIXI.Container {
  constructor(options={}) {
    super(options);
    const {sceneManager} = options;
    this.sceneManager = sceneManager;
  }
}
