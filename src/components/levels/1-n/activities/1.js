import React from "react";
import Activity from "components/levels/1/sub/activity";
import soundContext from "decorators/sound-context";

@soundContext({
  "teacher/run": "teacher/words/run",
  "teacher/ant": "teacher/words/ant",
  "teacher/nut": "teacher/words/nut"
})
export default class extends React.Component {
  render() {
    return (
      <Activity {...this.props}
        words={["run", "ant", "nut"]}
        correctIndex={2}
      />
    );
  }
}
