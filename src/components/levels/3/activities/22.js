import React from "react";
import Activity from "../activity";
import soundContext from "decorators/sound-context";

@soundContext({
  "teacher/snow": "teacher/words/snow",
  "teacher/boat": "teacher/words/boat",
  "teacher/paino": "teacher/words/paino",
})
export default class extends React.Component {
  render() {
    return (
      <Activity {...this.props}
        ending={true}
        words={["snow", "boat", "piano"]}
        correctIndexes={[0, 2]}
      />
    );
  }
}
