import React from "react";
import Activity from "../activity";
import soundContext from "decorators/sound-context";

@soundContext({
  "teacher/sleep": "teacher/words/sleep",
  "teacher/sheep": "teacher/words/sheep",
  "teacher/sheet": "teacher/words/sheet",
})
export default class extends React.Component {
  render() {
    return (
      <Activity {...this.props}
        ending={true}
        words={["sleep", "sheep", "sheet"]}
        correctIndexes={[0, 1]}
      />
    );
  }
}
