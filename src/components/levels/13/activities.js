import React from "react";
import Activity from "./activity";
import soundContext from "decorators/sound-context";

export default [
  {words: ["cat", "cut", "hat"], correct: "cut", correctPhonic: "uh", incorrectPhonic: "ah"},
  {words: ["sit", "wig", "bus"], correct: "bus", correctPhonic: "uh", incorrectPhonic: "ih"},
  {words: ["run", "hen", "bed"], correct: "run", correctPhonic: "uh", incorrectPhonic: "eh"},
  {words: ["bug", "sun", "box"], correct: "box", correctPhonic: "oh", incorrectPhonic: "uh"},
  {words: ["mad", "mop", "cat"], correct: "mop", correctPhonic: "oh", incorrectPhonic: "ah"},
  {words: ["wet", "hit", "hill"], correct: "wet", correctPhonic: "eh", incorrectPhonic: "ih"},
  {words: ["pet", "zip", "desk"], correct: "zip", correctPhonic: "ih", incorrectPhonic: "eh"},
  {words: ["mud", "hot", "rug"], correct: "hot", correctPhonic: "oh", incorrectPhonic: "uh"},
  {words: ["sit", "set", "red"], correct: "sit", correctPhonic: "ih", incorrectPhonic: "eh"},
  {words: ["pin", "pen", "lip"], correct: "pen", correctPhonic: "eh", incorrectPhonic: "ih"},
  {words: ["fox", "bud", "fun"], correct: "fox", correctPhonic: "oh", incorrectPhonic: "uh"},
  {words: ["clock", "truck", "drop"], correct: "truck", correctPhonic: "uh", incorrectPhonic: "oh"},
  {words: ["ship", "dish", "chef"], correct: "chef", correctPhonic: "eh", incorrectPhonic: "ih"},
  {words: ["feather", "bread", "father"], correct: "father", correctPhonic: "ah", incorrectPhonic: "eh"},
  {words: ["stick", "truck", "trick"], correct: "truck", correctPhonic: "uh", incorrectPhonic: "ih"},
  {words: ["strap", "stop", "knot"], correct: "strap", correctPhonic: "ah", incorrectPhonic: "oh"},
  {words: ["brush", "bridge", "puddle"], correct: "bridge", correctPhonic: "ih", incorrectPhonic: "uh"},
  {words: ["treasure", "head", "ladder"], correct: "treasure", correctPhonic: "ah", incorrectPhonic: "eh"},
  {words: ["crumb", "crab", "tongue"], correct: "crab", correctPhonic: "ah", incorrectPhonic: "uh"},
  {words: ["sled", "pitch", "bench"], correct: "pitch", correctPhonic: "ih", incorrectPhonic: "eh"},
].map((activityProps) => {
  const sounds = activityProps.words.reduce((sounds, word) => {
    sounds[`teacher/${word}`] = `teacher/words/${word}`;
    return sounds;
  }, {
    "teacher/correct-phonic": `teacher/common/phonics/${activityProps.correctPhonic}`,
    "teacher/incorrect-phonic": `teacher/common/phonics/${activityProps.incorrectPhonic}`
  });

  @soundContext(sounds)
  class Level13Activity extends React.Component {
    render() {
      return <Activity {...this.props} {...activityProps}/>
    }
  }

  return Level13Activity;
});
