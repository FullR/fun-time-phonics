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
    const {answer, rhymeWord} = this.props;
    const sounds = {
      "rhyme-word": `girl/words/${rhymeWord}`,
      "answer-word": `girl/words/${answer.word}`
    };

    if(answer.correct) {
      sounds.applause = "applause";
      sounds.correct = "girl/common/correct";
      sounds["rhymes with"] = "girl/common/rhymes-with";
    } else {
      sounds["does not rhyme with"] = "girl/common/does-not-rhyme-with";
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
        yield this.say(girl, "rhymes with");
        yield this.say(girl, "rhyme-word");
      } else {
        yield this.say(girl, "answer-word");
        yield this.say(girl, "does not rhyme with");
        yield this.say(girl, "rhyme-word");
        this.setState({arrowHidden: false});
      }
      girl.set({speaking: false, animating: false});
    });
  }

  render() {
    const {girl, arrowHidden} = this.state;
    const {levelId, title, activityIndex, activityCount, answer, onNext} = this.props;

    return (
      <Response onNext={onNext} arrowHidden={arrowHidden}>
        <Actor {...girl} type="girl" onClick={this.autoplay.bind(this)}>Answer Feedback</Actor>
        <Answer isCorrect={answer.correct}>
          <Word word={answer.word}/>
        </Answer>
        <ActivityTitle activityIndex={activityIndex} activityCount={activityCount}>
          {title}
        </ActivityTitle>
      </Response>
    );
  }
}
