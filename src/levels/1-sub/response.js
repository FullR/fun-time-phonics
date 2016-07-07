import React from "react";
import ActivityTitle from "components/activity-title";
import Actor from "components/actor";
import Response from "components/response";
import Word from "components/word";
import scene from "decorators/scene";
import wordSounds from "util/word-sounds";

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

  revealArrow() {
    this.setState({arrowHidden: false});
  }

  getSounds() {
    const {exampleWords, answer} = this.props;

    return {
      ...wordSounds("girl", exampleWords),
      applause: "applause",
      correct: "girl/common/correct",
      word: `girl/words/${answer.word}`,
      "does not begin with...": "girl/common/does-not-begin-with-the-same-sound-as",
      "begins with the...": "girl/common/begins-with-the-same-sound-as",
      "and": "girl/common/and"
    };
  }

  autoplay() {
    const {exampleWords} = this.props;
    const {correct} = this.props.answer;
    const {girl} = this;

    this.startCo(function*() {
      if(correct) {
        yield this.play("applause");
        yield this.say(girl, "correct"); yield this.wait(200);
        yield this.say(girl, "word");
        yield this.say(girl, "begins with the...");
        yield this.say(girl, exampleWords[0]);
        yield this.say(girl, "and");
        yield this.say(girl, exampleWords[1]);
      } else {
        yield this.say(girl, "word");
        yield this.say(girl, "does not begin with...");
        yield this.say(girl, exampleWords[0]);
        yield this.say(girl, "and");
        yield this.say(girl, exampleWords[1]);
        this.revealArrow();
      }
      girl.set({speaking: false, animating: false});
    });
  }

  render() {
    const {girl, arrowHidden} = this.state;
    const {title, answer, onNext, activityIndex, indexOffset} = this.props;

    return (
      <Response onNext={onNext} arrowHidden={arrowHidden}>
        <Actor {...girl} type="girl" onClick={this.autoplay.bind(this)}>Answer Feedback</Actor>
        <Answer isCorrect={answer.correct}>
          <Word word={answer.word}/>
        </Answer>
        <ActivityTitle activityIndex={activityIndex + indexOffset} activityCount={15}>
          {title}
        </ActivityTitle>
        {this.props.children}
      </Response>
    );
  }
}
