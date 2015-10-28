import React from "react";
import Activity from "./activity";
import soundContext from "decorators/sound-context";

export default [
  {words: ["in", "on", "off"], correct: "in"},
  {words: ["bell", "ill", "tall"], correct: "ill", wordsOnly: true},
  {words: ["rug", "rag", "rig"], correct: "rig", wordsOnly: true},
  {words: ["bug", "beg", "big"], correct: "big", wordsOnly: true},
  {words: ["pin", "pen", "pan"], correct: "pin", wordsOnly: true},
  {words: ["lap", "lip", "loop"], correct: "lip", wordsOnly: true},
  {words: ["flip", "flap", "flop"], correct: "flip", wordsOnly: true},
  {words: ["boot", "beet", "bit"], correct: "bit", wordsOnly: true},
  {words: ["spine", "spoon", "spin"], correct: "spin", wordsOnly: true},
  {words: ["peg", "pig", "pug"], correct: "pig", wordsOnly: true},
  {words: ["punch", "pitch", "bench"], correct: "pitch", wordsOnly: true},
  {words: ["Bob", "Bill", "Ben"], correct: "Bill", wordsOnly: true},
  {words: ["bed", "bad", "bid"], correct: "bid", wordsOnly: true},
  {words: ["slide", "sled", "slip"], correct: "slip", wordsOnly: true},
  {words: ["pit", "pet", "putt"], correct: "pit", wordsOnly: true},
  {words: ["watch", "itch", "wrench"], correct: "itch", wordsOnly: true},
  {words: ["chess", "chips", "cheese"], correct: "chips", wordsOnly: true},
  {words: ["ships", "shapes", "shops"], correct: "ships", wordsOnly: true},
  {words: ["eagle", "igloo", "ugly"], correct: "igloo", wordsOnly: true},
  {words: ["injured", "enter", "under"], correct: "injured", wordsOnly: true}
].map((activityProps) => {
  const sounds = activityProps.words.reduce((sounds, word) => {
    sounds[`teacher/${word}`] = `teacher/words/${word}`;
    return sounds;
  }, {});

  @soundContext(sounds)
  class Level10Activity extends React.Component {
    render() {
      return <Activity {...this.props} {...activityProps}/>
    }
  }

  return Level10Activity;
});
