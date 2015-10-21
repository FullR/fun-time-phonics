
export default function maybeCall(fn, context, ...args) {
  if(typeof fn === "function") {
    return fn.call(context, ...args);
  }
}
