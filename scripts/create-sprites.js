const defaults = require("lodash").defaults;
const sprity = require("sprity");
const logger = (str) => () => console.log(str);
const startTime = Date.now();
const options = {
  out: "./images/robot-sprites",
  margin: 0,
  orientation: "horizontal"
};
const boy = defaults({name: "boy", src: "./images/robot-parts/boy-*"}, options);
const girlNoArm = defaults({name: "girl-arm", src: "./images/robot-parts/girl-arm-*"}, options);
const girlArm = defaults({name: "girl-no-arm", src: "./images/robot-parts/girl-no-arm-*"}, options)

function createSprite(options) {
  return new Promise((resolve, reject) => {
    sprity.create(options, (error) => error ? reject(error) : resolve());
  });
}

Promise.all([
  createSprite(boy).then(logger("boy.png created")),
  createSprite(girlArm).then(logger("girl-arm.png created")),
  createSprite(girlNoArm).then(logger("girl-no-arm.png created"))
])
.then(() => console.log(`\nDone (${Date.now() - startTime}ms)`))
.catch((error) => console.error(error));
