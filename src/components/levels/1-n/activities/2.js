import React from "react";
import Activity from "components/levels/1/sub/activity";
import soundContext from "decorators/sound-context";

@soundContext({
  "teacher/hand": "teacher/words/hand",
  "teacher/net": "teacher/words/net",
  "teacher/bun": "teacher/words/bun"
})
export default class extends React.Component {
  render() {
    return (
      <Activity {...this.props}
        wordsOnly={true}
        words={["hand", "net", "bun"]}
        correctIndex={1}
      />
    );
  }
}
