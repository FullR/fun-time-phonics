import React from "react";
import Activity from "../activity";
import soundContext from "decorators/sound-context";

@soundContext({
  "teacher/man": "teacher/words/man",
  "teacher/mom": "teacher/words/mom",
  "teacher/jam": "teacher/words/jam",
})
export default class extends React.Component {
  render() {
    return (
      <Activity {...this.props}
        ending={true}
        words={["man", "mom", "jam"]}
        correctIndexes={[1, 2]}
      />
    );
  }
}
