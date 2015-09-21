import win from "util/win";
import maybeCall from "util/maybe-call";
const log = debug("tctc:scene-manager");

class SceneManager {
  constructor(el=document.body, {
    scenes = {},
    baseWidth = 1920,
    baseHeight = 1080
  }={}) {
    this.baseWidth = baseWidth;
    this.baseHeight = baseHeight;

    this.el = el;
    this.scenes = scenes;
    this.activeScene = null;
    this.loading = true;
    this.loop = this.loop.bind(this);
    this.renderer = PIXI.autoDetectRenderer(win.width, win.height, {backgroundColor: 0xFFFFFF});
    window.addEventListener("resize", () => {
      this.renderer.resize(win.width, win.height);
    });
    el.appendChild(this.renderer.view);
  }

  get ratioX() {
    return win.width / this.baseWidth;
  }

  get ratioY() {
    return win.height / this.baseHeight;
  }

  start() {
    this.loop();
  }

  getScene(id) {
    return this.scenes[id];
  }

  hasScene(id) {
    return !!this.getScene(id);
  }

  addScene(id, SceneClass) {
    log(`Adding scene: ${id}`);
    if(this.scenes[id]) {
      throw new Error(`Cannot add scene "${id}" because a scene with that id already exists`);
    }
    if(!SceneClass) {
      throw new Error(`A scene class must be provided when adding a scene`);
    }
    this.scenes[id] = SceneClass;
    return this;
  }

  applyRatio(obj, ratioX, ratioY) {
    let i;
    const {children} = obj;
    const length = children.length;
    obj.position.x *= ratioX;
    obj.position.y *= ratioY;
    obj.scale.x *= ratioX;
    obj.scale.y *= ratioY;
    for(i = 0; i < length; i++) {
      this.applyRatio(children[i], ratioX, ratioY);
    }
  }

  showScene(id) {
    const SceneClass = this.getScene(id);
    log(`Showing scene: ${id}`);
    if(!SceneClass) {
      throw new Error(`Scene not found: ${id}`);
    }
    if(this.activeScene && this.activeScene.unload) {
      log(`Unloading previous scene's assets`);
      this.activeScene.unload();
    }
    const activeScene = this.activeScene = new SceneClass({sceneManager: this});
    if(activeScene.load) {
      this.loading = true;
      log("Loading assets");
      Promise.resolve()
        .then(activeScene.load.bind(activeScene))
        .then(() => {
          this.loading = false;
          log("Finished loading assets");
          maybeCall(activeScene.afterLoad, activeScene);
        })
        .then(null, (error) => {
          logError(`Failed to load assets: ${error} for scene ${id}`);
        });
    } else {
      this.loading = false;
    }
    return this;
  }

  loop() {
    const {activeScene, loading, ratioX, ratioY} = this;
    requestAnimationFrame(() => this.loop());
    if(loading) {
      return;
    }
    if(activeScene.update) {
      activeScene.update();
    }
    //this.applyRatio(activeScene, ratioX, ratioY);
    this.renderer.render(activeScene);
    //this.applyRatio(activeScene, 1 / ratioX, 1 / ratioY);
    return this;
  }
};

export default SceneManager;
