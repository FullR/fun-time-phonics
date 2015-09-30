import React from "react";
import Activity from "../activity";
import soundContext from "decorators/sound-context";

@soundContext({
  top: "teacher/words/top",
  pig: "teacher/words/pig",
  hen: "teacher/words/hen"
})
export default class extends React.Component {
  render() {
    return (
      <Activity {...this.props}
        words={["top", "pig", "hen"]}
        correctIndex={0}
      />
    );
  }
}
