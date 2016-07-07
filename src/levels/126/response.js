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
const textStyle = {
  fontSize: 150,
  textAlign: "center"
};

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
      "response-phrase": `girl/common/${this.getResponsePhrase()}`
    };

    if(answer.correct) {
      sounds["applause"] = "applause";
      sounds["correct"] = "girl/common/correct";
    }

    return sounds;
  }

  getResponsePhrase() {
    const {responsePhrases, answer} = this.props;
    const phrase = responsePhrases[answer.word];
    if(!phrase) throw new Error(`No response phrase found for word "${answer.word}"`);
    return phrase;
  }

  autoplay() {
    const {answer} = this.props;
    const {correct, word} = answer;
    const {girl} = this;

    this.startCo(function*() {
      if(correct) {
        yield this.play("applause");
        yield this.say(girl, "correct"); yield this.wait(200);
        yield this.say(girl, "response-phrase");
      } else {
        yield this.say(girl, "response-phrase");
        this.setState({arrowHidden: false});
      }
      girl.set({speaking: false, animating: false});
    });
  }

  getAnswerText() {
    const {correctWord, wordText} = this.props;
    return wordText ? wordText : correctWord.split("-").join(" ");
  }

  renderCorrect() {
    const {answer} = this.props;
    const answerText = this.getAnswerText();
    return (
      <StarContainer padded>
        <div style={textStyle}>{answerText}</div>
        <Word style={{display: "inline-block"}} word={answer.word}/>
      </StarContainer>
    );
  }

  renderIncorrect() {
    const {answer} = this.props;
    const answerText = this.getAnswerText();
    return (
      <div>
        <div style={textStyle}>{answerText}</div>
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
        {this.props.children}
      </Response>
    );
  }
}
