import React from "react";
import Activity from "components/levels/1/sub/activity";
import soundContext from "decorators/sound-context";

@soundContext({
  "teacher/map": "teacher/words/map",
  "teacher/jam": "teacher/words/jam",
  "teacher/hammer": "teacher/words/hammer"
})
export default class extends React.Component {
  render() {
    return (
      <Activity {...this.props}
        words={["map", "jam", "hammer"]}
        correctIndex={0}
      />
    );
  }
}
