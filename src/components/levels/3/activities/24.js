import React from "react";
import Activity from "../activity";
import soundContext from "decorators/sound-context";

@soundContext({
  "teacher/cowboy": "teacher/words/cowboy",
  "teacher/oyster": "teacher/words/oyster",
  "teacher/fur": "teacher/words/fur"
})
export default class extends React.Component {
  render() {
    return (
      <Activity {...this.props}
        ending={true}
        words={["cowboy", "oyster", "fur"]}
        correctIndexes={[1, 2]}
      />
    );
  }
}
