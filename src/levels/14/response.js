import React from "react";
import ActivityTitle from "components/activity-title";
import Actor from "components/actor";
import Response from "components/response";
import Word from "components/word";
import WordSoundPlayBox from "components/word-sound-play-box";
import scene from "decorators/scene";
import DisplayBar from "components/display-bar";
import StarContainer from "components/star-container";
import PlayableStarContainer from "components/playable-star-container";
import XOverlay from "components/x-overlay";

const playBoxStyle = {position: "relative", display: "inline-block", padding: 0, margin: "0 20px 0 20px"};

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
      "not": "girl/common/not",
      "replace-phonic": `girl/common/phonics/_${replacePhonic}_`,
      "phonic": `girl/common/phonics/_${phonic}_`,
      "replace-word": `girl/words/${replaceWord}`,
      "correct-word": `girl/words/${correctWord}`
    };

    if(answer.correct) {
      sounds["applause"] = "applause";
      sounds["correct"] = "girl/common/correct";
    } else {
      sounds["selected-word"] = `girl/words/${answer.word}`;
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
        yield this.say(girl, "not");
        yield this.say(girl, "selected-word");
        this.setState({arrowHidden: false});
      }
      girl.set({speaking: false, animating: false});
    });
  }

  renderCorrect() {
    const {coPlaying} = this.state;
    const {answer, replaceWord} = this.props;
    return (
      <div>
        <WordSoundPlayBox word={replaceWord} sound={this.getSound("replace-word")} style={playBoxStyle} noWave/>
        <PlayableStarContainer sound={this.getSound("correct-word")}>
          <WordSoundPlayBox word={answer.word} style={playBoxStyle} noWave/>
        </PlayableStarContainer>
      </div>
    );
  }

  renderIncorrect() {
    const {coPlaying} = this.state;
    const {answer, correctWord, replaceWord} = this.props;
    return (
      <div>
        <WordSoundPlayBox word={replaceWord} sound={this.getSound("replace-word")} style={playBoxStyle} noWave/>
        <WordSoundPlayBox word={correctWord} sound={this.getSound("correct-word")} style={playBoxStyle} noWave/>
        <div style={{position: "relative", display: "inline-block"}}>
          <WordSoundPlayBox word={answer.word} sound={this.getSound("selected-word")} style={playBoxStyle} noWave>
            <XOverlay/>
          </WordSoundPlayBox>
        </div>
      </div>
    );
  }

  render() {
    const {girl, arrowHidden} = this.state;
    const {title, answer, onNext, activityIndex, levelId, activityCount, replaceWord} = this.props;

    return (
      <Response onNext={onNext} arrowHidden={arrowHidden}>
        <Actor {...girl} type="girl" onClick={this.autoplay.bind(this)}>Answer Feedback</Actor>
        <DisplayBar>
          {answer.correct ? this.renderCorrect() : this.renderIncorrect()}
        </DisplayBar>
        <ActivityTitle activityIndex={activityIndex} activityCount={activityCount}>
          {title}
        </ActivityTitle>
        {this.props.children}
      </Response>
    );
  }
}
