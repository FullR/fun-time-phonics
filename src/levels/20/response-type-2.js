import React from "react";
import ActivityTitle from "components/activity-title";
import Actor from "components/actor";
import Response from "components/response";
import scene from "decorators/scene";
import Word from "components/word";
import DisplayText from "components/display-text";
import DisplayBar from "components/display-bar";
import XOverlay from "components/x-overlay";
import StarContainer from "components/star-container";

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
    const {answer, letter} = this.props;
    const sounds = {
      "phonic": `girl/common/phonics/_${letter}h_`,
      "correct-letter": `girl/common/${letter}`,
      "word": `girl/words/${answer.word}`,
      "in it": "girl/common/in-it"
    };

    if(answer.correct) {
      sounds["applause"] = "applause";
      sounds["correct"] = "girl/common/correct";
      sounds["makes the"] = "girl/common/makes-the";
      sounds["sound so"] = "girl/common/sound-so";
      sounds["has an"] = "girl/common/has-an";
    } else {
      sounds["there is no"] = "girl/common/there-is-no";
      sounds["sound in"] = "girl/common/sound-in";
      sounds["so"] = "girl/common/so";
      sounds["does not have an"] = "girl/common/does-not-have-an";
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
        yield this.say(girl, "word");
        yield this.say(girl, "makes the");
        yield this.say(girl, "phonic");
        yield this.say(girl, "sound so");
        yield this.say(girl, "word");
        yield this.say(girl, "has an");
        yield this.say(girl, "correct-letter");
        yield this.say(girl, "in it");
      } else {
        yield this.say(girl, "there is no");
        yield this.say(girl, "phonic");
        yield this.say(girl, "sound in");
        yield this.say(girl, "word");
        yield this.say(girl, "so");
        yield this.say(girl, "word");
        yield this.say(girl, "does not have an");
        yield this.say(girl, "correct-letter");
        yield this.say(girl, "in it");
        this.setState({arrowHidden: false});
      }
      girl.set({speaking: false, animating: false});
    });
  }

  renderCorrect() {
    const {answer, letter, consonant, vowel} = this.props;
    return (
      <StarContainer style={{padding: "50px 150px 50px 150px"}}>
        <div><DisplayText>{letter}</DisplayText></div>
        <Word word={answer.word}/>
      </StarContainer>
    );
  }

  renderIncorrect() {
    const {letter, answer, consonant, vowel} = this.props;
    return (
      <div>
        <DisplayText>{letter}</DisplayText>
        <div style={{position: "relative"}}>
          <Word word={answer.word}/>
          <XOverlay/>
        </div>
      </div>
    );
  }

  render() {
    const {girl, arrowHidden} = this.state;
    const {title, answer, onNext, activityIndex, levelId, activityCount} = this.props;

    return (
      <Response onNext={onNext} arrowHidden={arrowHidden}>
        <Actor {...girl} type="girl" onClick={this.autoplay.bind(this)}>Answer Feedback</Actor>
        <DisplayBar>
          {answer.correct ?
            this.renderCorrect() :
            this.renderIncorrect()
          }
        </DisplayBar>
        <ActivityTitle activityIndex={activityIndex} activityCount={activityCount}>
          Review:&nbsp;&nbsp;{title}
        </ActivityTitle>
      </Response>
    );
  }
}
