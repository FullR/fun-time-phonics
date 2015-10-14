import React from "react";
import Activity from "../activity";
import soundContext from "decorators/sound-context";

@soundContext({
  "teacher/chop": "teacher/words/chop",
  "teacher/itch": "teacher/words/itch",
  "teacher/chin": "teacher/words/chin",
})
export default class extends React.Component {
  render() {
    return (
      <Activity {...this.props}
        words={["chop", "itch", "chin"]}
        correctIndexes={[0, 2]}
      />
    );
  }
}
