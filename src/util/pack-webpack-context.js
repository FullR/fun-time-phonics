import {camelCase} from "lodash";
const jsFilenameRegexp = /\.\/(.*)\.js$/;

export default function packWebpackContext(req, filenameMapFn=camelCase) {
  return req.keys().filter((path) => path !== "./index.js").reduce((exportObj, path) => {
    const filenameMatch = path.match(jsFilenameRegexp);

    if(!filenameMatch) {
      logError(`Could not match module name in path: ${path}`);
    } else {
      const moduleName = filenameMapFn(filenameMatch[1]);
      exportObj[moduleName] = req(path);
    }
    return exportObj;
  }, {});
}
