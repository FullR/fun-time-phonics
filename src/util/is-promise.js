
export default function isPromise(value) {
  return (typeof Promise !== "undefined" && value instanceof Promise) || (value && typeof value === "object" && typeof value.then === "function");
}
