import React from "react";
import Activity from "components/levels/1/sub/activity";
import soundContext from "decorators/sound-context";

@soundContext({
  "teacher/fish": "teacher/words/fish",
  "teacher/ship": "teacher/words/ship",
  "teacher/sled": "teacher/words/sled"
})
export default class extends React.Component {
  render() {
    return (
      <Activity {...this.props}
        wordsOnly={true} 
        words={["fish", "ship", "sled"]}
        correctIndex={2}
      />
    );
  }
}
