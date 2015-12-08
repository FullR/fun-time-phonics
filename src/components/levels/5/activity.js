import React from "react";
import Question from "./question";
import Response from "./response";
import ActivityTitle from "components/activity-title";

export default class Activity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: null
    };
  }

  setAnswer(answer) {
    this.setState({answer});
  }

  render() {
    const {answer} = this.state;
    const {index, words, correct, onComplete} = this.props;
    const isCorrect = answer && answer.every((choice) => correct.indexOf(choice.word) !== -1);

    return (
      <div>
        {answer === null ?
          <Question {...this.props}
            words={words}
            onAnswer={::this.setAnswer}
          /> :
          <Response {...this.props}
            correct={isCorrect}
            words={answer.map((choice) => choice.word)}
            onComplete={onComplete}
          />
        }
        <ActivityTitle>
          Lesson 5:&nbsp; Rhyme Time<br/>
          Activity {index + 1} of 19
        </ActivityTitle>
      </div>
    );
  }
}
