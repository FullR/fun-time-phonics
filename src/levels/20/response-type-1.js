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
    const {answer, word} = this.props;
    const sounds = {
      "letter": `girl/common/${answer.letter}`,
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
        yield this.say(girl, "correct"); yield this.wait(200);
        yield this.say(girl, "letter");
        yield this.say(girl, "makes the");
        yield this.say(girl, "phonic");
        yield this.say(girl, "sound in");
        yield this.say(girl, "word");
      } else {
        yield this.say(girl, "word");
        yield this.say(girl, "does not make the");
        yield this.say(girl, "phonic");
        yield this.say(girl, "sound so there is no");
        yield this.say(girl, "letter");
        yield this.say(girl, "in");
        yield this.say(girl, "word");
        this.setState({arrowHidden: false});
      }
      girl.set({speaking: false, animating: false});
    });
  }

  renderCorrect() {
    const {answer, word, consonant, vowel} = this.props;
    return (
      <StarContainer style={{padding: "50px 150px 50px 150px"}}>
        <div><DisplayText>{answer.letter}</DisplayText></div>
        <Word word={word}/>
      </StarContainer>
    );
  }

  renderIncorrect() {
    const {word, answer, consonant, vowel} = this.props;
    return (
      <div>
        <DisplayText>{answer.letter}</DisplayText>
        <div style={{position: "relative"}}>
          <Word word={word}/>
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
