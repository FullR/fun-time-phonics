var _glob = require("glob");
var exec = require("child_process").exec;
var _ = require("lodash");
var pace = require("pace");

var INPUT_DIR = "raw-audio";
var OUTPUT_DIR = "audio";

function rimraf(path) {
  return new Promise(function(resolve, reject) {
    exec("rm -rf " + path, function(error) {
      if(error) reject(error);
      else resolve();
    });
  });
}

function glob(pattern, options) {
  return new Promise(function(resolve, reject) {
    _glob(pattern, options || {}, function(error, files) {
      if(error) reject(error);
      else resolve(files);
    });
  });
}

function ffmpeg(args, inFile, outFile) {
  return new Promise(function(resolve, reject) {
    exec('ffmpeg ' + args.join(" ") + ' -y -i "' + inFile + '" "' + outFile + '"', function(error, stdout, stderr) {
      if(error) reject(error);
      else resolve();
    });
  });
}

function mkFileDir(filename) {
  return new Promise(function(resolve, reject) {
    var path = filename.split("/").slice(0, -1).join("/");
    exec('mkdir -p "' + path + '"', function(error) {
      if(error) reject(error);
      else resolve();
    });
  });
}

function logError(error) {
  console.error("Error: ", error);
  throw error;
}

function asyncMap(arr, fn) {
  return Promise.all(arr.map(function(v) {
    return fn(v);
  }));
}

function asyncSeries(arr, fn, chunkSize) {
  if(!chunkSize) {
    return arr.reduce(function(p, v, i, c) {
      return p.then(function() {
        return fn(v);
      });
    }, Promise.resolve());
  } else {
    return _.chunk(arr, chunkSize).reduce(function(p, chunk) {
      return p.then(function() {
        return asyncMap(chunk, function(v) {
          return fn(v);
        });
      });
    }, Promise.resolve());
  }
}

glob(INPUT_DIR + "/**/*.wav")
  .then(function(files) {
    return rimraf(OUTPUT_DIR + "/*")
      .then(function() {
        return files;
      });
  })
  .then(function(files) {
    console.log("Converting " + files.length + " wav files to OGG/MP3");
    var progressBar = pace(files.length);
    var op = progressBar.op.bind(progressBar);
    return asyncSeries(files, function(filename) {
      var mp3 = filename.replace(INPUT_DIR, OUTPUT_DIR).replace(/wav$/, "mp3");
      var ogg = filename.replace(INPUT_DIR, OUTPUT_DIR).replace(/wav$/, "ogg");
      return mkFileDir(mp3)
        .then(function() {
          return ffmpeg([], filename, mp3);
          /*return Promise.all([
            ffmpeg([], filename, mp3).then(op),
            ffmpeg(["-acodec", "vorbis"], filename, ogg).then(op)
          ]);*/
        })
        .then(op);
    }, 10);
  })
  .then(null, logError);
