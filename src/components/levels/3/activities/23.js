import React from "react";
import Activity from "../activity";
import soundContext from "decorators/sound-context";

@soundContext({
  "teacher/play": "teacher/words/play",
  "teacher/pail": "teacher/words/pail",
  "teacher/spray": "teacher/words/spray",
})
export default class extends React.Component {
  render() {
    return (
      <Activity {...this.props}
        ending={true}
        words={["play", "pail", "spray"]}
        correctIndexes={[0, 2]}
      />
    );
  }
}
