import {isFunction, last} from "lodash";
import isEven from "../is-even";
import maybeCall from "../maybe-call";

export default function matcher(input, ...args) {
  const length = args.length;
  let i;
  let defaults;

  if(isEven(args.length)) {
    defaults = null;
  } else {
    defaults = last(args)
  }

  for(i = 0; (i + 1) < length; i += 2) {
    if(isFunction(args[i])) {
      if(args[i](input)) {
        return maybeCall(args[i + 1]);
      }
    } else if(args[i] === input) {
      return maybeCall(args[i + 1]);
    }
  }

  return maybeCall(defaults, input);
}
