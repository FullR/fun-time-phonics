import React from "react";
import Activity from "./activity";
import soundContext from "decorators/sound-context";

export default [
  {words: ["in", "on", "end"], correct: "in"},                  // 1
  {words: ["bug", "beg", "big"], correct: "big", wordsOnly: true},
  {words: ["fin", "fan", "fun"], correct: "fin", wordsOnly: true},
  {words: ["pin", "pen", "pan"], correct: "pin", wordsOnly: true},
  {words: ["lap", "lip", "loop"], correct: "lip", wordsOnly: true}, // 5
  {words: ["sip", "sap", "soup"], correct: "sip", wordsOnly: true},
  {words: ["boot", "beet", "bit"], correct: "bit", wordsOnly: true},
  {words: ["spin", "spoon", "spray"], correct: "spin", wordsOnly: true},
  {words: ["peg", "pig", "pug"], correct: "pig", wordsOnly: true},
  {words: ["punch", "pitch", "bench"], correct: "pitch", wordsOnly: true}, // 10
  {words: ["Ben", "Bob", "Bill"], correct: "Bill", wordsOnly: true},
  {words: ["bed", "bad", "bid"], correct: "bid", wordsOnly: true},
  {words: ["sleep", "sled", "slip"], correct: "slip", wordsOnly: true},
  {words: ["pit", "pet", "putt"], correct: "pit", wordsOnly: true},
  {words: ["pal", "pill", "pool"], correct: "pill", wordsOnly: true}, // 15
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
  class ActivityInstance extends React.Component {
    render() {
      return <Activity {...this.props} {...activityProps}/>
    }
  }

  return ActivityInstance;
});
