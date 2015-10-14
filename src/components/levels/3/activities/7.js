import React from "react";
import Activity from "../activity";
import soundContext from "decorators/sound-context";

@soundContext({
  "teacher/pot": "teacher/words/pot",
  "teacher/pig": "teacher/words/pig",
  "teacher/top": "teacher/words/top",
})
export default class extends React.Component {
  render() {
    return (
      <Activity {...this.props}
        words={["pot", "pig", "top"]}
        correctIndexes={[0, 1]}
      />
    );
  }
}
