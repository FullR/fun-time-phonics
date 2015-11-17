import React from "react";
import Activity from "./activity";
import soundContext from "decorators/sound-context";

export default [
  {words: ["hop", "sit", "hat"], correct: "hop"},                  // 1
  {words: ["elk", "ox", "ax"], correct: "ox", wordsOnly: true},
  {words: ["rock", "rack", "wreck"], correct: "rock", wordsOnly: true},
  {words: ["duck", "dock", "deck"], correct: "dock", wordsOnly: true},
  {words: ["lock", "lick", "lake"], correct: "lock", wordsOnly: true}, // 5
  {words: ["pop", "pipe", "pup"], correct: "pop", wordsOnly: true},
  {words: ["pit", "pet", "pot"], correct: "pot", wordsOnly: true},
  {words: ["Bob", "bib", "baby"], correct: "Bob", wordsOnly: true},
  {words: ["fix", "fast", "fox"], correct: "fox", wordsOnly: true},
  {words: ["nut", "net", "knot"], correct: "knot", wordsOnly: true}, // 10
  {words: ["drip", "drop", "dress"], correct: "drop", wordsOnly: true},
  {words: ["shut", "shot", "sheet"], correct: "shot", wordsOnly: true},
  {words: ["flip", "flap", "flop"], correct: "flop", wordsOnly: true},
  {words: ["stop", "step", "strap"], correct: "stop", wordsOnly: true},
  {words: ["stomp", "stamp", "stump"], correct: "stomp", wordsOnly: true}, // 15
  {words: ["top", "tip", "tape"], correct: "top", wordsOnly: true},
  {words: ["ships", "shapes", "shops"], correct: "shops", wordsOnly: true},
  {words: ["cot", "cut", "cat"], correct: "cot", wordsOnly: true},
  {words: ["sax", "socks", "six"], correct: "socks", wordsOnly: true}
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
