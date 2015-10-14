import React from "react";
import Activity from "components/levels/2/sub/activity";
import soundContext from "decorators/sound-context";

@soundContext({
  "teacher/bud": "teacher/words/bud",
  "teacher/grab": "teacher/words/grab",
  "teacher/map": "teacher/words/map"
})
export default class extends React.Component {
  render() {
    return (
      <Activity {...this.props}
        words={["bud", "grab", "map"]}
        correctIndex={1}
      />
    );
  }
}
