import React from "react";
import Activity from "../activity";
import soundContext from "decorators/sound-context";

@soundContext({
  "teacher/trash": "teacher/words/trash",
  "teacher/desk": "teacher/words/desk",
  "teacher/dish": "teacher/words/dish",
})
export default class extends React.Component {
  render() {
    return (
      <Activity {...this.props}
        words={["trash", "desk", "dish"]}
        correctIndexes={[1, 2]}
      />
    );
  }
}
