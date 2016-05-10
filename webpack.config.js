var _ = require("lodash");
var path = require("path");

function ext() {
  return new RegExp("\\.(?:" + _.toArray(arguments).join("|") + ")$");
}

function local(localpath) {
  return path.resolve(path.join(__dirname, localpath ? ("/" + localpath) : ""));
}

module.exports = {
  //devtool: "source-map",
  entry: local("src/entry.js"),
  output: {
    path: local("dist"),
    filename: "app.js"
  },
  resolve: {
    root: [local("src"), local("audio"), local("images"), local("fonts")],
    extentions: ["", ".js"]
  },
  module: {
    loaders: [
      {test: ext("js"), exclude: /node_modules/, loader: "babel"},
      {test: ext("json"), loader: "json"},
      {test: ext("html", "ico"), loader: "file?name=[name].[ext]"},
      {test: ext("scss"), loader: "style!css!autoprefixer!sass"},
      {test: ext("ogg", "mp3"), noParse: true, loader: "file?name=audio/[name].[hash].[ext]"},
      {test: ext("png", "jpg", "gif"), noParse: true, loader: "url?limit=10000&name=images/[name].[hash].[ext]"},
      {test: ext("eot", "otf", "svg", "ttf", "woff"), noParse: true, loader: "file?name=fonts/[name].[ext]"}
    ]
  }
};
