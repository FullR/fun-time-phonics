const {createReadStream, createWriteStream} = require("fs");
const path = require("path");
const streamToPromise = require("stream-to-promise");
const {chunk} = require("lodash");
const glob = require("glob-promise");
const mkdirp = require("mkdirp-promise");
const rimraf = require("rimraf-promise");
const exec = require("promised-exec");
const ProgressBar = require("cli-progress-bar");

const noop = () => {};
const bar = new ProgressBar();
const log = console.log.bind(console);
const all = Promise.all.bind(Promise);
const inputDir = `raw-images`;
const outputDir = `test-image-outputdir`;
const startTime = Date.now();

clean()
  .then(convertTIFs)
  .then(optimizePNGs)
  .then(copyOthers)
  .then(() => {
    bar.hide();
    log(`Finished in ${(Date.now() - startTime) / (1000 * 60)} minutes`);
  })
  .catch(log);

function clean() {
  bar.show("Cleaning", 0);
  return rimraf(outputDir)
    .then(() => mkdirp(outputDir))
    .then(() => {
      bar.progress = 1;
      bar.pulse("Done");
    });
}

function convertTIFs() {
  bar.show("Converting TIFs", 0);
  return glob(`${inputDir}/**/*.tif`)
    .then((tiffs) => asyncChunkSeries(tiffs, 50, (tiff, completeCount, count) => {
      bar.progress = completeCount / count;
      bar.pulse(tiff);
      return tiffToPng(tiff, 200, 200)
        .catch(noop);
    }))
    .then(all);
}

function optimizePNGs() {
  bar.show("Optimizing PNGs", 0);
  return glob(`${inputDir}/**/*.png`)
    .then((pngs) => asyncChunkSeries(pngs, 1, (png, completeCount, count) => {
      bar.progress = completeCount / count;
      bar.pulse(png);

      const outputPath = png.replace(inputDir, outputDir);
      return optimizePNG(png, outputPath)
        .catch(noop);
    }));
}

function copyOthers() {
  bar.show("Copying extra", 0);
  return glob(`${inputDir}/**/*.@(gif|ico)`)
    .then((gifs) => asyncChunkSeries(gifs, 1, (gif, completeCount, count) => {
      bar.progress = completeCount / count;
      bar.pulse(gif);

      const outputPath = gif.replace(inputDir, outputDir);
      return mkdirp(path.dirname(outputPath))
        .then(() => exec(`cp ${gif} ${outputPath}`));
    }))
    .then(all);
}

function tiffToPng(inputPath, width, height) {
  const outputPath = inputPath.replace(/\.tif$/, ".png");
  return exec(`convert ${inputPath} -resize ${width}x${height} ${outputPath}`);
}

function optimizePNG(inputPath, outputPath) {
  return mkdirp(path.dirname(outputPath))
    .then(() => exec(`pngcrush -brute ${inputPath} ${outputPath}`));
}

function asyncChunkSeries(arr, chunkSize, fn) {
  let count = arr.length;
  let completeCount = 0;
  if(chunkSize === 1) {
    return arr.reduce((p, v, i) => p.then(() => fn(v, i, count)), Promise.resolve());
  }

  return chunk(arr, chunkSize).reduce((p, chunk) => p.then(() => {
    const promises = chunk.map((v) =>
      fn(v, completeCount, count)
        .then((result) => {
          completeCount += 1;
          return result;
        })
        .catch((error) => {
          completeCount += 1;
          throw error;
        })
    );
    return all(promises);
  }), Promise.resolve());
}
