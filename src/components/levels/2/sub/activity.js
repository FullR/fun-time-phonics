import React from "react";
import Question from "./question";
import Response from "./response";
import soundContext from "decorators/sound-context";
import {say, endSpeaking} from "helpers/animation";
import Activity from "components/activity";
import ActivityTitle from "components/activity-title";

@soundContext({
  applause: "applause",
  "teacher/ends-with": "teacher/common/ends-with-the-same-sound-as",
  "teacher/does-not-end-with": "teacher/common/does-not-end-with-the-same-sound-as",
  "teacher/and": "teacher/common/and",
  "teacher/touch-the-word": "teacher/common/touch-the-word-that-ends-with-the-same-sound-as",
})
export default class extends React.Component {
  render() {
    return (
      <Activity {...this.props}
        number={2}
        title="Ending Sounds"
        activityCount={15}
        Question={Question}
        Response={Response}
      />
    );
  }
}
