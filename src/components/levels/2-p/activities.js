import React from "react";
import Activity from "components/levels/2/sub/activity";
import soundContext from "decorators/sound-context";

export default [
  {words: ["apple", "pear", "grape"], correct: "grape"},
  {words: ["crib", "lips", "slip"], correct: "slip", wordsOnly: true}
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
