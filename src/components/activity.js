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
    const {Question, Response, checkAnswer, title, number, activityCount, index, words, correct, onComplete} = this.props;
    const isCorrect = answer && checkAnswer(answer, correct);

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
