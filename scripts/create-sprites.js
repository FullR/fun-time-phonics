const defaults = require("lodash").defaults;
const sprity = require("sprity");
const logger = (str) => () => console.log(str);
const startTime = Date.now();
const options = {
  out: "./images/robot-sprites",
  margin: 0,
  orientation: "horizontal"
};

const sprites = [
  defaults({name: "boy-arm", src: "./images/robot-parts/boy-arm-*"}, options),
  defaults({name: "boy-no-arm", src: "./images/robot-parts/boy-no-arm-*"}, options),
  defaults({name: "boy-idle", src: "./images/robot-parts/boy-idle-*"}, options),
  defaults({name: "girl-arm", src: "./images/robot-parts/girl-arm-*"}, options),
  defaults({name: "girl-no-arm", src: "./images/robot-parts/girl-no-arm-*"}, options),
  defaults({name: "girl-idle", src: "./images/robot-parts/girl-idle-*"}, options)
];

function createSprite(options) {
  return new Promise((resolve, reject) => {
    sprity.create(options, (error) => error ? reject(error) : resolve());
  });
}

Promise.all(
  sprites.map((options) =>
    createSprite(options).then(logger(`${options.name}.png created`))
  )
)
.then(() => console.log(`\nDone (${Date.now() - startTime}ms)`))
.catch((error) => console.error(error));
