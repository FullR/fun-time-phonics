import React from "react";
import Activity from "components/activity";
import Question1 from "./question-1";
import Question2 from "./question-2";
import Response1 from "./response-1";
import Response2 from "./response-2";
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
      const checkAnswer = ({letter}, correct) => letter === correct;
      return (
        <Activity {...this.props} {...activityProps}
          number={20}
          title="Short Vowel Letter Sound Review"
          activityCount={30}
          checkAnswer={checkAnswer}
          Question={Question1}
          Response={Response1}
        />
      );
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
      const checkAnswer = ({word}, correct) => word === correct;
      return (
        <Activity {...this.props} {...activityProps}
          number={20}
          title="Short Vowel Letter Sound Review"
          activityCount={30}
          Question={Question2}
          Response={Response2}
          checkAnswer={checkAnswer}
        />
      );
    }
  }

  return ActivityInstance;
});

export default firstHalf.concat(secondHalf);
