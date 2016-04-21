import {isFunction} from "lodash";

export default function maybeCall(fn, ...args) {
  return isFunction(fn) ? fn(...args) : fn;
}
