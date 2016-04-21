
// checks if two arrays contain the same values (order doesn't matter)
export default function arrayEquals(a, b) {
  return a && b && a.length === b.length && a.every((v) => b.includes(v));
}
