import packWebpackContext from "util/pack-webpack-context";

/* This exports all of the decorators in the decorators directory */
export default packWebpackContext(require.context("decorators", false, /.js$/));
