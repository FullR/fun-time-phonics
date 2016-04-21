export default function toPercent(value, max) {
  return max ? (value / max) * 100 : 0;
}
