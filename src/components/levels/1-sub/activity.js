import React from "react";
import Question from "./question";
import Response from "./response";
import soundContext from "decorators/sound-context";
import {say, endSpeaking} from "helpers/animation";
import ActivityTitle from "components/activity-title";
import Activity from "components/activity";

@soundContext({
  "teacher/begins-with": "teacher/common/begins-with-the-same-sound-as",
  "teacher/does-not-begin-with": "teacher/common/does-not-begin-with-the-same-sound-as",
  "teacher/and": "teacher/common/and",
  "teacher/touch-the-word": "teacher/common/touch-the-word-that-begins-with-the-same-sound-as"
})
export default class extends React.Component {
  render() {
    return (
      <Activity {...this.props}
        number={1}
        title="Beginning Sounds"
        activityCount={15}
        Question={Question}
        Response={Response}
      />
    );
  }
}
