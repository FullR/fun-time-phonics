import React from "react";
import Activity from "components/activity";
import Question from "./question";
import Response from "./response";
import soundContext from "decorators/sound-context";

export default [
  {words: ["cup", "cop", "cap"], correct: "cup"},                  // 1
  {words: ["eagle", "igloo", "ugly"], correct: "ugly"},
  {words: ["bone", "bun", "bin"], correct: "bun"},
  {words: ["bug", "bag", "beg"], correct: "bug"},
  {words: ["kite", "cat", "cut"], correct: "cut"}, // 5
  {words: ["run", "ring", "rain"], correct: "run"},
  {words: ["pop", "pipe", "pup"], correct: "pup"},
  {words: ["fin", "fan", "fun"], correct: "fun"},
  {words: ["hat", "hut", "hot"], correct: "hut"},
  {words: ["boys", "bees", "bus"], correct: "bus"}, // 10
  {words: ["nut", "net", "knot"], correct: "nut"},
  {words: ["track", "trick", "truck"], correct: "truck"},
  {words: ["duck", "dock", "deck"], correct: "duck"},
  {words: ["rug", "rag", "rig"], correct: "rug"},
  {words: ["rest", "rush", "wrench"], correct: "rush"}, // 15
  {words: ["stomp", "stamp", "stump"], correct: "stump"},
  {words: ["batter", "boater", "butter"], correct: "butter"},
  {words: ["bench", "punch", "pitch"], correct: "punch"},
  {words: ["puddle", "paddle", "poodle"], correct: "puddle"}
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
          title={"Short Sounds - The Letter \"u\""}
          number={19}
          activityCount={activities.length}
          Question={Question}
          Response={Response}
        />
      );
    }
  }

  return ActivityInstance;
});
