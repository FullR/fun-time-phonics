import React from "react";
import Activity from "../activity";
import soundContext from "decorators/sound-context";

@soundContext({
  "teacher/string": "teacher/words/string",
  "teacher/sink": "teacher/words/sink",
  "teacher/tongue": "teacher/words/tongue",
})
export default class extends React.Component {
  render() {
    return (
      <Activity {...this.props}
        ending={true}
        words={["string", "sink", "tongue"]}
        correctIndexes={[0, 2]}
      />
    );
  }
}
