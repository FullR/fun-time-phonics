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
    const {answer, word, correctLetter} = this.props;
    const sounds = {
      "word": `girl/words/${word}`,
      "letter": `girl/common/${answer.letter}`,
      "correct-phonic": `girl/common/phonics/_${correctLetter}h_`,
      "makes the": "girl/common/makes-the_2",
      "sound in": "girl/common/sound-in_2"
    };

    Object.assign(sounds, answer.correct ? {
      "applause": "applause",
      "correct": "girl/common/correct"
    } : {
      "sound not the": "girl/common/sound-not-the",
      "incorrect-phonic": `girl/common/phonics/_${answer.letter}h_`
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
        yield this.say(girl, "letter");
        yield this.say(girl, "makes the");
        yield this.say(girl, "correct-phonic");
        yield this.say(girl, "sound in");
        yield this.say(girl, "word");
      } else {
        yield this.say(girl, "letter");
        yield this.say(girl, "makes the");
        yield this.say(girl, "incorrect-phonic");
        yield this.say(girl, "sound not the");
        yield this.say(girl, "correct-phonic");
        yield this.say(girl, "sound in");
        yield this.say(girl, "word");
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
      </Response>
    );
  }
}
