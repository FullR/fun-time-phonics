var loaderUtils = require("loader-utils");
var wavExtRegexp = /wav$/;

module.exports = function(content) {
  var query = loaderUtils.parseQuery(this.query);
  var url = loaderUtils.interpolateName(this, "[path][name].[ext]", {
    context: query.context || this.options.context,
    content: content,
    regExp: query.regExp
  });

  var mp3Url = url.replace(wavExtRegexp, "mp3").replace("raw-audio/", "../audio/");
  var oggUrl = url.replace(wavExtRegexp, "ogg").replace("raw-audio/", "../audio/");
  if(this.cacheable) {
    this.cacheable();
  }

  return "module.exports = {"
   + "  mp3: require('" + mp3Url + "'),"
   + "  ogg: require('" + oggUrl + "')"
   + "}";
};
