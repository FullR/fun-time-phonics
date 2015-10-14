import React from "react";
import Activity from "../activity";
import soundContext from "decorators/sound-context";

@soundContext({
  "teacher/hop": "teacher/words/hop",
  "teacher/dog": "teacher/words/dog",
  "teacher/hot": "teacher/words/hot",
})
export default class extends React.Component {
  render() {
    return (
      <Activity {...this.props}
        words={["hop", "dog", "hot"]}
        correctIndexes={[0, 2]}
      />
    );
  }
}
