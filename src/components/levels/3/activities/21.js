import React from "react";
import Activity from "../activity";
import soundContext from "decorators/sound-context";

@soundContext({
  "teacher/blue": "teacher/words/blue",
  "teacher/shoe": "teacher/words/shoe",
  "teacher/boot": "teacher/words/boot",
})
export default class extends React.Component {
  render() {
    return (
      <Activity {...this.props}
        ending={true}
        words={["blue", "shoe", "boot"]}
        correctIndexes={[0, 1]}
      />
    );
  }
}
