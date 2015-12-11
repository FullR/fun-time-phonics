import React from "react";
import Activity from "components/activity";
import Question from "./question";
import Response from "./response";
import soundContext from "decorators/sound-context";

export default [
  {words: ["top", "pig", "hen"], correct: "top"},
  {words: ["bug", "ten", "car"], correct: "ten", wordsOnly: true},
  {words: ["wet", "pet", "toys"], correct: "toys", wordsOnly: true}
].map((activityProps) => {
  const sounds = activityProps.words.reduce((sounds, word) => {
    sounds[`teacher/${word}`] = `teacher/words/${word}`;
    return sounds;
  }, {});

  @soundContext(sounds)
  class ActivityInstance extends React.Component {
    render() {
      return (
        <Activity {...this.props} {...activityProps}
          number={1}
          activityCount={15}
          title="Beginning Sounds"
          Question={Question}
          Response={Response}
        />
      );
    }
  }

  return ActivityInstance;
});
