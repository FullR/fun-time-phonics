import React from "react";
import Activity from "components/levels/1/sub/activity";
import soundContext from "decorators/sound-context";

export default [
  {words: ["bus", "zoo", "sing"], correct: "sing"},
  {words: ["fish", "ship", "sled"], correct: "sled", wordsOnly: true}
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
