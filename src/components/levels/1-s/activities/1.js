import React from "react";
import Activity from "components/levels/1/sub/activity";
import soundContext from "decorators/sound-context";

@soundContext({
  "teacher/bus": "teacher/words/bus",
  "teacher/zoo": "teacher/words/zoo",
  "teacher/sing": "teacher/words/sing"
})
export default class extends React.Component {
  render() {
    return (
      <Activity {...this.props}
        words={["bus", "zoo", "sing"]}
        correctIndex={2}
      />
    );
  }
}
