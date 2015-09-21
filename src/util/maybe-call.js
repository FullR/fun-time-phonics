
export default function maybeCall(fn, context, ...args) {
  if(typeof fn === "function") {
    fn.call(context, ...args);
  }
}
