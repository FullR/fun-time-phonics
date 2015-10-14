import React from "react";
import Activity from "../activity";
import soundContext from "decorators/sound-context";

@soundContext({
  "teacher/violin": "teacher/words/violin",
  "teacher/fin": "teacher/words/fin",
  "teacher/vase": "teacher/words/vase",
})
export default class extends React.Component {
  render() {
    return (
      <Activity {...this.props}
        words={["violin", "fin", "vase"]}
        correctIndexes={[0, 2]}
      />
    );
  }
}
