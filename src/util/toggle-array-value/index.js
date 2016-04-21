// if arr includes v, filter it, otherwise, concat it
export default function toggleArrayValue(arr, v) {
  return arr.includes(v) ? arr.filter((other) => other !== v) : arr.concat(v);
}
