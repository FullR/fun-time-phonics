import React from "react";
import Activity from "components/activity";
import Question from "./question";
import Response from "./response";
import soundContext from "decorators/sound-context";

export default [
  {words: ["egg", "apple", "ill"], correct: "apple"},
  {words: ["add", "ape", "pig"], correct: "add", wordsOnly: true},
  {words: ["fix", "ox", "axe"], correct: "axe", wordsOnly: true},
  {words: ["mud", "mad", "mitt"], correct: "mad", wordsOnly: true},
  {words: ["hit", "hot", "hat"], correct: "hat", wordsOnly: true},
  {words: ["cap", "cup", "cape"], correct: "cap", wordsOnly: true},
  {words: ["bit", "boat", "bat"], correct: "bat", wordsOnly: true},
  {words: ["lip", "leap", "lap"], correct: "lap", wordsOnly: true},
  {words: ["bag", "beg", "big"], correct: "bag", wordsOnly: true},
  {words: ["bed", "bud", "bad"], correct: "bad", wordsOnly: true},
  {words: ["mop", "map", "men"], correct: "map", wordsOnly: true},
  {words: ["flap", "flip", "flop"], correct: "flap", wordsOnly: true},
  {words: ["fist", "fast", "feast"], correct: "fast", wordsOnly: true},
  {words: ["rest", "rush", "rash"], correct: "rash", wordsOnly: true},
  {words: ["track", "trick", "truck"], correct: "track", wordsOnly: true},
  {words: ["badge", "bridge", "edge"], correct: "badge", wordsOnly: true},
  {words: ["enter", "wreck", "actor"], correct: "actor", wordsOnly: true},
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
          number={8}
          title="Find the Sound - Short a"
          activityCount={activities.length}
          Question={Question}
          Response={Response}
        />
      );
    }
  }

  return ActivityInstance;
});
