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
      word: `girl/words/${answer.word}`,
      "does not end with...": "girl/common/does-not-end-with-the-same-sound-as",
      "ends with the...": "girl/common/ends-with-the-same-sound-as",
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
        yield this.say(girl, "word");
        yield this.say(girl, "ends with the...");
        yield this.say(girl, exampleWords[0]);
        yield this.say(girl, "and");
        yield this.say(girl, exampleWords[1]);
      } else {
        yield this.say(girl, "word");
        yield this.say(girl, "does not end with...");
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
    const {answer, onNext, activityIndex, indexOffset} = this.props;

    return (
      <Response onNext={onNext} arrowHidden={arrowHidden}>
        <Actor {...girl} type="girl" onClick={this.autoplay.bind(this)}/>
        <Answer isCorrect={answer.correct}>
          <Word word={answer.word}/>
        </Answer>
        <ActivityTitle>
          Lesson 2: Ending Sounds<br/>
          Activity {activityIndex + indexOffset + 1} of 15
        </ActivityTitle>
      </Response>
    );
  }
}
