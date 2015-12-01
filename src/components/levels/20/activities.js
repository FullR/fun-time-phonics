import React from "react";
import Activity1 from "./activity-1";
import Activity2 from "./activity-2";
import soundContext from "decorators/sound-context";

const firstHalf = [
  {letters: ["a", "o", "u"], word: "bug", correct: "u"},                  // 1
  {letters: ["e", "a", "i"], word: "mad", correct: "a", wordsOnly: true},
  {letters: ["o", "u", "a"], word: "cop", correct: "o", wordsOnly: true},
  {letters: ["a", "e", "u"], word: "red", correct: "e", wordsOnly: true},
  {letters: ["i", "o", "u"], word: "pin", correct: "i", wordsOnly: true}, // 5
  {letters: ["e", "a", "i"], word: "bat", correct: "a", wordsOnly: true},
  {letters: ["u", "o", "a"], word: "box", correct: "o", wordsOnly: true},
  {letters: ["e", "o", "u"], word: "sun", correct: "u", wordsOnly: true},
  {letters: ["e", "i", "o"], word: "jet", correct: "e", wordsOnly: true},
  {letters: ["i", "u", "a"], word: "fish", correct: "i", wordsOnly: true}, // 10
  {letters: ["u", "a", "o"], word: "hop", correct: "o", wordsOnly: true},
  {letters: ["i", "a", "e"], word: "ten", correct: "e", wordsOnly: true},
  {letters: ["o", "u", "i"], word: "pill", correct: "i", wordsOnly: true},
  {letters: ["e", "a", "o"], word: "lap", correct: "a", wordsOnly: true},
  {letters: ["u", "o", "a"], word: "hug", correct: "u", wordsOnly: true}  // 15
].map((activityProps) => {
  @soundContext({
    "teacher/word": `teacher/words/${activityProps.word}`
  })
  class ActivityInstance extends React.Component {
    render() {
      return (<Activity1 {...this.props} {...activityProps}/>);
    }
  }

  return ActivityInstance;
});

const secondHalf = [
  {words: ["cat", "cut", "coat"], letter: "a", correct: "cat"},
  {words: ["bud", "bed", "bad"], letter: "e", correct: "bed", wordsOnly: true},
  {words: ["tip", "tap", "top"], letter: "i", correct: "tip", wordsOnly: true},
  {words: ["sack", "sock", "sick"], letter: "o", correct: "sock", wordsOnly: true},
  {words: ["fin", "fan", "fun"], letter: "u", correct: "fun", wordsOnly: true},
  {words: ["bell", "ball", "bull"], letter: "e", correct: "bell", wordsOnly: true},
  {words: ["hat", "hut", "hot"], letter: "o", correct: "hot", wordsOnly: true},
  {words: ["bug", "bag", "big"], letter: "u", correct: "bug", wordsOnly: true},
  {words: ["lap", "lip", "leap"], letter: "i", correct: "lip", wordsOnly: true},
  {words: ["baby", "bed", "bad"], letter: "a", correct: "bad", wordsOnly: true},
  {words: ["pin", "pen", "pan"], letter: "e", correct: "pen", wordsOnly: true},
  {words: ["lock", "lick", "lake"], letter: "i", correct: "lick", wordsOnly: true},
  {words: ["cap", "cup", "cape"], letter: "u", correct: "cup", wordsOnly: true},
  {words: ["knit", "knot", "net"], letter: "i", correct: "knit", wordsOnly: true},
  {words: ["bug", "beg", "big"], letter: "e", correct: "beg", wordsOnly: true}
].map((activityProps) => {
  @soundContext(activityProps.words.reduce((sounds, word) => {
    sounds[`teacher/${word}`] = `teacher/words/${word}`;
    return sounds;
  }, {}))
  class ActivityInstance extends React.Component {
    render() {
      return (<Activity2 {...this.props} {...activityProps}/>);
    }
  }

  return ActivityInstance;
});

export default firstHalf.concat(secondHalf);
