import React from "react";
import Activity from "../activity";
import soundContext from "decorators/sound-context";

@soundContext({
  "teacher/box": "teacher/words/box",
  "teacher/socks": "teacher/words/socks",
  "teacher/boy": "teacher/words/boy",
})
export default class extends React.Component {
  render() {
    return (
      <Activity {...this.props}
        words={["box", "socks", "boy"]}
        correctIndexes={[0, 2]}
      />
    );
  }
}
