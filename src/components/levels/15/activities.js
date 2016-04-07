import React from "react";
import Activity from "components/activity";
import Question from "./question";
import Response from "./response";
import soundContext from "decorators/sound-context";

export default [
  {words: ["cat", "cut", "kite"], correct: "cat"},                  // 1
  {words: ["beg", "bag", "big"], correct: "bag"},
  {words: ["bud", "bed", "bad"], correct: "bad"},
  {words: ["mud", "mad", "mitt"], correct: "mad"},
  {words: ["hit", "hot", "hat"], correct: "hat"}, // 5
  {words: ["cap", "cop", "cup"], correct: "cap"},
  {words: ["bit", "beet", "bat"], correct: "bat"},
  {words: ["lap", "lip", "loop"], correct: "lap"},
  {words: ["pin", "pen", "pan"], correct: "pan"},
  {words: ["dig", "drag", "dog"], correct: "drag"}, // 10
  {words: ["mop", "map", "men"], correct: "map"},
  {words: ["flap", "flip", "flop"], correct: "flap"},
  {words: ["fish", "fast", "foot"], correct: "fast"},
  {words: ["rest", "rush", "rash"], correct: "rash"},
  {words: ["track", "trick", "trunk"], correct: "track"}, // 15
  {words: ["badge", "bridge", "edge"], correct: "badge"},
  {words: ["enter", "under", "actor"], correct: "actor"},
  {words: ["string", "stretch", "strap"], correct: "strap"},
  {words: ["screen", "scratch", "screw"], correct: "scratch"}
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
          index={i}
          title={"Short Sounds - The Letter \"a\""}
          activityCount={activities.length}
          Question={Question}
          Response={Response}
        />
      );
    }
  }

  return ActivityInstance;
});
