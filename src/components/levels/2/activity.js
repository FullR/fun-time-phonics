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
          Lesson 2:&nbsp; Ending Sounds<br/>
          Activity {index + 1} of 15
        </ActivityTitle>
      </div>
    );
  }
}
