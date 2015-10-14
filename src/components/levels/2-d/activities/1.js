import React from "react";
import Activity from "components/levels/2/sub/activity";
import soundContext from "decorators/sound-context";

@soundContext({
  "teacher/dish": "teacher/words/dish",
  "teacher/radio": "teacher/words/radio",
  "teacher/mad": "teacher/words/mad"
})
export default class extends React.Component {
  render() {
    return (
      <Activity {...this.props}
        words={["dish", "radio", "mad"]}
        correctIndex={2}
      />
    );
  }
}
