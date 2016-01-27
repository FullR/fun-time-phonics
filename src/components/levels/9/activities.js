import React from "react";
import Activity from "components/activity";
import Question from "components/levels/8/question";
import Response from "components/levels/8/response";
import soundContext from "decorators/sound-context";

export default [
  {words: ["elf", "up", "in"], correct: "elf"},
  {words: ["on", "end", "under"], correct: "end", wordsOnly: true},
  {words: ["add", "Ed", "otter"], correct: "Ed", wordsOnly: true},
  {words: ["ill", "off", "elm"], correct: "elm", wordsOnly: true},
  {words: ["pet", "pot", "putt"], correct: "pet", wordsOnly: true},
  {words: ["white", "wait", "wet"], correct: "wet", wordsOnly: true},
  {words: ["pin", "pen", "pan"], correct: "pen", wordsOnly: true},
  {words: ["egg", "igloo", "ugly"], correct: "egg", wordsOnly: true},
  {words: ["sit", "set", "seat"], correct: "set", wordsOnly: true},
  {words: ["bug", "bag", "beg"], correct: "beg", wordsOnly: true},
  {words: ["bed", "bud", "bit"], correct: "bed", wordsOnly: true},
  {words: ["tin", "ten", "tan"], correct: "ten", wordsOnly: true},
  {words: ["men", "man", "mom"], correct: "men", wordsOnly: true},
  {words: ["dust", "desk", "dish"], correct: "desk", wordsOnly: true},
  {words: ["drip", "drop", "dress"], correct: "dress", wordsOnly: true},
  {words: ["edge", "bridge", "cage"], correct: "edge", wordsOnly: true},
  {words: ["chimp", "chest", "chase"], correct: "chest", wordsOnly: true},
  {words: ["stitch", "scratch", "stretch"], correct: "stretch", wordsOnly: true},
  {words: ["guests", "gifts", "glasses"], correct: "guests", wordsOnly: true},
  {words: ["father", "fifteen", "feather"], correct: "feather", wordsOnly: true}
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
