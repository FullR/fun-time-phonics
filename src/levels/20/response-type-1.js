import React from "react";
import ActivityTitle from "components/activity-title";
import Actor from "components/actor";
import Response from "components/response";
import Letters from "components/letters";
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
    const {answer, word} = this.props;
    const sounds = {
      "letter": `girl/common/letters/${answer.letter}`,
      "phonic": `girl/common/phonics/_${answer.letter}h_`,
      "word": `girl/words/${word}`
    };

    if(answer.correct) {
      sounds["applause"] = "applause";
      sounds["correct"] = "girl/common/correct";
      sounds["makes the"] = "girl/common/makes-the";
      sounds["sound in"] = "girl/common/sound-in";
    } else {
      sounds["does not make the"] = "girl/common/does-not-make-the";
      sounds["sound so there is no"] = "girl/common/sound-so-there-is-no";
      sounds["in"] = "girl/common/in";
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
        yield this.say(girl, "letter");
        yield this.say(girl, "makes the");
        yield this.say(girl, "phonic");
        yield this.say(girl, "sound in");
        yield this.say(girl, "word");
      } else {
        this.setState({arrowHidden: false});
      }
      girl.set({speaking: false, animating: false});
    });
  }

  render() {
    const {girl, arrowHidden} = this.state;
    const {answer, onNext, activityIndex, levelId, activityCount} = this.props;

    return (
      <Response onNext={onNext} arrowHidden={arrowHidden}>
        <Actor {...girl} type="girl" onClick={this.autoplay.bind(this)}/>
        <Answer isCorrect={answer.correct}>
          <Letters>{answer.letter}</Letters>
        </Answer>
        <ActivityTitle>
          Lesson {levelId}: Review: Short Vowel Sounds<br/>
          Activity {activityIndex + 1} of {activityCount}
        </ActivityTitle>
      </Response>
    );
  }
}
