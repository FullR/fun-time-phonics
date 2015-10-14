import React from "react";
import Activity from "components/levels/2/sub/activity";
import soundContext from "decorators/sound-context";

@soundContext({
  "teacher/shade": "teacher/words/shade",
  "teacher/dive": "teacher/words/dive",
  "teacher/crab": "teacher/words/crab"
})
export default class extends React.Component {
  render() {
    return (
      <Activity {...this.props}
        wordsOnly={true}
        words={["shade", "dive", "crab"]}
        correctIndex={0}
      />
    );
  }
}
