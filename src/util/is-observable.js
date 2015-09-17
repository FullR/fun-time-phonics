
export default function isObservable(v) {
  return v && typeof v.subscribe === "function";
}
