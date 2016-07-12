const glob = require("glob-promise");
const mkdirp = require("mkdirp-promise");
const rimraf = require("rimraf-promise");
const {chunk} = require("lodash");
const path = require("path");
const exec = require("child_process").exec;

const inputDir = local("../raw-audio");
const outputDir = local("../audio");

function clean() {
  return rimraf("audio");
}

function setup() {
  return mkdirp("audio");
}

function convert() {
  return glob(`${inputDir}/**/*.wav`)
    .then((wavs) => {
      const count = wavs.length;
      let convertedCount = 0;
      const chunks = chunk(wavs, 100);
      return chunks.reduce((p, wavs) =>
        p.then(() => Promise.all(
          wavs.map((wav) => {
            console.log(`Converting ${wav} (${convertedCount}/${count})`);
            return convertWav(wav)
              .then(() => {
                convertedCount += 1;
              });
          })
        )),
        Promise.resolve()
      );
    });
}

function convertWav(wav) {
  const {dir, name} = path.parse(wav);
  const outDir = dir.replace(inputDir, outputDir);
  const outFile = `${outDir}/${name}.mp3`;
  //console.log(`Converting ${wav} -> ${outFile}`);
  return mkdirp(outDir)
    .then(() => run(`sox "${wav}" "${outFile}"`));
}

function run(cmd) {
  return new Promise((resolve, reject) => {
    exec(cmd, (error) => error ? reject(error) : resolve());
  });
}

function local(p) {
  return path.resolve(path.join(__dirname, p));
}

clean()
  .then(setup)
  .then(convert)
  .catch(console.log.bind(console));
