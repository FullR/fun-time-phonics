var _ = require("lodash");
var path = require("path");

function ext() {
  return new RegExp("\\.(?:" + _.toArray(arguments).join("|") + ")$");
}

function local(localpath) {
  return path.resolve(path.join(__dirname, localpath ? ("/" + localpath) : ""));
}

module.exports = {
  entry: local("src/entry.js"),
  output: {
    path: local("dist"),
    filename: "app.js"
  },
  resolve: {
    root: [local("src"), local("audio"), local("images")],
    extentions: ["", ".js"]
  },
  module: {
    loaders: [
      {test: ext("js"), exclude: /node_modules/, loader: "babel-loader?stage=1"},
      {test: ext("html"), loader: "file-loader?name=[name].[ext]"},
      {test: ext("scss"), loader: "style!css!sass"},
      {test: ext("ogg", "mp3"), loader: "file?name=assets/[name].[hash].[ext]"},
      {test: ext("png", "jpg"), loader: "url"}
    ]
  }
};

