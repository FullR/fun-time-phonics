import React from "react";
import Activity from "components/activity";
import Question from "./question";
import Response from "./response";
import soundContext from "decorators/sound-context";

export default [
  {words: ["cop", "cut", "cat"], correct: "cat", phonics: ["c", "aah", "t"]},
  {words: ["mom", "map", "mop"], correct: "mom", phonics: ["m", "ooh", "m"], wordsOnly: true},
  {words: ["bell", "ill", "fall"], correct: "ill", phonics: ["iih", "l"], wordsOnly: true},
  {words: ["in", "on", "off"], correct: "on", phonics: ["ooh", "n"], wordsOnly: true},
  {words: ["bat", "beg", "bug"], correct: "bug", phonics: ["b", "uuh", "g"], wordsOnly: true},
  {words: ["lip", "lap", "loop"], correct: "lip", phonics: ["l", "iih", "p"], wordsOnly: true},
  {words: ["fist", "fan", "fat"], correct: "fat", phonics: ["f", "aah", "t"], wordsOnly: true},
  {words: ["moon", "men", "map"], correct: "men", phonics: ["m", "eeh", "n"], wordsOnly: true},
  {words: ["road", "bread", "red"], correct: "red", phonics: ["r", "eeh", "d"], wordsOnly: true},
  {words: ["shin", "ship", "chin"], correct: "shin", phonics: ["sh", "iih", "n"], wordsOnly: true},
  {words: ["nap", "nut", "knight"], correct: "nut", phonics: ["n", "uuh", "t"], wordsOnly: true},
  {words: ["cent", "sit", "sip"], correct: "sit", phonics: ["s", "iih", "t"], wordsOnly: true},
  {words: ["rug", "rag", "wreck"], correct: "rug", phonics: ["r", "uuh", "g"], wordsOnly: true},
  {words: ["fish", "fast", "fist"], correct: "fist", phonics: ["f", "iih", "s", "t"], wordsOnly: true},
  {words: ["chop", "chip", "shop"], correct: "chop", phonics: ["ch", "ooh", "p"], wordsOnly: true},
  {words: ["flag", "flip", "slip"], correct: "flip", phonics: ["f", "l", "iih", "p"], wordsOnly: true},
  {words: ["stick", "stack", "shack"], correct: "stack", phonics: ["s", "t", "aah", "k"], wordsOnly: true},
  {words: ["truck", "trick", "trunk"], correct: "truck", phonics: ["t", "r", "uuh", "k"], wordsOnly: true},
  {words: ["spin", "spoon", "sing"], correct: "spin", phonics: ["s", "p", "iih", "n"], wordsOnly: true}
].map((activityProps, i, activities) => {
  const sounds = activityProps.words.reduce((sounds, word) => {
    sounds[`teacher/${word}`] = `teacher/words/${word}`;
    return sounds;
  }, {
    "teacher/sounded-parts": `teacher/common/phonics/_${activityProps.phonics.join("_")}_`
  });

  @soundContext(sounds)
  class Level7Activity extends React.Component {
    render() {
      return (
        <Activity {...this.props} {...activityProps}
          number={7}
          title="Echo the Word"
          activityCount={activities.length}
          Question={Question}
          Response={Response}
        />
      );
    }
  }

  return Level7Activity;
});
