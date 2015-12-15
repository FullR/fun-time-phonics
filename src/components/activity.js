import React from "react";
import ActivityTitle from "components/activity-title";

export default class Activity extends React.Component {
  static defaultProps = {
    checkAnswer(answer, correct) {
      return answer.word === correct;
    }
  };

  onAnswer(answer) {
    const {onAnswer} = this.props;
    if(onAnswer) {
      onAnswer(answer);
    }
  }

  render() {
    const {answer, Question, Response, checkAnswer, title, number, activityCount, index, correct, onComplete} = this.props;
    const isCorrect = answer && checkAnswer(answer, correct);

    if(!Question) throw new Error("You must pass a Question component to Activity");
    if(!Response) throw new Error("You must pass a Response component to Activity");

    return (
      <div>
        {answer ?
          <Response {...this.props}
            correct={isCorrect}
            answer={answer}
            onComplete={onComplete}
          /> :
          <Question {...this.props}
            onAnswer={::this.onAnswer}
          />
        }
        <ActivityTitle>
          Lesson {number}:&nbsp; {title}<br/>
          Activity {index + 1} of {activityCount}
        </ActivityTitle>
      </div>
    );
  }
}
