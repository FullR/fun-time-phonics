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
    const {index, words, correctIndexes, onComplete, ending} = this.props;

    return (
      <div>
        {answer === null ?
          <Question {...this.props}
            words={words}
            onAnswer={::this.setAnswer}
          /> :
          <Response {...this.props}
            correct={answer.every(({id}, i) => (+id) === correctIndexes[i])}
            words={answer.map((choice) => choice.word)}
            onComplete={onComplete}
          />
        }
        {ending ?
          <ActivityTitle>
            Lesson 3: Beginning and <span style={{color: "#F00"}}>Ending</span> Sounds<br/>
            Activity {index + 1} of 24
          </ActivityTitle> :
          <ActivityTitle>
            Lesson 3: <span style={{color: "#00F"}}>Beginning</span> and Ending Sounds<br/>
            Activity {index + 1} of 24
          </ActivityTitle>
        }
      </div>
    );
  }
}
