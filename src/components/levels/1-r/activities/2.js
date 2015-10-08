import React from "react";
import Activity from "components/levels/1/sub/activity";
import soundContext from "decorators/sound-context";

@soundContext({
  "teacher/red": "teacher/words/red",
  "teacher/door": "teacher/words/door",
  "teacher/church": "teacher/words/church"
})
export default class extends React.Component {
  render() {
    return (
      <Activity {...this.props}
        wordsOnly={true}
        words={["red", "door", "church"]}
        correctIndex={0}
      />
    );
  }
}
