import React from "react";
import Activity from "components/levels/2/sub/activity";
import soundContext from "decorators/sound-context";

@soundContext({
  "teacher/kitchen": "teacher/words/kitchen",
  "teacher/pickle": "teacher/words/pickle",
  "teacher/kick": "teacher/words/kick"
})
export default class extends React.Component {
  render() {
    return (
      <Activity {...this.props}
        wordsOnly={true}
        words={["kitchen", "pickle", "kick"]}
        correctIndex={2}
      />
    );
  }
}
