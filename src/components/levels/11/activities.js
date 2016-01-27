import React from "react";
import Activity from "components/activity";
import Question from "components/levels/8/question";
import Response from "components/levels/8/response";
import soundContext from "decorators/sound-context";

export default [
  {words: ["ox", "axe", "oaks"], correct: "ox"},
  {words: ["in", "on", "out"], correct: "on", wordsOnly: true},
  {words: ["hop", "up", "hip"], correct: "hop", wordsOnly: true},
  {words: ["ash", "elk", "otter"], correct: "otter", wordsOnly: true},
  {words: ["hat", "hut", "hot"], correct: "hot", wordsOnly: true},
  {words: ["lock", "lick", "lake"], correct: "lock", wordsOnly: true},
  {words: ["pop", "pipe", "pup"], correct: "pop", wordsOnly: true},
  {words: ["pit", "pet", "pot"], correct: "pot", wordsOnly: true},
  {words: ["Bob", "bib", "baby"], correct: "Bob", wordsOnly: true},
  {words: ["fast", "fix", "fox"], correct: "fox", wordsOnly: true},
  {words: ["cup", "cop", "cap"], correct: "cop", wordsOnly: true},
  {words: ["drop", "drip", "droop"], correct: "drop", wordsOnly: true},
  {words: ["shut", "shot", "sheet"], correct: "shot", wordsOnly: true},
  {words: ["flip", "flap", "flop"], correct: "flop", wordsOnly: true},
  {words: ["stop", "step", "stool"], correct: "stop", wordsOnly: true},
  {words: ["stomp", "stamp", "stump"], correct: "stomp", wordsOnly: true},
  {words: ["top", "tip", "tape"], correct: "top", wordsOnly: true},
  {words: ["nut", "throw", "knot"], correct: "knot", wordsOnly: true},
  {words: ["cot", "cut", "coat"], correct: "cot", wordsOnly: true},
  {words: ["sax", "socks", "six"], correct: "socks", wordsOnly: true}
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
