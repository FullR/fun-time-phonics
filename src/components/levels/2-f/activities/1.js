import React from "react";
import Activity from "components/levels/2/sub/activity";
import soundContext from "decorators/sound-context";

@soundContext({
  "teacher/moth": "teacher/words/moth",
  "teacher/laugh": "teacher/words/laugh",
  "teacher/office": "teacher/words/office"
})
export default class extends React.Component {
  render() {
    return (
      <Activity {...this.props}
        words={["moth", "laugh", "office"]}
        correctIndex={1}
      />
    );
  }
}
