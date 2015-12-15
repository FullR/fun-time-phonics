import React from "react";
import Activity from "components/activity";
import Question from "./question";
import Response from "./response";
import soundContext from "decorators/sound-context";

export default [
  {words: ["cat", "cut", "kite"], correct: "cat"},                  // 1
  {words: ["beg", "bag", "big"], correct: "bag", wordsOnly: true},
  {words: ["bud", "bed", "bad"], correct: "bad", wordsOnly: true},
  {words: ["mud", "mad", "mitt"], correct: "mad", wordsOnly: true},
  {words: ["hit", "hot", "hat"], correct: "hat", wordsOnly: true}, // 5
  {words: ["cap", "cop", "cup"], correct: "cap", wordsOnly: true},
  {words: ["bit", "beet", "bat"], correct: "bat", wordsOnly: true},
  {words: ["lap", "lip", "loop"], correct: "lap", wordsOnly: true},
  {words: ["pin", "pen", "pan"], correct: "pan", wordsOnly: true},
  {words: ["dig", "drag", "dog"], correct: "drag", wordsOnly: true}, // 10
  {words: ["mop", "map", "men"], correct: "map", wordsOnly: true},
  {words: ["flap", "flip", "flop"], correct: "flap", wordsOnly: true},
  {words: ["fish", "fast", "foot"], correct: "fast", wordsOnly: true},
  {words: ["rest", "rush", "rash"], correct: "rash", wordsOnly: true},
  {words: ["track", "trick", "trunk"], correct: "track", wordsOnly: true}, // 15
  {words: ["badge", "bridge", "edge"], correct: "badge", wordsOnly: true},
  {words: ["enter", "under", "actor"], correct: "actor", wordsOnly: true},
  {words: ["string", "stretch", "strap"], correct: "strap", wordsOnly: true},
  {words: ["screen", "scratch", "screw"], correct: "scratch", wordsOnly: true}
].map((activityProps, i, activities) => {
  const sounds = activityProps.words.reduce((sounds, word) => {
    sounds[`teacher/${word}`] = `teacher/words/${word}`;
    return sounds;
  }, {});

  @soundContext(sounds)
  class ActivityInstance extends React.Component {
    render() {
      return (
        <Activity {...this.props} {...activityProps}
          number={15}
          title="Short Sounds - The Letter 'a'"
          activityCount={activities.length}
          Question={Question}
          Response={Response}
        />
      );
    }
  }

  return ActivityInstance;
});
