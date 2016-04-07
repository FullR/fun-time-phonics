import React from "react";
import Activity from "components/activity";
import Question from "./question";
import Response from "./response";
import soundContext from "decorators/sound-context";

function checkAnswer(answer, correct) {
  return answer && answer.words.length === correct.length && answer.words.every((word) => correct.includes(word));
}

export default [
  {words: ["cat", "cut", "hat"], correct: ["cat", "hat"], incorrectPhonic: "uh", correctPhonic: "ah"},
  {words: ["sit", "wig", "bus"], correct: ["sit", "wig"], incorrectPhonic: "uh", correctPhonic: "ih", wordsOnly: true},
  {words: ["run", "hen", "bed"], correct: ["hen", "bed"], incorrectPhonic: "uh", correctPhonic: "eh", wordsOnly: true},
  {words: ["bug", "sun", "box"], correct: ["bug", "sun"], incorrectPhonic: "oh", correctPhonic: "uh", wordsOnly: true},
  {words: ["mad", "mop", "cat"], correct: ["mad", "cat"], incorrectPhonic: "oh", correctPhonic: "ah", wordsOnly: true},
  {words: ["wet", "hit", "hill"], correct: ["hit", "hill"], incorrectPhonic: "eh", correctPhonic: "ih", wordsOnly: true},
  {words: ["pet", "zip", "desk"], correct: ["pet", "desk"], incorrectPhonic: "ih", correctPhonic: "eh", wordsOnly: true},
  {words: ["mud", "hot", "rug"], correct: ["mud", "rug"], incorrectPhonic: "oh", correctPhonic: "uh", wordsOnly: true},
  {words: ["sit", "set", "red"], correct: ["set", "red"], incorrectPhonic: "ih", correctPhonic: "eh", wordsOnly: true},
  {words: ["pin", "pen", "lip"], correct: ["pin", "lip"], incorrectPhonic: "eh", correctPhonic: "ih", wordsOnly: true},
  {words: ["fox", "bud", "fun"], correct: ["bud", "fun"], incorrectPhonic: "oh", correctPhonic: "uh", wordsOnly: true},
  {words: ["clock", "truck", "drop"], correct: ["clock", "drop"], incorrectPhonic: "uh", correctPhonic: "oh", wordsOnly: true},
  {words: ["ship", "dish", "chef"], correct: ["ship", "dish"], incorrectPhonic: "eh", correctPhonic: "ih", wordsOnly: true},
  {words: ["feather", "bread", "father"], correct: ["feather", "bread"], incorrectPhonic: "ah", correctPhonic: "eh", wordsOnly: true},
  {words: ["stick", "truck", "trick"], correct: ["stick", "trick"], incorrectPhonic: "uh", correctPhonic: "ih", wordsOnly: true},
  {words: ["strap", "stop", "knot"], correct: ["stop", "knot"], incorrectPhonic: "ah", correctPhonic: "oh", wordsOnly: true},
  {words: ["brush", "bridge", "puddle"], correct: ["brush", "puddle"], incorrectPhonic: "ih", correctPhonic: "uh", wordsOnly: true},
  {words: ["treasure", "head", "ladder"], correct: ["treasure", "head"], incorrectPhonic: "ah", correctPhonic: "eh", wordsOnly: true},
  {words: ["crumb", "crab", "tongue"], correct: ["crumb", "tongue"], incorrectPhonic: "ah", correctPhonic: "uh", wordsOnly: true},
  {words: ["sled", "pitch", "bench"], correct: ["sled", "bench"], incorrectPhonic: "ih", correctPhonic: "eh", wordsOnly: true},
].map((activityProps, i, activities) => {
  const sounds = activityProps.words.reduce((sounds, word) => {
    sounds[`teacher/${word}`] = `teacher/words/${word}`;
    return sounds;
  }, {
    "teacher/correct-phonic": `teacher/common/phonics/_${activityProps.correctPhonic}_`,
    "teacher/incorrect-phonic": `teacher/common/phonics/_${activityProps.incorrectPhonic}_`
  });
  const correctWords = activityProps.correct;
  const incorrectWord = activityProps.words.find((word) => !activityProps.correct.includes(word));

  @soundContext(sounds)
  class ActivityInstance extends React.Component {
    render() {
      return (
        <Activity {...this.props} {...activityProps}
          number={13}
          title="Short Sounds - Odd One Out"
          activityCount={activities.length}
          Question={Question}
          Response={Response}
          checkAnswer={checkAnswer}
          correctWords={correctWords}
          incorrectWord={incorrectWord}
        />
      );
    }
  }

  return ActivityInstance;
});
