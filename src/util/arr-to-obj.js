
/*
  Takes an array and a function and outputs an object.

  The callback takes each value of the passed array and should
  return a key-value pair as an array ([key, value]).

  Example:

  arrToObj(["foo", "bar", "fizz"], (word) => [word, word.toUpperCase()]);

  Outputs:

  {foo: "FOO", bar: "BAR", fizz: "FIZZ"}
*/
export default function arrToObj(arr, fn) {
  return arr.reduce((obj, value) => {
    const [computedKey, computedValue] = fn(value);
    obj[computedKey] = computedValue;
    return obj;
  }, {});
};
