import React from "react";
import Activity from "../activity";
import soundContext from "decorators/sound-context";

@soundContext({
  "teacher/fish": "teacher/words/fish",
  "teacher/fist": "teacher/words/fist",
  "teacher/fast": "teacher/words/fast",
})
export default class extends React.Component {
  render() {
    return (
      <Activity {...this.props}
        ending={true}
        words={["fish", "fist", "fast"]}
        correctIndexes={[1, 2]}
      />
    );
  }
}
