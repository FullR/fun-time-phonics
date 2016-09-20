// get all images except the word images (they will be loaded when needed)
const context = require.context("../images", true, /^((?!(words)).)*\.(png|gif|ico)$/);
const paths = context.keys().map(context);

export default paths;
