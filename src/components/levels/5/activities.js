import React from "react";
import Activity from "./activity";
import soundContext from "decorators/sound-context";

export default [
  {words: ["bat", "rat", "cake"], correct: ["bat", "rat"]},
  {words: ["red", "hot", "sled"], correct: ["red", "sled"], wordsOnly: true},
  {words: ["leg", "egg", "box"], correct: ["leg", "egg"], wordsOnly: true},
  {words: ["sit", "hot", "hit"], correct: ["sit", "hit"], wordsOnly: true},
  {words: ["mad", "mask", "bad"], correct: ["mad", "bad"], wordsOnly: true},
  {words: ["nine", "run", "sun"], correct: ["run", "sun"], wordsOnly: true},
  {words: ["mop", "cop", "cup"], correct: ["mop", "cop"], wordsOnly: true},
  {words: ["cap", "ax", "tacks"], correct: ["ax", "tacks"], wordsOnly: true},
  {words: ["in", "on", "pin"], correct: ["in", "pin"], wordsOnly: true},
  {words: ["trip", "trap", "flip"], correct: ["trip", "flip"], wordsOnly: true},
  {words: ["shop", "shot", "knot"], correct: ["shot", "knot"], wordsOnly: true},
  {words: ["stop", "step", "drop"], correct: ["stop", "drop"], wordsOnly: true},
  {words: ["ant", "tent", "plant"], correct: ["ant", "plant"], wordsOnly: true},
  {words: ["chin", "shin", "inch"], correct: ["chin", "shin"], wordsOnly: true},
  {words: ["thread", "three", "head"], correct: ["thread", "head"], wordsOnly: true},
  {words: ["sneeze", "cheese", "tree"], correct: ["sneeze", "cheese"], wordsOnly: true},
  {words: ["square", "jar", "bear"], correct: ["square", "bear"], wordsOnly: true},
  {words: ["string", "strong", "king"], correct: ["string", "king"], wordsOnly: true},
  {words: ["shark", "sharp", "park"], correct: ["shark", "park"], wordsOnly: true}
].map((activityProps) => {
  const sounds = activityProps.words.reduce((sounds, word) => {
    sounds[`teacher/${word}`] = `teacher/words/${word}`;
    return sounds;
  }, {});

  @soundContext(sounds)
  class Level5Activity extends React.Component {
    render() {
      return <Activity {...this.props} {...activityProps}/>
    }
  }

  return Level5Activity;
});
