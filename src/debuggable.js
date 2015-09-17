import {defaults} from "lodash";
import debug from "debug";

export default function debuggable(namespace) {
  const log = debug(namespace);
  const error = debug(`${namespace}:error`);
  return (ClassFn) => defaults(ClassFn.prototype, {
    log() {
      log(...arguments);
    },

    logError() {
      error(...arguments);
    },

    assert(conditional, message) {
      if(!conditional) {
        throw new Error(message);
      }
    }
  });
}
