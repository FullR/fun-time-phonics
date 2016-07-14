import React from "react";
import ActivityTitle from "components/activity-title";
import Actor from "components/actor";
import Response from "components/response";
import Word from "components/word";
import scene from "decorators/scene";
import DisplayText from "components/display-text";

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
    const {answer, word} = this.props;
    const sounds = {
      "word": `girl/words/${word}`,
      "letter": `girl/common/${answer.letter}`
    };

    Object.assign(sounds, answer.correct ? {
      "applause": "applause",
      "correct": "girl/common/correct",
      "ends with": "girl/common/ends-with"
    } : {
      "makes the": "girl/common/makes-the",
      "sound so": "girl/common/sound-so",
      "does not end with": "girl/common/does-not-end-with",
      "phonic": `girl/common/phonics/_${answer.letter === "c" ? "k" : answer.letter}_`
    });

    return sounds;
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
        yield this.say(girl, "letter");
      } else {
        yield this.say(girl, "letter");
        yield this.say(girl, "makes the");
        yield this.say(girl, "phonic");
        yield this.say(girl, "sound so");
        yield this.say(girl, "word");
        yield this.say(girl, "does not end with");
        yield this.say(girl, "letter");
        this.setState({arrowHidden: false});
      }
      girl.set({speaking: false, animating: false});
    });
  }

  render() {
    const {girl, arrowHidden} = this.state;
    const {levelId, title, answer, onNext, activityIndex, activityCount} = this.props;

    return (
      <Response onNext={onNext} arrowHidden={arrowHidden}>
        <Actor {...girl} type="girl" onClick={this.autoplay.bind(this)}>Answer Feedback</Actor>
        <Answer isCorrect={answer.correct}>
          <DisplayText>{answer.letter}</DisplayText>
        </Answer>
        <ActivityTitle activityIndex={activityIndex} activityCount={activityCount}>
          {title}
        </ActivityTitle>
        {this.props.children}
      </Response>
    );
  }
}
