import React from "react";
import ActivityTitle from "components/activity-title";
import Actor from "components/actor";
import Response from "components/response";
import Word from "components/word";
import scene from "decorators/scene";
import DisplayText from "components/display-text";
import DisplayBar from "components/display-bar";
import XOverlay from "components/x-overlay";
import StarContainer from "components/star-container";

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
    const {answer, letters} = this.props;
    const sounds = {
      "answer-word": `girl/words/${answer.word}`,
      "letters": `girl/common/${letters.split("").join("-")}`,
      "phonic": `girl/common/phonics/_${letters}h_`
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
        yield this.say(girl, "correct"); yield this.wait(200);
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

  renderCorrect() {
    const {correctWord, letters} = this.props;
    return (
      <StarContainer style={{padding: "50px 150px 50px 150px"}}>
        <div><DisplayText>{letters}</DisplayText></div>
        <Word word={correctWord}/>
      </StarContainer>
    );
  }

  renderIncorrect() {
    const {correctWord, answer, letters} = this.props;
    return (
      <div>
        <DisplayText>{letters}</DisplayText>
        <div style={{position: "relative"}}>
          <Word word={answer.word}/>
          <XOverlay/>
        </div>
      </div>
    );
  }

  render() {
    const {girl, arrowHidden} = this.state;
    const {levelId, title, answer, onNext, activityIndex, activityCount} = this.props;

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
          {title}
        </ActivityTitle>
      </Response>
    );
  }
}
