import React from "react";
import Activity from "components/levels/1/sub/activity";
import soundContext from "decorators/sound-context";

@soundContext({
  "teacher/leg": "teacher/words/leg",
  "teacher/bell": "teacher/words/bell",
  "teacher/fall": "teacher/words/fall"
})
export default class extends React.Component {
  render() {
    return (
      <Activity {...this.props}
        wordsOnly={true}
        words={["leg", "bell", "fall"]}
        correctIndex={0}
      />
    );
  }
}
