import React from "react";
import Activity from "../activity";
import soundContext from "decorators/sound-context";

@soundContext({
  "teacher/map": "teacher/words/map",
  "teacher/mad": "teacher/words/mad",
  "teacher/lip": "teacher/words/lip",
})
export default class extends React.Component {
  render() {
    return (
      <Activity {...this.props}
        ending={true}
        endingIntro={true}
        words={["map", "mad", "lip"]}
        correctIndexes={[0, 2]}
      />
    );
  }
}
