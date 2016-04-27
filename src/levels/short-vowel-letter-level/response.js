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
    const sounds = {
      "phonic": `girl/common/phonics/_${letter}h_`,
      "letter": `girl/common/letters/${letter}`,
      "in it": "girl/common/in-it",
      "answer-word": `girl/words/${answer.word}`
    };

    if(answer.correct) {
      sounds["applause"] = "applause";
      sounds["makes the"] = "girl/common/makes-the",
      sounds["sound so"] = "girl/common/sound-so",
      sounds["has an"] = "girl/common/has-an";
    } else {
      sounds["does not make the"] = "girl/common/does-not-make-the";
      sounds["sound so it..."] = "girl/common/sound-so-it-does-not-have-an";
    }

    return sounds;
  }

  autoplay() {
    const {correct} = this.props.answer;
    const {girl} = this;

    this.startCo(function*() {
      if(correct) {
        yield this.play("applause");
        yield this.say(girl, "answer-word");
        yield this.say(girl, "makes the");
        yield this.say(girl, "phonic");
        yield this.say(girl, "sound so");
        yield this.say(girl, "answer-word");
        yield this.say(girl, "has an");
        yield this.say(girl, "letter");
        yield this.say(girl, "in it");
      } else {
        yield this.say(girl, "answer-word");
        yield this.say(girl, "does not make the");
        yield this.say(girl, "phonic");
        yield this.say(girl, "sound so it...");
        yield this.say(girl, "letter");
        yield this.say(girl, "in it");
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
        <Actor {...girl} type="girl" onClick={this.autoplay.bind(this)}/>
        <Answer isCorrect={answer.correct}>
          <Word word={answer.word}/>
        </Answer>
        <ActivityTitle>
          {levelId}.&nbsp; {title}<br/>
          Activity {activityIndex + 1} of {activityCount}
        </ActivityTitle>
      </Response>
    );
  }
}
