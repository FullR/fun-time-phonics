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
    const {answer, consonant, vowel} = this.props;
    const sounds = {
      "letters": `girl/common/letters/${consonant}-${vowel}`,
      "phonic": `girl/common/phonics/_${consonant}${vowel}h_`,
      "answer-word": `girl/words/${answer.word}`,
    };

    if(answer.correct) {
      sounds["applause"] = "applause";
      sounds["correct"] = "girl/common/correct";
      sounds["begins with the"] = "girl/common/begins-with-the";
      sounds["sound so it begins with"] = "girl/common/sound-so-it-begins-with";

    } else {
      sounds["does not begin with the"] = "girl/common/does-not-begin-with-the";
      sounds["sound so it does not begin with"] = "girl/common/sound-so-it-does-not-begin-with";
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
        yield this.say(girl, "answer-word");
        yield this.say(girl, "begins with the");
        yield this.say(girl, "phonic");
        yield this.say(girl, "sound so it begins with");
        yield this.say(girl, "letters");
      } else {
        yield this.say(girl, "answer-word");
        yield this.say(girl, "does not begin with the");
        yield this.say(girl, "phonic");
        yield this.say(girl, "sound so it does not begin with");
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
