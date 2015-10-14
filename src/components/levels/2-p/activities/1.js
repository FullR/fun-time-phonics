import React from "react";
import Activity from "components/levels/2/sub/activity";
import soundContext from "decorators/sound-context";

@soundContext({
  "teacher/apple": "teacher/words/apple",
  "teacher/pear": "teacher/words/pear",
  "teacher/grape": "teacher/words/grape"
})
export default class extends React.Component {
  render() {
    return (
      <Activity {...this.props}
        words={["apple", "pear", "grape"]}
        correctIndex={2}
      />
    );
  }
}
