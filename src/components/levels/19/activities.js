import React from "react";
import Activity from "./activity";
import soundContext from "decorators/sound-context";

export default [
  {words: ["cup", "cop", "cap"], correct: "cup"},                  // 1
  {words: ["eagle", "igloo", "ugly"], correct: "ugly", wordsOnly: true},
  {words: ["bone", "bun", "bin"], correct: "bun", wordsOnly: true},
  {words: ["bug", "bag", "beg"], correct: "bug", wordsOnly: true},
  {words: ["kite", "cat", "cut"], correct: "cut", wordsOnly: true}, // 5
  {words: ["run", "ring", "rain"], correct: "run", wordsOnly: true},
  {words: ["pop", "pipe", "pup"], correct: "pup", wordsOnly: true},
  {words: ["fin", "fan", "fun"], correct: "fun", wordsOnly: true},
  {words: ["hat", "hut", "hot"], correct: "hut", wordsOnly: true},
  {words: ["boys", "bees", "bus"], correct: "bus", wordsOnly: true}, // 10
  {words: ["nut", "net", "knot"], correct: "nut", wordsOnly: true},
  {words: ["track", "trick", "truck"], correct: "truck", wordsOnly: true},
  {words: ["duck", "dock", "deck"], correct: "duck", wordsOnly: true},
  {words: ["rug", "rag", "rig"], correct: "rug", wordsOnly: true},
  {words: ["rest", "rush", "wrench"], correct: "rush", wordsOnly: true}, // 15
  {words: ["stomp", "stamp", "stump"], correct: "stump", wordsOnly: true},
  {words: ["batter", "boater", "butter"], correct: "butter", wordsOnly: true},
  {words: ["bench", "punch", "pitch"], correct: "punch", wordsOnly: true},
  {words: ["puddle", "paddle", "poodle"], correct: "puddle", wordsOnly: true}
].map((activityProps) => {
  const sounds = activityProps.words.reduce((sounds, word) => {
    sounds[`teacher/${word}`] = `teacher/words/${word}`;
    return sounds;
  }, {});

  @soundContext(sounds)
  class ActivityInstance extends React.Component {
    render() {
      return <Activity {...this.props} {...activityProps}/>
    }
  }

  return ActivityInstance;
});
