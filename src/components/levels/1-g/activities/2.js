import React from "react";
import Activity from "components/levels/1/sub/activity";
import soundContext from "decorators/sound-context";

@soundContext({
  "teacher/hug": "teacher/words/hug",
  "teacher/gym": "teacher/words/gym",
  "teacher/girl": "teacher/words/girl"
})
export default class extends React.Component {
  render() {
    return (
      <Activity {...this.props}
        wordsOnly={true}
        words={["hug", "gym", "girl"]}
        correctIndex={2}
      />
    );
  }
}
