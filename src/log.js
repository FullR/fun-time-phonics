import {extend} from "lodash";
let enabled = true;

function log() {
  if(enabled) {
    console.log(...arguments);
  }
}

extend(log, {
  /*
    Disables logging (except errors)
  */
  disable() {
    enabled = false;
  },

  error() {
    console.error(...arguments);
  },

  logger(...args) {
    return (...runTimeArgs) => log(...args, ...runTimeArgs);
  }
});

export default log;
