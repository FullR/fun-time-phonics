import React from "react";
import Question from "components/levels/8/question";
import Response from "components/levels/8/response";
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
          Lesson 9:&nbsp; Find the Sound - Short e<br/>
          Activity {index + 1} of 20
        </ActivityTitle>
      </div>
    );
  }
}
