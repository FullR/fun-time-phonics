import React from "react";
import Activity from "components/activity";
import Question from "./question";
import Response from "./response";
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
  {words: ["bag", "wax", "black"], rhymeWord: "axe", correct: "wax"},
  {words: ["Beth", "fast", "path"], rhymeWord: "bath", correct: "path"},
  {words: ["hot", "hogs", "rocks"], rhymeWord: "ox", correct: "rocks"},
  {words: ["hand", "bread", "heavy"], rhymeWord: "head", correct: "bread"},
  {words: ["stick", "swing", "sink"], rhymeWord: "string", correct: "swing"},
  {words: ["drill", "bell", "doll"], rhymeWord: "ill", correct: "drill"},
  {words: ["pitch", "wrench", "punch"], rhymeWord: "bench", correct: "wrench"},
  {words: ["bucket", "duck", "trunk"], rhymeWord: "truck", correct: "duck"},
  {words: ["stump", "camp", "plant"], rhymeWord: "stamp", correct: "camp"}
].map((activityProps, i, activities) => {
  const sounds = activityProps.words.reduce((sounds, word) => {
    sounds[`teacher/${word}`] = `teacher/words/${word}`;
    return sounds;
  }, {"teacher/rhyme-word": `teacher/words/${activityProps.rhymeWord}`});

  @soundContext(sounds)
  class ActivityInstance extends React.Component {
    render() {
      return (
        <Activity {...this.props} {...activityProps}
          number={4}
          activityCount={activities.length}
          title="Rhyme Match"
          Question={Question}
          Response={Response}
        />
      );
    }
  }

  return ActivityInstance;
});
