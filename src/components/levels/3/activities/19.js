import React from "react";
import Activity from "../activity";
import soundContext from "decorators/sound-context";

@soundContext({
  "teacher/hand": "teacher/words/hand",
  "teacher/desk": "teacher/words/desk",
  "teacher/yard": "teacher/words/yard",
})
export default class extends React.Component {
  render() {
    return (
      <Activity {...this.props}
        ending={true}
        words={["hand", "desk", "yard"]}
        correctIndexes={[0, 2]}
      />
    );
  }
}
