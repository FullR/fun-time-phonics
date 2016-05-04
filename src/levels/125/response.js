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
    const {answer, correctPhonic, incorrectTypes} = this.props;
    const sounds = {
      "answer-word": `girl/words/${answer.word}`,
    };

    if(answer.correct) {
      Object.assign(sounds, {
        "applause": "applause",
        "spelled-word": `girl/common/spelled-words/${answer.word}`,
        "spells": "girl/common/spells"
      });
    } else {
      const incorrectType = incorrectTypes[answer.word];
      const {type, letter} = incorrectType;
      Object.assign(sounds, {
        "correct-phonic": `girl/common/phonics/_${letter}h_`,
        "correct-letter": `girl/common/letters/${letter}`,
      });

      switch(type) {
        case "beginning":
          Object.assign(sounds, {
            "begins with": "girl/common/begins-with",
            "answer-phonic": `girl/common/phonics/_${incorrectType.correctLetter}h_`,
            "answer-letter": `girl/common/letters/${incorrectType.correctLetter}`,
            "not": "girl/common/not",
            "so it is not spelled with a": "girl/common/so-it-is-not-spelled-with-a"
          });
        break;
        case "middle":
          Object.assign(sounds, {
            "does not have the": "girl/common/does-not-have-the",
            "sound so it is not spelled with an": "girl/common/sound-so-it-is-not-spelled-with-an",
          });
        break;
        case "ending":
          Object.assign(sounds, {
            "does not end with": "girl/common/does-not-end-with",
            "so it does not end with a": "girl/common/so-it-does-not-end-with-a"
          });
        break;
      }
    }
    return sounds;
  }

  autoplay() {
    const {incorrectTypes} = this.props;
    const {correct, word} = this.props.answer;
    const {girl} = this;
    const incorrectType = incorrectTypes[word];

    if(correct) {
      this.startCo(function*() {
        yield this.play("applause");
        yield this.say(girl, "spelled-word");
        yield this.say(girl, "spells");
        yield this.say(girl, "answer-word");
        girl.set({speaking: false, animating: false});
      });
    } else if(incorrectType.type === "beginning") {
      this.startCo(function*() {
        yield this.say(girl, "answer-word");
        yield this.say(girl, "begins with");
        yield this.say(girl, "answer-phonic");
        yield this.say(girl, "not");
        yield this.say(girl, "correct-phonic");
        yield this.say(girl, "so it is not spelled with a");
        yield this.say(girl, "answer-letter");
        girl.set({speaking: false, animating: false});
        this.setState({arrowHidden: false});
      });
    } else if(incorrectType.type === "middle") {
      this.startCo(function*() {
        yield this.say(girl, "answer-word");
        yield this.say(girl, "does not have the");
        yield this.say(girl, "correct-phonic");
        yield this.say(girl, "sound so it is not spelled with an");
        yield this.say(girl, "correct-letter");
        girl.set({speaking: false, animating: false});
        this.setState({arrowHidden: false});
      });
    } else if(incorrectType.type === "ending") {
      this.startCo(function*() {
        yield this.say(girl, "answer-word");
        yield this.say(girl, "does not end with");
        yield this.say(girl, "correct-phonic");
        yield this.say(girl, "so it does not end with a");
        yield this.say(girl, "correct-letter");
        girl.set({speaking: false, animating: false});
        this.setState({arrowHidden: false});
      });
    }
  }

  render() {
    const {girl, arrowHidden} = this.state;
    const {levelId, title, answer, onNext, activityIndex, activityCount} = this.props;

    return (
      <Response onNext={onNext} arrowHidden={arrowHidden}>
        <Actor {...girl} type="girl" onClick={this.autoplay.bind(this)}/>
        <Answer isCorrect={answer.correct}>
          <Word word={answer.word}/>
        </Answer>
        <ActivityTitle>
          {levelId}.&nbsp; {title}<br/>
          Activity {activityIndex + 1} of {activityCount}
        </ActivityTitle>
      </Response>
    );
  }
}
