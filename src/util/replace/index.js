// replace `target` in `arr` with `source` without mutations
export default function replace(arr, target, source) {
  return arr.map((v) => v === target ? source : v);
}
