import React from "react";
import Activity from "../activity";
import soundContext from "decorators/sound-context";

@soundContext({
  "teacher/trick": "teacher/words/trick",
  "teacher/drink": "teacher/words/drink",
  "teacher/table": "teacher/words/table",
})
export default class extends React.Component {
  render() {
    return (
      <Activity {...this.props}
        words={["trick", "drink", "table"]}
        correctIndexes={[0, 2]}
      />
    );
  }
}
