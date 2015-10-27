import React from "react";
import Activity from "./activity";
import soundContext from "decorators/sound-context";

export default [
  {words: ["hat", "run", "bed"], rhymeWord: "red", correct: "bed"},
  {words: ["mud", "rat", "sun"], rhymeWord: "fat", correct: "rat"},
  {words: ["bug", "under", "cup"], rhymeWord: "up", correct: "cup"},
  {words: ["pal", "call", "pill"], rhymeWord: "ball", correct: "call"},
  {words: ["chin", "on", "up"], rhymeWord: "in", correct: "chin"},
  {words: ["pug", "drop", "rug"], rhymeWord: "hop", correct: "drop"},
  {words: ["deck", "pet", "wait"], rhymeWord: "wet", correct: "pet"},
  {words: ["fists", "kiss", "dish"], rhymeWord: "fish", correct: "dish"},
  {words: ["hut", "cot", "hat"], rhymeWord: "hot", correct: "cot"},
  {words: ["hip", "crib", "mop"], rhymeWord: "lip", correct: "hip"},
  {words: ["bag", "edge", "beg"], rhymeWord: "egg", correct: "beg"},
  {words: ["bag", "wax", "black"], rhymeWord: "ax", correct: "wax"},
  {words: ["Beth", "fast", "path"], rhymeWord: "bath", correct: "path"},
  {words: ["hot", "hogs", "rocks"], rhymeWord: "ox", correct: "rocks"},
  {words: ["hand", "bread", "heavy"], rhymeWord: "head", correct: "bread"},
  {words: ["stick", "swing", "sink"], rhymeWord: "string", correct: "swing"},
  {words: ["drill", "bell", "doll"], rhymeWord: "ill", correct: "drill"},
  {words: ["pitch", "wrench", "punch"], rhymeWord: "bench", correct: "wrench"},
  {words: ["bucket", "duck", "trunk"], rhymeWord: "truck", correct: "duck"},
  {words: ["stump", "camp", "plant"], rhymeWord: "stamp", correct: "camp"}
].map((activityProps) => {
  const sounds = activityProps.words.reduce((sounds, word) => {
    sounds[`teacher/${word}`] = `teacher/words/${word}`;
    return sounds;
  }, {"teacher/rhyme-word": `teacher/words/${activityProps.rhymeWord}`});

  @soundContext(sounds)
  class Level4Activity extends React.Component {
    render() {
      return <Activity {...this.props} {...activityProps}/>
    }
  }

  return Level4Activity;
});
