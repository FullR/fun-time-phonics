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
    const isCorrect = answer && (answer.word === correct);

    return (
      <div>
        {answer === null ?
          <Question {...this.props}
            words={words}
            onAnswer={::this.setAnswer}
          /> :
          <Response {...this.props}
            word={answer.word}
            correct={isCorrect}
            correctWord={correct}
            incorrectWords={words.filter((word) => word !== correct)}
            onComplete={onComplete}
          />
        }
        <ActivityTitle>
          Lesson 13:&nbsp; Short Sounds - Odd One Out<br/>
          Activity {index + 1} of 20
        </ActivityTitle>
      </div>
    );
  }
}
