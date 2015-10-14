import React from "react";
import Activity from "components/levels/2/sub/activity";
import soundContext from "decorators/sound-context";

@soundContext({
  "teacher/truck": "teacher/words/truck",
  "teacher/tickle": "teacher/words/tickle",
  "teacher/kite": "teacher/words/kite"
})
export default class extends React.Component {
  render() {
    return (
      <Activity {...this.props}
        words={["truck", "tickle", "kite"]}
        correctIndex={0}
      />
    );
  }
}
