import React from "react";
import Activity from "./activity";
import soundContext from "decorators/sound-context";

export default [
  {words: ["cop", "cut", "cat"], correct: "cat", phonics: ["c", "aah", "t"]},
  {words: ["mom", "map", "mop"], correct: "mom", phonics: ["m", "ooh", "m"]},
  {words: ["hill", "ill", "fall"], correct: "ill", phonics: ["iil", "l"]},
  {words: ["in", "on", "off"], correct: "on", phonics: ["ooh", "n"]},
  {words: ["bat", "beg", "bug"], correct: "bug", phonics: ["b", "uuh", "g"]},
  {words: ["lip", "lap", "loop"], correct: "lip", phonics: ["l", "iih", "p"]},
  {words: ["fist", "fan", "fat"], correct: "fat", phonics: ["f", "aah", "t"]},
  {words: ["moon", "men", "man"], correct: "men", phonics: ["m", "eeh", "n"]},
  {words: ["road", "bread", "red"], correct: "red", phonics: ["r", "eeh", "d"]},
  {words: ["shin", "ship", "chin"], correct: "shin", phonics: ["sh", "iih", "n"]},
  {words: ["knot", "nut", "knight"], correct: "nut", phonics: ["n", "uuh", "t"]},
  {words: ["cent", "sit", "sip"], correct: "sit", phonics: ["s", "iih", "t"]},
  {words: ["rug", "rag", "wreck"], correct: "rug", phonics: ["r", "uuh", "g"]},
  {words: ["fish", "fast", "fist"], correct: "fist", phonics: ["f", "iih", "s", "t"]},
  {words: ["chop", "chip", "shop"], correct: "chop", phonics: ["ch", "ooh", "p"]},
  {words: ["flag", "flip", "slip"], correct: "flip", phonics: ["f", "l", "iih", "p"]},
  {words: ["stick", "stack", "shack"], correct: "stack", phonics: ["s", "t", "aah", "k"]},
  {words: ["truck", "trick", "trunk"], correct: "truck", phonics: ["t", "r", "uuh", "k"]},
  {words: ["spin", "spoon", "sing"], correct: "spin", phonics: ["s", "p", "iih", "n"]}
].map((activityProps) => {
  const sounds = activityProps.words.reduce((sounds, word) => {
    sounds[`teacher/${word}`] = `teacher/words/${word}`;
    return sounds;
  }, {
    "teacher/sounded-parts": `teacher/level-6/sounded-parts/${activityProps.phonics.join("_")}`
  });

  @soundContext(sounds)
  class Level7Activity extends React.Component {
    render() {
      return <Activity {...this.props} {...activityProps}/>
    }
  }

  return Level7Activity;
});
