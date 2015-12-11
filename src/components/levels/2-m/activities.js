import React from "react";
import Activity from "components/levels/2/sub/activity";
import soundContext from "decorators/sound-context";

export default [
  {words: ["stamp", "swim", "milk"], correct: "swim"},
  {words: ["chin", "man", "crumb"], correct: "crumb", wordsOnly: true}
].map((activityProps) => {
  const sounds = activityProps.words.reduce((sounds, word) => {
    sounds[`teacher/${word}`] = `teacher/words/${word}`;
    return sounds;
  }, {});

  @soundContext(sounds)
  class ActivityInstance extends React.Component {
    render() {
      return (
        <Activity {...this.props} {...activityProps}/>
      );
    }
  }

  return ActivityInstance;
});
