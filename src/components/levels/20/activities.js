import React from "react";
import Activity from "./activity";
import soundContext from "decorators/sound-context";

export default [
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
      return <Activity {...this.props} {...activityProps}/>
    }
  }

  return ActivityInstance;
});
