import React from "react";
import Activity from "./activity";
import soundContext from "decorators/sound-context";

export default [
  {words: ["box", "egg", "cat"], correct: "egg", phonics: ["eh", "g"]},
  {words: ["hot", "cut", "up"], correct: "up", phonics: ["uh", "p"], soundsOnly: true},
  {words: ["in", "on", "under"], correct: "in", phonics: ["ih", "n"], soundsOnly: true},
  {words: ["ice", "axe", "ash"], correct: "axe", phonics: ["ah", "cks"], soundsOnly: true},
  {words: ["on", "off", "ox"], correct: "ox", phonics: ["oh", "cks"], soundsOnly: true},
  {words: ["add", "head", "hat"], correct: "add", phonics: ["ah", "d"], soundsOnly: true},
  {words: ["bug", "dog", "rug"], correct: "bug", phonics: ["b", "uh", "g"], soundsOnly: true},
  {words: ["sick", "sit", "stick"], correct: "sit", phonics: ["s", "ih", "t"], soundsOnly: true},
  {words: ["mad", "mask", "dad"], correct: "mad", phonics: ["m", "ah", "d"], soundsOnly: true},
  {words: ["tape", "tub", "top"], correct: "top", phonics: ["t", "oh", "p"], soundsOnly: true},
  {words: ["road", "red", "wrench"], correct: "red", phonics: ["r", "eh", "d"], soundsOnly: true},
  {words: ["wag", "wig", "wick"], correct: "wig", phonics: ["w", "ih", "g"], soundsOnly: true},
  {words: ["duck", "dock", "deck"], correct: "duck", phonics: ["d", "uh", "k"], soundsOnly: true},
  {words: ["chop", "ship", "shop"], correct: "shop", phonics: ["sh", "oh", "p"], soundsOnly: true},
  {words: ["itch", "inch", "bench"], correct: "inch", phonics: ["ih", "n", "ch"], soundsOnly: true}
].map((activityProps) => {
  const sounds = activityProps.words.reduce((sounds, word) => {
    sounds[`teacher/${word}`] = `teacher/words/${word}`;
    return sounds;
  }, {
    "teacher/sounded-parts": `teacher/lesson-6/sounded-parts/${activityProps.phonics.join("_")}`
  });

  @soundContext(sounds)
  class Level6Activity extends React.Component {
    render() {
      return <Activity {...this.props} {...activityProps}/>
    }
  }

  return Level6Activity;
});
