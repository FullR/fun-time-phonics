import React from "react";
import Activity from "components/activity";
import Question from "components/levels/8/question";
import Response from "components/levels/8/response";
import soundContext from "decorators/sound-context";

export default [
  {words: ["ox", "axe", "oaks"], correct: "ox"},
  {words: ["in", "on", "out"], correct: "on"},
  {words: ["hop", "up", "hip"], correct: "hop"},
  {words: ["ash", "elk", "otter"], correct: "otter"},
  {words: ["hat", "hut", "hot"], correct: "hot"},
  {words: ["lock", "lick", "lake"], correct: "lock"},
  {words: ["pop", "pipe", "pup"], correct: "pop"},
  {words: ["pit", "pet", "pot"], correct: "pot"},
  {words: ["Bob", "bib", "baby"], correct: "Bob"},
  {words: ["fast", "fix", "fox"], correct: "fox"},
  {words: ["cup", "cop", "cap"], correct: "cop"},
  {words: ["drop", "drip", "droop"], correct: "drop"},
  {words: ["shut", "shot", "sheet"], correct: "shot"},
  {words: ["flip", "flap", "flop"], correct: "flop"},
  {words: ["stop", "step", "stool"], correct: "stop"},
  {words: ["stomp", "stamp", "stump"], correct: "stomp"},
  {words: ["top", "tip", "tape"], correct: "top"},
  {words: ["nut", "throw", "knot"], correct: "knot"},
  {words: ["cot", "cut", "coat"], correct: "cot"},
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
          teacher={{centered: !this.props.wordsOnly}}
          number={11}
          activityCount={activities.length}
          title="Find the Sound - Short o"
          Question={Question}
          Response={Response}
        />
      );
    }
  }

  return ActivityInstance;
});
