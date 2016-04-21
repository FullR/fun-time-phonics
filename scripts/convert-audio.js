const path = require("path");
const audioConverter = require("audio-converter");
const wavDir = local("../raw-audio");
const convertedDir = local("../audio");

audioConverter(wavDir, convertedDir, {
  progressBar: true
})
  .then(function() {
    console.log("Finished converting audio");
  })
  .catch(function(error) {
    console.log("Failed to convert audio: " + error);
  });

function local(p) {
  return path.resolve(path.join(__dirname, p));
}
