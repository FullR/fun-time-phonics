export default function replaceWhere(arr, predicate, transform) {
  return arr.map((v) => predicate(v) ? transform(v) : v);
}
