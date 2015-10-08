
export default {
  get height() {
    return window.innerHeight || document.documentElement.clientHeight || 0;
  },

  get width() {
    return window.innerWidth || document.documentElement.clientWidth || 0;
  }
};
