import React from "react";
import Question from "./question";
import Response from "./response";
import soundContext from "decorators/sound-context";
import {say, endSpeaking} from "helpers/animation";
import ActivityTitle from "components/activity-title";

@soundContext({
  applause: "applause",
  "teacher/begins-with": "teacher/common/begins-with-the-same-sound-as",
  "teacher/does-not-begin-with": "teacher/common/does-not-begin-with-the-same-sound-as",
  "teacher/and": "teacher/common/and",
  "teacher/touch-the-word": "teacher/common/touch-the-word-that-begins-with-the-same-sound-as",
})
export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: null
    };
  }

  setAnswer(index) {
    this.setState({answer: index});
  }

  render() {
    const {answer} = this.state;
    const {index, words, correctIndex, onComplete} = this.props;
    const correct = (answer === correctIndex);

    return (
      <div>
        {answer === null ?
          <Question {...this.props}
            words={words}
            onAnswer={::this.setAnswer}
          /> :
          <Response {...this.props}
            correct={correct}
            word={words[answer]}
            onComplete={onComplete}
          />
        }
        <ActivityTitle>
          Lesson 1: Beginning Sounds<br/>
          Activity {index + 1} of 15
        </ActivityTitle>
      </div>
    );
  }
}
