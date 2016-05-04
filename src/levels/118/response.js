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
    const {answer} = this.props;
    const sounds = {
      "answer-word": `girl/words/${answer.word}`,
      "phonic": "girl/common/phonics/_x_",
      "x": "girl/common/letters/x"
    };

    if(answer.correct) {
      sounds["applause"] = "applause";
      sounds["ends with the"] = "girl/common/ends-with-the";
      sounds["sound so it ends with"] = "girl/common/sound-so-it-ends-with";
    } else {
      sounds["does not end with the"] = "girl/common/does-not-end-with-the";
      sounds["sound so it does not end with"] = "girl/common/sound-so-it-does-not-end-with";
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
        yield this.say(girl, "ends with the");
        yield this.say(girl, "phonic");
        yield this.say(girl, "sound so it ends with");
        yield this.say(girl, "x");
      } else {
        yield this.say(girl, "answer-word");
        yield this.say(girl, "does not end with the");
        yield this.say(girl, "phonic");
        yield this.say(girl, "sound so it does not end with");
        yield this.say(girl, "x");
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
