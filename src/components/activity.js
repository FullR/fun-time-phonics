import React from "react";
import ActivityTitle from "components/activity-title";

export default class Activity extends React.Component {
  static defaultProps = {
    checkAnswer(answer, correct) {
      return answer.word === correct;
    }
  };

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
    const {Question, Response, checkAnswer, title, number, activityCount, index, correct, onComplete} = this.props;
    const isCorrect = answer && checkAnswer(answer, correct);

    if(!Question) throw new Error("You must pass a Question component to Activity");
    if(!Response) throw new Error("You must pass a Response component to Activity");

    return (
      <div>
        {answer === null ?
          <Question {...this.props}
            onAnswer={::this.setAnswer}
          /> :
          <Response {...this.props}
            correct={isCorrect}
            answer={answer}
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
