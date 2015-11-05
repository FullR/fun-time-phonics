import React from "react";
import Activity from "./activity";
import soundContext from "decorators/sound-context";

export default [
  {words: ["hop", "dog", "hot"], correctIndexes: [0, 2]},
  {words: ["box", "socks", "boy"], correctIndexes: [0, 2], wordsOnly: true},
  {words: ["ring", "mad", "monkey"], correctIndexes: [1, 2], wordsOnly: true},
  {words: ["chop", "itch", "chin"], correctIndexes: [0, 2], wordsOnly: true},
  {words: ["read", "bear", "rose"], correctIndexes: [0, 2], wordsOnly: true},
  {words: ["trash", "desk", "dish"], correctIndexes: [1, 2], wordsOnly: true},
  {words: ["pot", "pig", "top"], correctIndexes: [0, 1], wordsOnly: true},
  {words: ["violin", "fin", "vase"], correctIndexes: [0, 2], wordsOnly: true},
  {words: ["flag", "frog", "gopher"], correctIndexes: [0, 1], wordsOnly: true},
  {words: ["moth", "thumb", "thorn"], correctIndexes: [1, 2], wordsOnly: true},
  {words: ["swing", "ice", "stick"], correctIndexes: [0, 2], wordsOnly: true},
  {words: ["trick", "drink", "table"], correctIndexes: [0, 2], wordsOnly: true},
  {words: ["map", "mad", "lip"], correctIndexes: [0, 2], ending: true, endingIntro: true},
  {words: ["fish", "fist", "fast"], correctIndexes: [1, 2], ending: true, wordsOnly: true},
  {words: ["man", "mom", "jam"], correctIndexes: [1, 2], ending: true, wordsOnly: true},
  {words: ["itch", "dish", "trash"], correctIndexes: [1, 2], ending: true, wordsOnly: true},
  {words: ["sleep", "sheep", "sheet"], correctIndexes: [0, 1], ending: true, wordsOnly: true},
  {words: ["milk", "spill", "talk"], correctIndexes: [0, 2], ending: true, wordsOnly: true},
  {words: ["hand", "desk", "yard"], correctIndexes: [0, 2], ending: true, wordsOnly: true},
  {words: ["string", "sink", "tongue"], correctIndexes: [0, 2], ending: true, wordsOnly: true},
  {words: ["blue", "shoe", "boot"], correctIndexes: [0, 1], ending: true, wordsOnly: true},
  {words: ["snow", "boat", "piano"], correctIndexes: [0, 2], ending: true, wordsOnly: true},
  {words: ["play", "pail", "spray"], correctIndexes: [0, 2], ending: true, wordsOnly: true},
  {words: ["cowboy", "oyster", "fur"], correctIndexes: [1, 2], ending: true, wordsOnly: true}
].map((activityProps) => {
  const sounds = activityProps.words.reduce((sounds, word) => {
    sounds[`teacher/${word}`] = `teacher/words/${word}`;
    return sounds;
  }, {});

  @soundContext(sounds)
  class Level3Activity extends React.Component {
    render() {
      return <Activity {...this.props} {...activityProps}/>
    }
  }

  return Level3Activity;
});
