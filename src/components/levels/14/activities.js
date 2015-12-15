import React from "react";
import Activity from "components/activity";
import Question from "./question";
import Response from "./response";
import soundContext from "decorators/sound-context";

// "Replace the {phonic} in {replaceWord} with {replacePhonic}, what is the new word"

export default [
  {words: ["cot", "cut", "coat"], replaceWord: "cat", replacePhonic: "ah", phonic: "uh", correct: "cut"},
  {words: ["bed", "bud", "bad"], replaceWord: "bid", replacePhonic: "ih", phonic: "ah", correct: "bad"},
  {words: ["hit", "hat", "hut"], replaceWord: "hot", replacePhonic: "oh", phonic: "ih", correct: "hit"},
  {words: ["cape", "cup", "cop"], replaceWord: "cap", replacePhonic: "ah", phonic: "oh", correct: "cop"},
  {words: ["pat", "pot", "putt"], replaceWord: "pet", replacePhonic: "eh", phonic: "oh", correct: "pot"},
  {words: ["top", "tip", "tape"], replaceWord: "tap", replacePhonic: "ah", phonic: "ih", correct: "tip"},
  {words: ["big", "bag", "beg"], replaceWord: "bug", replacePhonic: "uh", phonic: "eh", correct: "beg"},
  {words: ["chop", "shop", "shot"], replaceWord: "ship", replacePhonic: "ih", phonic: "oh", correct: "shop"},
  {words: ["nest", "net", "knot"], replaceWord: "nut", replacePhonic: "uh", phonic: "eh", correct: "net"},
  {words: ["bud", "bird", "bus"], replaceWord: "bed", replacePhonic: "eh", phonic: "uh", correct: "bud"},
  {words: ["pot", "pitch", "pit"], replaceWord: "putt", replacePhonic: "uh", phonic: "ih", correct: "pit"},
  {words: ["lip", "flap", "flip"], replaceWord: "flop", replacePhonic: "oh", phonic: "ih", correct: "flip"},
  {words: ["truck", "trick", "trunk"], replaceWord: "track", replacePhonic: "ah", phonic: "uh", correct: "truck"},
  {words: ["fish", "fast", "fat"], replaceWord: "fist", replacePhonic: "ih", phonic: "ah", correct: "fast"},
  {words: ["batter", "boater", "battle"], replaceWord: "butter", replacePhonic: "uh", phonic: "ah", correct: "batter"}
].map((activityProps, i, activities) => {
  const sounds = activityProps.words.reduce((sounds, word) => {
    sounds[`teacher/${word}`] = `teacher/words/${word}`;
    return sounds;
  }, {
    "teacher/replace-word": `teacher/words/${activityProps.replaceWord}`
  });

  @soundContext(sounds)
  class ActivityInstance extends React.Component {
    render() {
      return (
        <Activity {...this.props} {...activityProps}
          number={14}
          activityCount={activities.length}
          title="Short Sounds - Forming New Words"
          Question={Question}
          Response={Response}
        />
      );
    }
  }

  return ActivityInstance;
});
