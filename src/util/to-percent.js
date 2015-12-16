
/* Calculates an percentage int from a value and a max value */
export default function toPercent(n, total) {
  if(!total || !n) return 0; // avoid divide by zero and NaN
  return Math.floor((n / total) * 100);
}
