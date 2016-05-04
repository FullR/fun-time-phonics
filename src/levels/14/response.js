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
    const {answer, correctWord, replaceWord, replacePhonic, phonic} = this.props;
    const sounds = {
      applause: "applause",
      "if you replace": "girl/common/if-you-replace",
      "in": "girl/common/in",
      "with": "girl/common/with",
      "the new word is": "girl/common/the-new-word-is",
      "replace-phonic": `girl/common/phonics/_${replacePhonic}_`,
      "phonic": `girl/common/phonics/_${phonic}_`,
      "replace-word": `girl/words/${replaceWord}`,
      "correct-word": `girl/words/${correctWord}`
    };

    if(answer.correct) {
      sounds["applause"] = "applause";
      sounds["yes"] = "girl/common/yes";
    }

    return sounds;
  }

  autoplay() {
    const {correct} = this.props.answer;
    const {girl} = this;

    this.startCo(function*() {
      if(correct) {
        yield this.play("applause");
        yield this.say(girl, "yes");
        yield this.wait(200);
      }

      yield this.say(girl, "if you replace");
      yield this.say(girl, "replace-phonic");
      yield this.say(girl, "in");
      yield this.say(girl, "replace-word");
      yield this.wait(100);
      yield this.say(girl, "with");
      yield this.say(girl, "phonic");
      yield this.wait(200);
      yield this.say(girl, "the new word is");
      yield this.say(girl, "correct-word");

      if(!correct) {
        this.setState({arrowHidden: false});
      }
      girl.set({speaking: false, animating: false});
    });
  }

  render() {
    const {girl, arrowHidden} = this.state;
    const {title, answer, onNext, activityIndex, levelId, activityCount} = this.props;

    return (
      <Response onNext={onNext} arrowHidden={arrowHidden}>
        <Actor {...girl} type="girl" onClick={this.autoplay.bind(this)}/>
        <Answer isCorrect={answer.correct}>
          <Word word={answer.word}/>
        </Answer>
        <ActivityTitle>
          {levelId}. {title}<br/>
          Activity {activityIndex + 1} of {activityCount}
        </ActivityTitle>
      </Response>
    );
  }
}
