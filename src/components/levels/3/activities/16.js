import React from "react";
import Activity from "../activity";
import soundContext from "decorators/sound-context";

@soundContext({
  "teacher/itch": "teacher/words/itch",
  "teacher/dish": "teacher/words/dish",
  "teacher/trash": "teacher/words/trash",
})
export default class extends React.Component {
  render() {
    return (
      <Activity {...this.props}
        ending={true}
        words={["itch", "dish", "trash"]}
        correctIndexes={[1, 2]}
      />
    );
  }
}
