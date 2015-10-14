import React from "react";
import Activity from "../activity";
import soundContext from "decorators/sound-context";

@soundContext({
  "teacher/swing": "teacher/words/swing",
  "teacher/ice": "teacher/words/ice",
  "teacher/stick": "teacher/words/stick",
})
export default class extends React.Component {
  render() {
    return (
      <Activity {...this.props}
        words={["swing", "ice", "stick"]}
        correctIndexes={[0, 2]}
      />
    );
  }
}
