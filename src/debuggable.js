import {defaults} from "lodash";
import log from "log";

const debuggableFns = {
  log() {
    if(this.debug) log(...arguments);
  },

  logError() {
    if(this.debug) log.error(...arguments);
  },

  assert(conditional, message) {
    if(this.debug && !conditional) throw new Error(message);
  }
};

export default function debuggable(ClassFn) {
  defaults(ClassFn.prototype, debuggableFns);
}
