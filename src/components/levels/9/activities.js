import React from "react";
import Activity from "components/activity";
import Question from "components/levels/8/question";
import Response from "components/levels/8/response";
import soundContext from "decorators/sound-context";

export default [
  {words: ["elf", "up", "in"], correct: "elf"},
  {words: ["on", "end", "under"], correct: "end"},
  {words: ["add", "Ed", "otter"], correct: "Ed"},
  {words: ["ill", "off", "elm"], correct: "elm"},
  {words: ["pet", "pot", "putt"], correct: "pet"},
  {words: ["white", "wait", "wet"], correct: "wet"},
  {words: ["pin", "pen", "pan"], correct: "pen"},
  {words: ["egg", "igloo", "ugly"], correct: "egg"},
  {words: ["sit", "set", "seat"], correct: "set"},
  {words: ["bug", "bag", "beg"], correct: "beg"},
  {words: ["bed", "bud", "bit"], correct: "bed"},
  {words: ["tin", "ten", "tan"], correct: "ten"},
  {words: ["men", "man", "mom"], correct: "men"},
  {words: ["dust", "desk", "dish"], correct: "desk"},
  {words: ["drip", "drop", "dress"], correct: "dress"},
  {words: ["edge", "bridge", "cage"], correct: "edge"},
  {words: ["chimp", "chest", "chase"], correct: "chest"},
  {words: ["stitch", "scratch", "stretch"], correct: "stretch"},
  {words: ["guests", "gifts", "glasses"], correct: "guests"},
  {words: ["father", "fifteen", "feather"], correct: "feather"}
].map((activityProps) => {
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
          number={9}
          title="Find the Sound - Short e"
          activityCount={20}
          Question={Question}
          Response={Response}
        />
      );
    }
  }

  return ActivityInstance;
});
