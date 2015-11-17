import React from "react";
import Activity from "./activity";
import soundContext from "decorators/sound-context";

export default [
  {words: ["red", "pink", "bath"], correct: "red"},                  // 1
  {words: ["ball", "bell", "bull"], correct: "bell", wordsOnly: true},
  {words: ["knit", "knot", "net"], correct: "net", wordsOnly: true},
  {words: ["pet", "pot", "putt"], correct: "pet", wordsOnly: true},
  {words: ["wood", "wait", "wet"], correct: "wet", wordsOnly: true}, // 5
  {words: ["pin", "pen", "pan"], correct: "pen", wordsOnly: true},
  {words: ["egg", "igloo", "ugly"], correct: "egg", wordsOnly: true},
  {words: ["duck", "dock", "deck"], correct: "deck", wordsOnly: true},
  {words: ["bug", "beg", "bag"], correct: "beg", wordsOnly: true},
  {words: ["bud", "bed", "bit"], correct: "bed", wordsOnly: true}, // 10
  {words: ["ten", "tin", "tan"], correct: "ten", wordsOnly: true},
  {words: ["men", "man", "mom"], correct: "men", wordsOnly: true},
  {words: ["drip", "drop", "dress"], correct: "dress", wordsOnly: true},
  {words: ["dust", "desk", "dish"], correct: "desk", wordsOnly: true},
  {words: ["bench", "punch", "pitch"], correct: "bench", wordsOnly: true}, // 15
  {words: ["chimp", "chest", "chain"], correct: "chest", wordsOnly: true},
  {words: ["stitch", "scratch", "stretch"], correct: "stretch", wordsOnly: true},
  {words: ["guests", "gifts", "gas"], correct: "guests", wordsOnly: true},
  {words: ["stop", "step", "stool"], correct: "step", wordsOnly: true}
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
