import React from "react";
import Activity from "components/levels/1/sub/activity";
import soundContext from "decorators/sound-context";

@soundContext({
  "teacher/gum": "teacher/words/gum",
  "teacher/igloo": "teacher/words/igloo",
  "teacher/bug": "teacher/words/bug"
})
export default class extends React.Component {
  render() {
    return (
      <Activity {...this.props}
        words={["gum", "igloo", "bug"]}
        correctIndex={0}
      />
    );
  }
}
