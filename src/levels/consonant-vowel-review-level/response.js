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
      "letters": `girl/common/letters/${answer.letters.split("").join("-")}`,
      "phonic": `girl/common/phonics/_${answer.letters}h_`,
      "correct-word": `girl/words/${word}`
    };

    if(answer.correct) {
      sounds["applause"] = "applause";
      sounds["makes the"] = "girl/common/makes-the";
      sounds["sound in"] = "girl/common/sound-in";
    } else {
      sounds["the letters"] = "girl/common/the-letters";
      sounds["make the"] = "girl/common/make-the";
      sounds["sound so"] = "girl/common/sound-so";
      sounds["does not begin with"] = "girl/common/does-not-begin-with";
    }

    return sounds;
  }

  autoplay() {
    const {correct} = this.props.answer;
    const {girl} = this;

    this.startCo(function*() {
      if(correct) {
        yield this.play("applause");
        yield this.say(girl, "letters");
        yield this.say(girl, "makes the");
        yield this.say(girl, "phonic");
        yield this.say(girl, "sound in");
        yield this.say(girl, "correct-word");
      } else {
        yield this.say(girl, "the letters");
        yield this.wait(100);
        yield this.say(girl, "letters");
        yield this.wait(100);
        yield this.say(girl, "make the");
        yield this.say(girl, "phonic");
        yield this.say(girl, "sound so");
        yield this.say(girl, "correct-word");
        yield this.say(girl, "does not begin with");
        yield this.say(girl, "letters");
        this.setState({arrowHidden: false});
      }
      girl.set({speaking: false, animating: false});
    });
  }

  render() {
    const {girl, arrowHidden} = this.state;
    const {title, answer, onNext, activityIndex, levelId, activityCount, consonant, vowel} = this.props;

    return (
      <Response onNext={onNext} arrowHidden={arrowHidden}>
        <Actor {...girl} type="girl" onClick={this.autoplay.bind(this)}/>
        <Answer isCorrect={answer.correct}>
          <DisplayText>
            {answer.letters}
          </DisplayText>
        </Answer>
        <ActivityTitle>
          {levelId}.&nbsp; {title}<br/>
          Activity {activityIndex + 1} of {activityCount}
        </ActivityTitle>
      </Response>
    );
  }
}
