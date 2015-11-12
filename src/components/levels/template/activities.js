import React from "react";
import Activity from "./activity";
import soundContext from "decorators/sound-context";

export default [
  {words: ["", "", ""], correct: ""},                  // 1
  {words: ["", "", ""], correct: "", wordsOnly: true},
  {words: ["", "", ""], correct: "", wordsOnly: true},
  {words: ["", "", ""], correct: "", wordsOnly: true},
  {words: ["", "", ""], correct: "", wordsOnly: true}, // 5
  {words: ["", "", ""], correct: "", wordsOnly: true},
  {words: ["", "", ""], correct: "", wordsOnly: true},
  {words: ["", "", ""], correct: "", wordsOnly: true},
  {words: ["", "", ""], correct: "", wordsOnly: true},
  {words: ["", "", ""], correct: "", wordsOnly: true}, // 10
  {words: ["", "", ""], correct: "", wordsOnly: true},
  {words: ["", "", ""], correct: "", wordsOnly: true},
  {words: ["", "", ""], correct: "", wordsOnly: true},
  {words: ["", "", ""], correct: "", wordsOnly: true},
  {words: ["", "", ""], correct: "", wordsOnly: true}, // 15
  {words: ["", "", ""], correct: "", wordsOnly: true},
  {words: ["", "", ""], correct: "", wordsOnly: true},
  {words: ["", "", ""], correct: "", wordsOnly: true},
  {words: ["", "", ""], correct: "", wordsOnly: true},
  {words: ["", "", ""], correct: "", wordsOnly: true}  // 20
].map((activityProps) => {
  const sounds = activityProps.words.reduce((sounds, word) => {
    sounds[`teacher/${word}`] = `teacher/words/${word}`;
    return sounds;
  }, {
    /* additional sounds go here */
  });

  @soundContext(sounds)
  class ActivityInstance extends React.Component {
    render() {
      return <Activity {...this.props} {...activityProps}/>
    }
  }

  return ActivityInstance;
});
