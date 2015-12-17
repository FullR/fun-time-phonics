import React from "react";
import Activity from "components/activity";
import soundContext from "decorators/sound-context";
import Question from "./question";
import Response from "./response";
import image from "image";

const checkAnswer = ({words}, correct) => correct.every((w) => words.includes(w));

export default [
  {words: ["hop", "dog", "hot"], correct: ["hop", "hot"]},
  {words: ["box", "socks", "boy"], correct: ["box", "boy"], wordsOnly: true},
  {words: ["ring", "mad", "monkey"], correct: ["mad", "monkey"], wordsOnly: true},
  {words: ["chop", "itch", "chin"], correct: ["chop", "chin"], wordsOnly: true},
  {words: ["read", "bear", "rose"], correct: ["read", "rose"], wordsOnly: true},
  {words: ["trash", "desk", "dish"], correct: ["desk", "dish"], wordsOnly: true},
  {words: ["pot", "pig", "top"], correct: ["pot", "pig"], wordsOnly: true},
  {words: ["violin", "fin", "vase"], correct: ["violin", "vase"], wordsOnly: true},
  {words: ["flag", "frog", "gopher"], correct: ["flag", "frog"], wordsOnly: true},
  {words: ["moth", "thumb", "thorn"], correct: ["thumb", "thorn"], wordsOnly: true},
  {words: ["swing", "ice", "stick"], correct: ["swing", "stick"], wordsOnly: true},
  {words: ["trick", "drink", "table"], correct: ["trick", "table"], wordsOnly: true},
  {words: ["map", "mad", "lip"], correct: ["map", "lip"], ending: true, endingIntro: true},
  {words: ["fish", "fist", "fast"], correct: ["fist", "fast"], ending: true, wordsOnly: true},
  {words: ["man", "mom", "jam"], correct: ["mom", "jam"], ending: true, wordsOnly: true},
  {words: ["itch", "dish", "trash"], correct: ["dish", "trash"], ending: true, wordsOnly: true},
  {words: ["sleep", "sheep", "sheet"], correct: ["sleep", "sheep"], ending: true, wordsOnly: true},
  {words: ["milk", "spill", "talk"], correct: ["milk", "talk"], ending: true, wordsOnly: true},
  {words: ["hand", "desk", "yard"], correct: ["hand", "yard"], ending: true, wordsOnly: true},
  {words: ["string", "sink", "tongue"], correct: ["string", "tongue"], ending: true, wordsOnly: true},
  {words: ["blue", "shoe", "boot"], correct: ["blue", "shoe"], ending: true, wordsOnly: true},
  {words: ["snow", "boat", "piano"], correct: ["snow", "piano"], ending: true, wordsOnly: true},
  {words: ["play", "pail", "spray"], correct: ["play", "spray"], ending: true, wordsOnly: true},
  {words: ["cowboy", "oyster", "fur"], correct: ["oyster", "fur"], ending: true, wordsOnly: true}
].map((activityProps, i) => {
  const sounds = activityProps.words.reduce((sounds, word) => {
    sounds[`teacher/${word}`] = `teacher/words/${word}`;
    return sounds;
  }, {});

  @soundContext(sounds)
  class Level3Activity extends React.Component {
    render() {
      return (
        <Activity {...this.props} {...activityProps}
          number={3}
          title={activityProps.ending ?
            (<span>Beginning and <span style={{color: "#F00"}}>Ending</span> Sounds</span>) :
            (<span><span style={{color: "#00F"}}>Beginning</span> and Ending Sounds</span>)
          }
          activityCount={24}
          Question={Question}
          Response={Response}
          checkAnswer={checkAnswer}
        />
      );
    }
  }

  return Level3Activity;
});
