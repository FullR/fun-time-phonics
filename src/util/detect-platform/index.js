export function isElectron() {
  return window && window.process && window.process.type;
};

export function isCordova() {
  return !isElectron() && document.URL.indexOf( 'http://' ) === -1 && document.URL.indexOf( 'https://' ) === -1;
};

export function isWeb() {
  return !(isCordova() || isElectron());
};

export default {isElectron, isCordova, isWeb};
