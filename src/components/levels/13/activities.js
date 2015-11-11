import React from "react";
import Activity from "./activity";
import soundContext from "decorators/sound-context";

export default [
  {words: ["cat", "cut", "hat"], correct: "cut", correctPhonic: "uh", incorrectPhonic: "ah"},
  {words: ["sit", "wig", "bus"], correct: "bus", correctPhonic: "uh", incorrectPhonic: "ih", wordsOnly: true},
  {words: ["run", "hen", "bed"], correct: "run", correctPhonic: "uh", incorrectPhonic: "eh", wordsOnly: true},
  {words: ["bug", "sun", "box"], correct: "box", correctPhonic: "oh", incorrectPhonic: "uh", wordsOnly: true},
  {words: ["mad", "mop", "cat"], correct: "mop", correctPhonic: "oh", incorrectPhonic: "ah", wordsOnly: true},
  {words: ["wet", "hit", "hill"], correct: "wet", correctPhonic: "eh", incorrectPhonic: "ih", wordsOnly: true},
  {words: ["pet", "zip", "desk"], correct: "zip", correctPhonic: "ih", incorrectPhonic: "eh", wordsOnly: true},
  {words: ["mud", "hot", "rug"], correct: "hot", correctPhonic: "oh", incorrectPhonic: "uh", wordsOnly: true},
  {words: ["sit", "set", "red"], correct: "sit", correctPhonic: "ih", incorrectPhonic: "eh", wordsOnly: true},
  {words: ["pin", "pen", "lip"], correct: "pen", correctPhonic: "eh", incorrectPhonic: "ih", wordsOnly: true},
  {words: ["fox", "bud", "fun"], correct: "fox", correctPhonic: "oh", incorrectPhonic: "uh", wordsOnly: true},
  {words: ["clock", "truck", "drop"], correct: "truck", correctPhonic: "uh", incorrectPhonic: "oh", wordsOnly: true},
  {words: ["ship", "dish", "chef"], correct: "chef", correctPhonic: "eh", incorrectPhonic: "ih", wordsOnly: true},
  {words: ["feather", "bread", "father"], correct: "father", correctPhonic: "ah", incorrectPhonic: "eh", wordsOnly: true},
  {words: ["stick", "truck", "trick"], correct: "truck", correctPhonic: "uh", incorrectPhonic: "ih", wordsOnly: true},
  {words: ["strap", "stop", "knot"], correct: "strap", correctPhonic: "ah", incorrectPhonic: "oh", wordsOnly: true},
  {words: ["brush", "bridge", "puddle"], correct: "bridge", correctPhonic: "ih", incorrectPhonic: "uh", wordsOnly: true},
  {words: ["treasure", "head", "ladder"], correct: "ladder", correctPhonic: "ah", incorrectPhonic: "eh", wordsOnly: true},
  {words: ["crumb", "crab", "tongue"], correct: "crab", correctPhonic: "ah", incorrectPhonic: "uh", wordsOnly: true},
  {words: ["sled", "pitch", "bench"], correct: "pitch", correctPhonic: "ih", incorrectPhonic: "eh", wordsOnly: true},
].map((activityProps) => {
  const sounds = activityProps.words.reduce((sounds, word) => {
    sounds[`teacher/${word}`] = `teacher/words/${word}`;
    return sounds;
  }, {
    "teacher/correct-phonic": `teacher/common/phonics/_${activityProps.correctPhonic}_`,
    "teacher/incorrect-phonic": `teacher/common/phonics/_${activityProps.incorrectPhonic}_`
  });

  @soundContext(sounds)
  class Level13Activity extends React.Component {
    render() {
      return <Activity {...this.props} {...activityProps}/>
    }
  }

  return Level13Activity;
});
