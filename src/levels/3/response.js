import React from "react";
import scene from "decorators/scene";
import Response from "components/response";
import Actor from "components/actor";
import Word from "components/word";
import ActivityTitle from "components/activity-title";
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

  getSounds() {
    const {ending} = this.props;
    const {words, correct} = this.props.answer;
    const endOrBeg = ending ? "end" : "begin";
    return {
      ...wordSounds("girl", words),
      applause: "applause",
      "and": "girl/common/and",
      "...with the same sound": correct ?
        `girl/common/${endOrBeg}-with-the-same-sound` :
        `girl/common/do-not-${endOrBeg}-with-the-same-sound`
    };
  }

  autoplay() {
    const {ending} = this.props;
    const {words, correct} = this.props.answer;
    const {girl} = this;

    this.startCo(function*() {
      yield this.say(girl, words[0]);
      yield this.say(girl, "and");
      yield this.say(girl, words[1]);
      yield this.say(girl, "...with the same sound");

      if(!correct) {
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
        <Actor {...girl} type="girl" onClick={this.autoplay.bind(this)}/>
        <Answer isCorrect={answer.correct}>
          {answer.words.map((word) =>
            <Word key={word} word={word}/>
          )}
        </Answer>
        <ActivityTitle>
          Lesson {levelId}: {title}<br/>
          Activity {activityIndex + 1} of {activityCount}
        </ActivityTitle>
      </Response>
    );
  }
}
