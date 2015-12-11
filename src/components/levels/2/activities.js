import React from "react";
import Activity from "components/activity";
import Question from "./question";
import Response from "./response";
import soundContext from "decorators/sound-context";

export default [
  {words: ["cat", "fish", "hop"], correct: "cat"},
  {words: ["butter", "two", "pot"], correct: "pot", wordsOnly: true},
  {words: ["stick", "blast", "sister"], correct: "blast", wordsOnly: true}
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
          number={2}
          activityCount={15}
          title="Ending Sounds"
          Question={Question}
          Response={Response}
        />
      );
    }
  }

  return ActivityInstance;
});
