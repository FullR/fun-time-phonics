import React from "react";
import Activity from "./activity";
import soundContext from "decorators/sound-context";

export default [
  {words: ["egg", "apple", "ill"], correct: "apple"},
  {words: ["add", "ape", "pig"], correct: "add"},
  {words: ["fix", "ox", "ax"], correct: "ax"},
  {words: ["mud", "mad", "mitt"], correct: "mad"},
  {words: ["hit", "hot", "hat"], correct: "hat"},
  {words: ["cap", "cup", "cape"], correct: "cap"},
  {words: ["bit", "boat", "bat"], correct: "bat"},
  {words: ["lip", "leap", "lap"], correct: "lap"},
  {words: ["bag", "beg", "big"], correct: "bag"},
  {words: ["bed", "bud", "bad"], correct: "bad"},
  {words: ["mop", "map", "men"], correct: "map"},
  {words: ["flap", "flip", "flop"], correct: "flap"},
  {words: ["fist", "fast", "feast"], correct: "fast"},
  {words: ["rest", "rush", "rash"], correct: "rash"},
  {words: ["track", "trick", "truck"], correct: "track"},
  {words: ["badge", "bridge", "edge"], correct: "badge"},
  {words: ["enter", "wreck", "actor"], correct: "actor"},
  {words: ["string", "stretch", "strap"], correct: "strap"},
  {words: ["screen", "scratch", "screw"], correct: "scratch"},
].map((activityProps) => {
  const sounds = activityProps.words.reduce((sounds, word) => {
    sounds[`teacher/${word}`] = `teacher/words/${word}`;
    return sounds;
  }, {});

  @soundContext(sounds)
  class Level8Activity extends React.Component {
    render() {
      return <Activity {...this.props} {...activityProps}/>
    }
  }

  return Level8Activity;
});
