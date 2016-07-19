function noop() { return null; }

// ignore these requires (they're for webpack only)
["scss", "html", "png", "gif", "ogg", "wav"].forEach((ext) => {
  require.extensions["." + ext] = noop;
});
