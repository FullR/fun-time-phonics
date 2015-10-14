import React from "react";
import Activity from "components/levels/2/sub/activity";
import soundContext from "decorators/sound-context";

@soundContext({
  "teacher/trap": "teacher/words/trap",
  "teacher/globe": "teacher/words/globe",
  "teacher/boxer": "teacher/words/boxer"
})
export default class extends React.Component {
  render() {
    return (
      <Activity {...this.props}
        wordsOnly={true}
        words={["trap", "globe", "boxer"]}
        correctIndex={1}
      />
    );
  }
}
