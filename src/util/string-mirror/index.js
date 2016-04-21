export default function stringMirror(...strings) {
  return strings.reduce((o, s) => {
    if(o.hasOwnProperty(s)) {
      throw new Error(`Duplicate entry in string mirror: ${s}`);
    }
    o[s] = s;
    return o;
  }, {});
}
