export default function repeatString(s, n) {
  return Array.apply(null, {length: n}).map(() => s).join("");
}
