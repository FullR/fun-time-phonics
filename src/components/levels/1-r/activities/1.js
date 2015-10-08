import React from "react";
import Activity from "components/levels/1/sub/activity";
import soundContext from "decorators/sound-context";

@soundContext({
  "teacher/dirt": "teacher/words/dirt",
  "teacher/rug": "teacher/words/rug",
  "teacher/stir": "teacher/words/stir"
})
export default class extends React.Component {
  render() {
    return (
      <Activity {...this.props}
        words={["dirt", "rug", "stir"]}
        correctIndex={1}
      />
    );
  }
}
