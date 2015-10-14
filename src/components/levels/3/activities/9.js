import React from "react";
import Activity from "../activity";
import soundContext from "decorators/sound-context";

@soundContext({
  "teacher/flag": "teacher/words/flag",
  "teacher/frog": "teacher/words/frog",
  "teacher/gopher": "teacher/words/gopher",
})
export default class extends React.Component {
  render() {
    return (
      <Activity {...this.props}
        words={["flag", "frog", "gopher"]}
        correctIndexes={[0, 1]}
      />
    );
  }
}
