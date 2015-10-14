import React from "react";
import Activity from "../activity";
import soundContext from "decorators/sound-context";

@soundContext({
  "teacher/ring": "teacher/words/ring",
  "teacher/mad": "teacher/words/mad",
  "teacher/monkey": "teacher/words/monkey",
})
export default class extends React.Component {
  render() {
    return (
      <Activity {...this.props}
        words={["ring", "mad", "monkey"]}
        correctIndexes={[1, 2]}
      />
    );
  }
}
