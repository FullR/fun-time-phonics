import packWebpackContext from "util/pack-webpack-context";
import {camelCase, capitalize} from "lodash";

/* 
  This exports all of the components in the components directory 

  Exported keys are in capitalized camel case (ex. FooBar, Fizz, Buzz)
*/
export default packWebpackContext(require.context("components", false, /.js$/), (filename) => capitalize(camelCase(filename)));
