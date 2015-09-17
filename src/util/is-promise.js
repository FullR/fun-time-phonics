
export default function isPromise(value) {
  return (Promise && value instanceof Promise) || (value && typeof value === "object" && typeof value.then === "function");
}
