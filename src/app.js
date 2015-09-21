import SceneManager from "scene-manager";

const sceneManager = new SceneManager(document.getElementById("game-container"), {
  scenes: {
    splash: require("scenes/splash")
  }
})
.showScene("splash")
.start();
