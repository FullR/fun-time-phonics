import React from "react";
import Activity from "./activity";
import soundContext from "decorators/sound-context";

// "Replace the {phonic} in {replaceWord} with {replacePhonic}, what is the new word"

export default [
  {words: ["cot", "cut", "coat"], replaceWord: "cat", phonic: "ah", replacePhonic: "uh", correct: "cut"},
  {words: ["bed", "bud", "bad"], replaceWord: "bid", phonic: "ih", replacePhonic: "ah", correct: "bad"},
  {words: ["hit", "hat", "hut"], replaceWord: "hot", phonic: "oh", replacePhonic: "ih", correct: "hit"},
  {words: ["cape", "cup", "cop"], replaceWord: "cap", phonic: "ah", replacePhonic: "oh", correct: "cop"},
  {words: ["pat", "pot", "putt"], replaceWord: "pet", phonic: "eh", replacePhonic: "oh", correct: "pot"},
  {words: ["top", "tip", "tape"], replaceWord: "tap", phonic: "ah", replacePhonic: "ih", correct: "tip"},
  {words: ["big", "bag", "beg"], replaceWord: "bug", phonic: "uh", replacePhonic: "eh", correct: "beg"},
  {words: ["chop", "shop", "shot"], replaceWord: "ship", phonic: "ih", replacePhonic: "oh", correct: "shop"},
  {words: ["nest", "net", "knot"], replaceWord: "nut", phonic: "uh", replacePhonic: "eh", correct: "net"},
  {words: ["bud", "bird", "bus"], replaceWord: "bed", phonic: "eh", replacePhonic: "uh", correct: "bud"},
  {words: ["pot", "pitch", "pit"], replaceWord: "putt", phonic: "uh", replacePhonic: "ih", correct: "pit"},
  {words: ["lip", "flap", "flip"], replaceWord: "flop", phonic: "oh", replacePhonic: "ih", correct: "flip"},
  {words: ["truck", "trick", "trunk"], replaceWord: "track", phonic: "ah", replacePhonic: "uh", correct: "truck"},
  {words: ["fish", "fast", "fat"], replaceWord: "fist", phonic: "ih", replacePhonic: "ah", correct: "fast"},
  {words: ["batter", "boater", "battle"], replaceWord: "butter", phonic: "uh", replacePhonic: "ah", correct: "batter"}
].map((activityProps) => {
  const sounds = activityProps.words.reduce((sounds, word) => {
    sounds[`teacher/${word}`] = `teacher/words/${word}`;
    return sounds;
  }, {
    "teacher/replace-word": `teacher/words/${activityProps.replaceWord}`
  });

  @soundContext(sounds)
  class ActivityInstance extends React.Component {
    render() {
      return <Activity {...this.props} {...activityProps}/>
    }
  }

  return ActivityInstance;
});
