import React from "react";
import Activity from "components/activity";
import Question1 from "./question-1";
import Question2 from "./question-2";
import Response1 from "./response-1";
import Response2 from "./response-2";
import soundContext from "decorators/sound-context";

const firstHalf = [
  {letters: ["a", "o", "u"], word: "bug", correct: "u"}, // 1
  {letters: ["e", "a", "i"], word: "mad", correct: "a"},
  {letters: ["o", "u", "a"], word: "cop", correct: "o"},
  {letters: ["a", "e", "u"], word: "red", correct: "e"},
  {letters: ["i", "o", "u"], word: "pin", correct: "i"}, // 5
  {letters: ["e", "a", "i"], word: "bat", correct: "a"},
  {letters: ["u", "o", "a"], word: "box", correct: "o"},
  {letters: ["e", "o", "u"], word: "sun", correct: "u"},
  {letters: ["e", "i", "o"], word: "jet", correct: "e"},
  {letters: ["i", "u", "a"], word: "fish", correct: "i"}, // 10
  {letters: ["u", "a", "o"], word: "hop", correct: "o"},
  {letters: ["i", "a", "e"], word: "ten", correct: "e"},
  {letters: ["o", "u", "i"], word: "pill", correct: "i"},
  {letters: ["e", "a", "o"], word: "lap", correct: "a"},
  {letters: ["u", "o", "a"], word: "hug", correct: "u"}  // 15
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
  {words: ["cat", "cut", "coat"], letter: "a", correct: "cat", fullInstructions: true},
  {words: ["bud", "bed", "bad"], letter: "e", correct: "bed"},
  {words: ["tip", "tap", "top"], letter: "i", correct: "tip"},
  {words: ["sack", "sock", "sick"], letter: "o", correct: "sock"},
  {words: ["fin", "fan", "fun"], letter: "u", correct: "fun"},
  {words: ["bell", "ball", "bull"], letter: "e", correct: "bell"},
  {words: ["hat", "hut", "hot"], letter: "o", correct: "hot"},
  {words: ["bug", "bag", "big"], letter: "u", correct: "bug"},
  {words: ["lap", "lip", "leap"], letter: "i", correct: "lip"},
  {words: ["baby", "bed", "bad"], letter: "a", correct: "bad"},
  {words: ["pin", "pen", "pan"], letter: "e", correct: "pen"},
  {words: ["lock", "lick", "lake"], letter: "i", correct: "lick"},
  {words: ["cap", "cup", "cape"], letter: "u", correct: "cup"},
  {words: ["knit", "knot", "net"], letter: "i", correct: "knit"},
  {words: ["bug", "beg", "big"], letter: "e", correct: "beg"}
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
