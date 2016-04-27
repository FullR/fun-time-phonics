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

  revealArrow() {
    this.setState({arrowHidden: false});
  }

  isCorrect() {
    return this.props.answer.word === this.props.correct;
  }

  getSounds() {
    const {word} = this.props.answer;
    return {
      applause: "applause",
      word: `girl/words/${word}`,
      "begins-with": "girl/common/begins-with",
      "does-not-begin-with": "girl/common/does-not-begin-with",
      t: "girl/common/phonics/_t_"
    };
  }

  autoplay() {
    const {correct} = this.props.answer;
    const {girl} = this;

    this.startCo(function*() {
      if(correct) {
        yield this.play("applause");
        yield this.say(girl, "word");
        yield this.say(girl, "begins-with");
        yield this.say(girl, "t");
        girl.set("speaking", false);
      } else {
        yield this.say(girl, "word");
        yield this.say(girl, "does-not-begin-with");
        yield this.say(girl, "t");
        girl.set("speaking", false);
        this.revealArrow();
      }
    }, this);
  }

  render() {
    const {girl, arrowHidden} = this.state;
    const {levelId, title, activityIndex, answer, correct, onNext} = this.props;

    return (
      <Response onNext={onNext} arrowHidden={arrowHidden}>
        <Actor {...girl} type="girl" onClick={this.autoplay.bind(this)}/>
        <Answer isCorrect={this.isCorrect()}>
          <Word word={answer.word}/>
        </Answer>
        <ActivityTitle>
          {levelId}.&nbsp; {title}<br/>
          Activity {activityIndex + 1} of 15
        </ActivityTitle>
      </Response>
    );
  }
}
