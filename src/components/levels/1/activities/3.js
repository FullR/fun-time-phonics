import React from "react";
import Activity from "../activity";
import soundContext from "decorators/sound-context";

@soundContext({
  wet: "teacher/words/wet",
  pet: "teacher/words/pet",
  toys: "teacher/words/toys"
})
export default class extends React.Component {
  render() {
    return (
      <Activity {...this.props}
        words={["wet", "pet", "toys"]}
        correctIndex={2}
      />
    );
  }
}
