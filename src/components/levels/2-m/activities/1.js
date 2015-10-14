import React from "react";
import Activity from "components/levels/2/sub/activity";
import soundContext from "decorators/sound-context";

@soundContext({
  "teacher/stamp": "teacher/words/stamp",
  "teacher/swim": "teacher/words/swim",
  "teacher/milk": "teacher/words/milk"
})
export default class extends React.Component {
  render() {
    return (
      <Activity {...this.props}
        words={["stamp", "swim", "milk"]}
        correctIndex={1}
      />
    );
  }
}
