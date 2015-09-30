import React from "react";
import Activity from "../activity";
import soundContext from "decorators/sound-context";

@soundContext({
  bug: "teacher/words/bug",
  ten: "teacher/words/ten",
  car: "teacher/words/car"
})
export default class extends React.Component {
  render() {
    return (
      <Activity {...this.props}
        words={["bug", "ten", "car"]}
        correctIndex={1}
      />
    );
  }
}
