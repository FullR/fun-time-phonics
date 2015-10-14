import React from "react";
import Activity from "../activity";
import soundContext from "decorators/sound-context";

@soundContext({
  "teacher/milk": "teacher/words/milk",
  "teacher/spill": "teacher/words/spill",
  "teacher/talk": "teacher/words/talk",
})
export default class extends React.Component {
  render() {
    return (
      <Activity {...this.props}
        ending={true}
        words={["milk", "spill", "talk"]}
        correctIndexes={[0, 2]}
      />
    );
  }
}
