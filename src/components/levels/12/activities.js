import React from "react";
import Activity from "./activity";
import soundContext from "decorators/sound-context";

export default [
  {words: ["up", "in", "on"], correct: "up"},
  {words: ["igloo", "ugly", "eagle"], correct: "ugly", wordsOnly: true},
  {words: ["enter", "otter", "under"], correct: "under", wordsOnly: true},
  {words: ["cup", "cop", "cap"], correct: "cup", wordsOnly: true},
  {words: ["beg", "bag", "bug"], correct: "bug", wordsOnly: true},
  {words: ["rug", "rag", "rig"], correct: "rug", wordsOnly: true},
  {words: ["run", "ring", "rain"], correct: "run", wordsOnly: true},
  {words: ["top", "tape", "tub"], correct: "tub", wordsOnly: true},
  {words: ["fin", "fan", "fun"], correct: "fun", wordsOnly: true},
  {words: ["hat", "hut", "hot"], correct: "hut", wordsOnly: true},
  {words: ["boys", "bees", "bus"], correct: "bus", wordsOnly: true},
  {words: ["nut", "net", "knot"], correct: "nut", wordsOnly: true},
  {words: ["trick", "truck", "track"], correct: "truck", wordsOnly: true},
  {words: ["lunch", "launch", "blond"], correct: "lunch", wordsOnly: true},
  {words: ["batter", "boater", "butter"], correct: "butter", wordsOnly: true},
  {words: ["rest", "rush", "wrench"], correct: "rush", wordsOnly: true},
  {words: ["stomp", "stamp", "stump"], correct: "stump", wordsOnly: true},
  {words: ["mud", "mad", "mitt"], correct: "mud", wordsOnly: true},
  {words: ["bench", "punch", "pitch"], correct: "punch", wordsOnly: true},
  {words: ["duck", "dock", "deck"], correct: "duck", wordsOnly: true}
].map((activityProps) => {
  const sounds = activityProps.words.reduce((sounds, word) => {
    sounds[`teacher/${word}`] = `teacher/words/${word}`;
    return sounds;
  }, {});

  @soundContext(sounds)
  class Level12Activity extends React.Component {
    render() {
      return <Activity {...this.props} {...activityProps}/>
    }
  }

  return Level12Activity;
});
