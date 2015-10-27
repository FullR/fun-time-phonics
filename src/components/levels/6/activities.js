import React from "react";
import Activity from "./activity";
import soundContext from "decorators/sound-context";

export default [
  {words: ["box", "egg", "cat"], correct: "egg", phonics: ["eh", "g"]},
  {words: ["hot", "cut", "up"], correct: "up", phonics: ["uh", "p"]},
  {words: ["in", "on", "under"], correct: "in", phonics: ["ih", "n"]},
  {words: ["ice", "ax", "ash"], correct: "ax", phonics: ["ah", "cks"]},
  {words: ["on", "off", "ox"], correct: "ox", phonics: ["oh", "cks"]},
  {words: ["add", "head", "hat"], correct: "add", phonics: ["ah", "d"]},
  {words: ["bug", "dog", "rug"], correct: "bug", phonics: ["b", "uh", "g"]},
  {words: ["sick", "sit", "stick"], correct: "sit", phonics: ["s", "ih", "t"]},
  {words: ["mad", "mask", "dad"], correct: "mad", phonics: ["m", "ah", "d"]},
  {words: ["tape", "tub", "top"], correct: "top", phonics: ["t", "oh", "p"]},
  {words: ["road", "red", "wrench"], correct: "red", phonics: ["r", "eh", "d"]},
  {words: ["wag", "wig", "wick"], correct: "wig", phonics: ["w", "ih", "g"]},
  {words: ["duck", "dock", "deck"], correct: "duck", phonics: ["d", "uh", "k"]},
  {words: ["chop", "ship", "shop"], correct: "shop", phonics: ["sh", "oh", "p"]},
  {words: ["itch", "inch", "bench"], correct: "inch", phonics: ["ih", "n", "ch"]}
].map((activityProps) => {
  const sounds = activityProps.words.reduce((sounds, word) => {
    sounds[`teacher/${word}`] = `teacher/words/${word}`;
    return sounds;
  }, {
    "teacher/sounded-parts": `teacher/level-6/sounded-parts/${activityProps.phonics.join("_")}`
  });

  @soundContext(sounds)
  class Level6Activity extends React.Component {
    render() {
      return <Activity {...this.props} {...activityProps}/>
    }
  }

  return Level6Activity;
});
