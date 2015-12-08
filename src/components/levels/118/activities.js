import React from "react";
import Activity from "components/activity";
import soundContext from "decorators/sound-context";
import Question from "./question";
import Response from "./response";

export default [
  {words: ["fox", "fuss", "chest"], correct: "fox"},
  {words: ["sack", "boxer", "six"], correct: "six", soundsOnly: true},
  {words: ["mixer", "Max", "wreck"], correct: "Max", soundsOnly: true},
  {words: ["box", "bees", "hexagon"], correct: "box", soundsOnly: true},
  {words: ["taxi", "fix", "feast"], correct: "fix", soundsOnly: true}
].map((activityProps) => {
  const sounds = activityProps.words.reduce((sounds, word) => {
    sounds[`teacher/${word}`] = `teacher/words/${word}`;
    return sounds;
  }, {});

  @soundContext(sounds)
  class ActivityInstance extends React.Component {
    render() {
      return <Activity {...this.props} {...activityProps} Question={Question} Response={Response}/>
    }
  }

  return ActivityInstance;
});
