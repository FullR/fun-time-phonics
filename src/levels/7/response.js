import React from "react";
import ActivityTitle from "components/activity-title";
import Actor from "components/actor";
import Response from "components/response";
import Word from "components/word";
import scene from "decorators/scene";

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

  getSounds() {
    const {answer, spellWord} = this.props;
    const sounds = {
      "spell-word": `girl/common/phonics/_${spellWord}_`,
      word: `girl/words/${answer.word}`
    };
    if(answer.correct) {
      sounds["applause"] = "applause";
      sounds["correct"] = "girl/common/correct";
      sounds["makes"] = "girl/common/makes";
    } else {
      sounds["does not make"] = `girl/common/does-not-make`;
    }
    return sounds;
  }

  autoplay() {
    const {correct} = this.props.answer;
    const {girl} = this;

    this.startCo(function*() {
      if(correct) {
        yield this.play("applause");
        yield this.say(girl, "correct"); yield this.wait(200);
        yield this.say(girl, "spell-word");
        yield this.say(girl, "makes");
        yield this.wait(250);
        yield this.say(girl, "word");
      } else {
        yield this.say(girl, "spell-word");
        yield this.say(girl, "does not make");
        yield this.say(girl, "word");
        this.setState({arrowHidden: false});
      }
      girl.set({speaking: false, animating: false});
    });
  }

  render() {
    const {girl, arrowHidden} = this.state;
    const {levelId, title, activityCount, answer, onNext, activityIndex} = this.props;

    return (
      <Response onNext={onNext} arrowHidden={arrowHidden}>
        <Actor {...girl} type="girl" onClick={this.autoplay.bind(this)}>Answer Feedback</Actor>
        <Answer isCorrect={answer.correct}>
          <Word word={answer.word}/>
        </Answer>
        <ActivityTitle activityIndex={activityIndex} activityCount={activityCount}>
          {title}
        </ActivityTitle>
        {this.props.children}
      </Response>
    );
  }
}
