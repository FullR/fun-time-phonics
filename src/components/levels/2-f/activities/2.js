import React from "react";
import Activity from "components/levels/2/sub/activity";
import soundContext from "decorators/sound-context";

@soundContext({
  "teacher/coffee": "teacher/words/coffee",
  "teacher/bath": "teacher/words/bath",
  "teacher/cliff": "teacher/words/cliff"
})
export default class extends React.Component {
  render() {
    return (
      <Activity {...this.props}
        wordsOnly={true}
        words={["coffee", "bath", "cliff"]}
        correctIndex={2}
      />
    );
  }
}
