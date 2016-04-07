import React from "react";
import Activity from "components/activity";
import Question from "./question";
import Response from "./response";
import soundContext from "decorators/sound-context";

export default [
  {words: ["hop", "sit", "hat"], correct: "hop"},                  // 1
  {words: ["elk", "ox", "axe"], correct: "ox"},
  {words: ["rock", "rack", "wreck"], correct: "rock"},
  {words: ["duck", "dock", "deck"], correct: "dock"},
  {words: ["lock", "lick", "lake"], correct: "lock"}, // 5
  {words: ["pop", "pipe", "pup"], correct: "pop"},
  {words: ["pit", "pet", "pot"], correct: "pot"},
  {words: ["Bob", "bib", "baby"], correct: "Bob"},
  {words: ["fix", "fast", "fox"], correct: "fox"},
  {words: ["nut", "net", "knot"], correct: "knot"}, // 10
  {words: ["drip", "drop", "dress"], correct: "drop"},
  {words: ["shut", "shot", "sheet"], correct: "shot"},
  {words: ["flip", "flap", "flop"], correct: "flop"},
  {words: ["stop", "step", "strap"], correct: "stop"},
  {words: ["stomp", "stamp", "stump"], correct: "stomp"}, // 15
  {words: ["top", "tip", "tape"], correct: "top"},
  {words: ["ships", "shapes", "shops"], correct: "shops"},
  {words: ["cot", "cut", "cat"], correct: "cot"},
  {words: ["sax", "socks", "six"], correct: "socks"}
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
          title={"Short Sounds - The Letter \"o\""}
          number={18}
          activityCount={activities.length}
          Question={Question}
          Response={Response}
        />
      );
    }
  }

  return ActivityInstance;
});
