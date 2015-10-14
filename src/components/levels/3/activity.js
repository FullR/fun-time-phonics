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

  setAnswer(index) {
    this.setState({answer: index});
  }

  render() {
    const {answer} = this.state;
    const {index, words, correctIndexes, onComplete} = this.props;
    const correct = answer.every((id, i) => id === correctIndexes[i]);
    const selectedWords = answer.map((i) => words[i]);

    return (
      <div>
        {answer === null ?
          <Question {...this.props}
            words={words}
            onAnswer={::this.setAnswer}
          /> :
          <Response {...this.props}
            correct={correct}
            words={selectedWords}
            onComplete={onComplete}
          />
        }
        <ActivityTitle>
          Lesson 3: Beginning and Ending Sounds<br/>
          Activity {index + 1} of 15
        </ActivityTitle>
      </div>
    );
  }
}
