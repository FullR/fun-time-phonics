import React from "react";
import Activity from "../activity";
import soundContext from "decorators/sound-context";

@soundContext({
  "teacher/read": "teacher/words/read",
  "teacher/bear": "teacher/words/bear",
  "teacher/rose": "teacher/words/rose",
})
export default class extends React.Component {
  render() {
    return (
      <Activity {...this.props}
        words={["read", "bear", "rose"]}
        correctIndexes={[0, 2]}
      />
    );
  }
}
