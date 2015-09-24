
export default function bindMethods(target, ...methodNames) {
  for(let i = 0, length = methodNames.length; i < length; i++) {
    target[methodNames[i]] = target[methodNames[i]].bind(target);
  }
  return target;
}
