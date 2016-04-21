export default function getViewport() {
  const docEl = document.documentElement;
  const body = document.getElementsByTagName('body')[0];
  const width = window.innerWidth || docEl.clientWidth || body.clientWidth;
  const height = window.innerHeight|| docEl.clientHeight|| body.clientHeight;
  return {width, height};
}
