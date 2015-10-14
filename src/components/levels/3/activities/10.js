import React from "react";
import Activity from "../activity";
import soundContext from "decorators/sound-context";

@soundContext({
  "teacher/moth": "teacher/words/moth",
  "teacher/thumb": "teacher/words/thumb",
  "teacher/thorn": "teacher/words/thorn",
})
export default class extends React.Component {
  render() {
    return (
      <Activity {...this.props}
        words={["moth", "thumb", "thorn"]}
        correctIndexes={[1, 2]}
      />
    );
  }
}
