let _isElectron = window && window.process && window.process.type;
let _isCordova = window._isCordova;
let _isWeb = !(_isElectron || _isCordova);

export function isElectron() {
  return _isElectron;
};

export function isCordova() {
  return _isCordova;
};

export function isWeb() {
  return _isWeb;
};

export function isAndroid() {

}

export default {isElectron, isCordova, isWeb, isAndroid};
