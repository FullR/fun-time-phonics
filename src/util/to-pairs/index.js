export default function toPairs(arr, fn) {
  return arr.reduce((result, value, index, arr) => {
    const [resultKey, resultValue] = fn(value, index, arr);
    result[resultKey] = resultValue;
    return result;
  }, {});
}
