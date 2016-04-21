export default function getNext(arr, value) {
  const index = arr.indexOf(value);
  if(index === -1 || index >= arr.length - 1) {
    return null;
  }
  return arr[index + 1];
}
