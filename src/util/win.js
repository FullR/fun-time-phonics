
export default {
  get height() {
    return window.innerHeight || document.documentElement.clientHeight || 0;//Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  },

  get width() {
    return window.innerWidth || document.documentElement.clientWidth || 0;//Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  }
};
