import React from "react";
import Question from "./question";
import Response from "./response";
import ActivityTitle from "components/activity-title";
import {title, number, activityCount} from "./info";

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
    const isCorrect = answer && answer.word === correct;

    return (
      <div>
        {answer === null ?
          <Question {...this.props}
            words={words}
            onAnswer={::this.setAnswer}
          /> :
          <Response {...this.props}
            correct={isCorrect}
            word={answer.word}
            onComplete={onComplete}
          />
        }
        <ActivityTitle>
          Lesson {number}: {title}<br/>
          Activity {index + 1} of {activityCount}
        </ActivityTitle>
      </div>
    );
  }
}
