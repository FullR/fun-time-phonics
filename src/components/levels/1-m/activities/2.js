import React from "react";
import Activity from "components/levels/1/sub/activity";
import soundContext from "decorators/sound-context";

@soundContext({
  "teacher/clam": "teacher/words/clam",
  "teacher/ram": "teacher/words/ram",
  "teacher/man": "teacher/words/man"
})
export default class extends React.Component {
  render() {
    return (
      <Activity {...this.props}
        wordsOnly={true}
        words={["clam", "ram", "man"]}
        correctIndex={2}
      />
    );
  }
}
