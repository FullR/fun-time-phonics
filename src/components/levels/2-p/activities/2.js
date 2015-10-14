import React from "react";
import Activity from "components/levels/2/sub/activity";
import soundContext from "decorators/sound-context";

@soundContext({
  "teacher/crib": "teacher/words/crib",
  "teacher/lips": "teacher/words/lips",
  "teacher/slip": "teacher/words/slip"
})
export default class extends React.Component {
  render() {
    return (
      <Activity {...this.props}
        wordsOnly={true}
        words={["crib", "lips", "slip"]}
        correctIndex={2}
      />
    );
  }
}
