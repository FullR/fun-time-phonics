import React from "react";
import scene from "decorators/scene";
import Response from "components/response";
import Actor from "components/actor";
import Word from "components/word";
import ActivityTitle from "components/activity-title";
const {Answer} = Response;

@scene
export default class LevelResponse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      girl: {},
      arrowHidden: !props.answer.correct
    };
  }

  isCorrect() {
    return this.props.answer.word === this.props.correct;
  }

  getSounds() {
    const {word} = this.props.answer;
    return {
      applause: "applause",
      correct: "girl/common/correct",
      word: `girl/words/${word}`,
      "ends with": "girl/common/ends-with",
      "does not end with": "girl/common/does-not-end-with",
      t: "girl/common/phonics/_t_"
    };
  }

  revealArrow() {
    this.setState({arrowHidden: false});
  }

  autoplay() {
    const {correct} = this.props.answer;
    const {girl} = this;

    this.startCo(function*() {
      if(correct) {
        yield this.play("applause");
        yield this.say(girl, "correct"); yield this.wait(200);
        yield this.say(girl, "word");
        yield this.say(girl, "ends with");
        yield this.say(girl, "t");
      } else {
        yield this.say(girl, "word");
        yield this.say(girl, "does not end with");
        yield this.say(girl, "t");
        this.revealArrow();
      }
      girl.set({speaking: false, animating: false});
    }, this);
  }

  render() {
    const {girl, arrowHidden} = this.state;
    const {levelId, title, activityIndex, answer, correct, onNext} = this.props;

    return (
      <Response onNext={onNext} arrowHidden={arrowHidden}>
        <Actor {...girl} type="girl" onClick={this.autoplay.bind(this)}>Answer Feedback</Actor>
        <Answer isCorrect={this.isCorrect()}>
          <Word word={answer.word}/>
        </Answer>
        <ActivityTitle activityIndex={activityIndex} activityCount={15}>
          {title}
        </ActivityTitle>
        {this.props.children}
      </Response>
    );
  }
}
