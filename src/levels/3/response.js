import React from "react";
import scene from "decorators/scene";
import Response from "components/response";
import Actor from "components/actor";
import Word from "components/word";
import ActivityTitle from "components/activity-title";
import wordSounds from "util/word-sounds";
import XOverlay from "components/x-overlay";
import StarContainer from "components/star-container";
import DisplayBar from "components/display-bar";

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
    const {words, ending, correctSound, incorrectSound} = this.props;
    const {correct} = this.props.answer;
    const endOrBeg = ending ? "end" : "begin";

    return  {
      ...wordSounds("girl", words),
      "applause": "applause",
      "correct": "girl/common/correct",
      "and": "girl/common/and",
      "...with the same sound but": `girl/common/${endOrBeg}-with-the-same-sound-but`,
      "...with a different sound": `girl/common/${endOrBeg}s-with-a-different-sound`,
      "...with the same sound": `girl/common/${endOrBeg}-with-the-same-sound`
    };
  }

  autoplay() {
    const {ending, answer, correctWords} = this.props;
    const {correct} = answer;
    const {girl} = this;
    const incorrectWord = this.props.words.find((word) => !correctWords.includes(word));

    this.startCo(function*() {
      if(correct) {
        yield this.play("applause");
        yield this.say(girl, "correct");
        yield this.say(girl, correctWords[0]);
        yield this.say(girl, "and");
        yield this.say(girl, correctWords[1]);
        yield this.say(girl, "...with the same sound");
      } else {
        yield this.say(girl, correctWords[0]);
        yield this.say(girl, "and");
        yield this.say(girl, correctWords[1]);
        yield this.say(girl, "...with the same sound but");
        yield this.say(girl, incorrectWord);
        yield this.say(girl, "...with a different sound");
        this.setState({arrowHidden: false});
      }
      girl.set({speaking: false, animating: false});
    });
  }

  renderAnswerWords() {
    const {words, correctWords, answer} = this.props;
    const {correct} = answer;
    if(correct) {
      return (
        <StarContainer>
          {answer.words.map((word) => <Word key={word} word={word}/>)}
        </StarContainer>
      );
    } else {
      return (
        <div>
          {words.map((word) =>
            correctWords.includes(word) ?
              <Word key={word} word={word}/> :
              <div style={{position: "relative", display: "inline-block"}}><Word key={word} word={word}/><XOverlay/></div>
          )}
        </div>
      );
    }
  }

  render() {
    const {girl, arrowHidden} = this.state;
    const {levelId, Title, activityIndex, activityCount, answer, onNext, ending} = this.props;

    return (
      <Response onNext={onNext} arrowHidden={arrowHidden}>
        <Actor {...girl} type="girl" onClick={this.autoplay.bind(this)}>Answer Feedback</Actor>
        <DisplayBar>
          {this.renderAnswerWords()}
        </DisplayBar>
        <ActivityTitle activityIndex={activityIndex} activityCount={activityCount}>
          <Title ending={ending}/>
        </ActivityTitle>
      </Response>
    );
  }
}
