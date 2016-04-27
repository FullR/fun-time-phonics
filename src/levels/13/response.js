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
    const {answer, words, correctWords, correctPhonic, incorrectPhonic} = this.props;
    const incorrectWord = words.find((word) => !correctWords.includes(word));
    const sounds = {
      "and": "girl/common/and",
      "sound": "girl/common/sound",
      "correct-phonic": `girl/common/phonics/_${correctPhonic}_`,
      "correct-word-1": `girl/words/${correctWords[0]}`,
      "correct-word-2": `girl/words/${correctWords[1]}`
    };

    if(answer.correct) {
      sounds.applause = "applause";
      sounds["make the same"] = "girl/common/make-the-same";
    } else {
      sounds["make the"] = "girl/common/make-the";
      sounds["sound but"] = "girl/common/sound-but";
      sounds["makes the"] = "girl/common/makes-the";
      sounds["incorrect-phonic"] = `girl/common/phonics/_${incorrectPhonic}_`;
      sounds["incorrect-word"] = `girl/words/${incorrectWord}`;
    }

    return sounds;
  }

  autoplay() {
    const {correct} = this.props.answer;
    const {girl} = this;

    this.startCo(function*() {
      if(correct) {
        yield this.say(girl, "correct-word-1");
        yield this.say(girl, "and");
        yield this.say(girl, "correct-word-2");
        yield this.say(girl, "make the same");
        yield this.say(girl, "correct-phonic");
        yield this.say(girl, "sound");
      } else {
        yield this.say(girl, "correct-word-1");
        yield this.say(girl, "and");
        yield this.say(girl, "correct-word-2");
        yield this.say(girl, "make the");
        yield this.say(girl, "correct-phonic");
        yield this.say(girl, "sound but");
        yield this.say(girl, "incorrect-word");
        yield this.say(girl, "makes the");
        yield this.say(girl, "incorrect-phonic");
        yield this.say(girl, "sound");
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
          {answer.words.map((word) =>
            <Word key={word} word={word}/>
          )}
        </Answer>
        <ActivityTitle>
          {levelId}.&nbsp; {title}<br/>
          Activity {activityIndex + 1} of {activityCount}
        </ActivityTitle>
      </Response>
    );
  }
}
