import React from "react";
import Question from "./question";
import Response from "./response";
import ActivityTitle from "components/activity-title";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: null
    };
  }

  setAnswer(index) {
    console.log("Selected:", index, typeof index, "correct:", this.props.correctIndex, typeof this.props.correctIndex);
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
