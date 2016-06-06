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
    const {letter, answer} = this.props;
    const aOrAn = letter === "u" ? "a" : "an";
    const sounds = {
      "phonic": `girl/common/phonics/_${letter}h_`,
      "letter": `girl/common/${letter}`,
      "in it": "girl/common/in-it",
      "answer-word": `girl/words/${answer.word}`
    };

    if(answer.correct) {
      sounds["applause"] = "applause";
      sounds["correct"] = "girl/common/correct";
      sounds["makes the..."] = `girl/common/makes-the-${letter}h-sound-so-it-has-${aOrAn}-${letter}-in-it`
    } else {
      sounds["does not make the..."] = `girl/common/does-not-make-the-${letter}h-sound-so-it-does-not-have-${aOrAn}-${letter}-in-it`;
    }

    return sounds;
  }

  autoplay() {
    const {correct} = this.props.answer;
    const {girl} = this;

    this.startCo(function*() {
      if(correct) {
        yield this.play("applause");
        yield this.say(girl, "correct");
        yield this.wait(200);
        yield this.say(girl, "answer-word");
        yield this.say(girl, "makes the...");
      } else {
        yield this.say(girl, "answer-word");
        yield this.say(girl, "does not make the...");
        this.setState({arrowHidden: false});
      }
      girl.set({speaking: false, animating: false});
    });
  }

  render() {
    const {girl, arrowHidden} = this.state;
    const {title, answer, onNext, activityIndex, levelId, activityCount} = this.props;

    return (
      <Response onNext={onNext} arrowHidden={arrowHidden}>
        <Actor {...girl} type="girl" onClick={this.autoplay.bind(this)}>Answer Feedback</Actor>
        <Answer isCorrect={answer.correct}>
          <Word word={answer.word}/>
        </Answer>
        <ActivityTitle activityIndex={activityIndex} activityCount={activityCount}>
          {title}
        </ActivityTitle>
      </Response>
    );
  }
}
