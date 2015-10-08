import React from "react";
import Activity from "components/levels/1/sub/activity";
import soundContext from "decorators/sound-context";

@soundContext({
  "teacher/ball": "teacher/words/ball",
  "teacher/pillow": "teacher/words/pillow",
  "teacher/lip": "teacher/words/lip"
})
export default class extends React.Component {
  render() {
    return (
      <Activity {...this.props}
        words={["ball", "pillow", "lip"]}
        correctIndex={2}
      />
    );
  }
}
