import React from "react";
import Activity from "components/levels/2/sub/activity";
import soundContext from "decorators/sound-context";

@soundContext({
  "teacher/chin": "teacher/words/chin",
  "teacher/man": "teacher/words/man",
  "teacher/crumb": "teacher/words/crumb"
})
export default class extends React.Component {
  render() {
    return (
      <Activity {...this.props}
        wordsOnly={true}
        words={["chin", "man", "crumb"]}
        correctIndex={2}
      />
    );
  }
}
