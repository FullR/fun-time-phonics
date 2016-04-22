import React from "react";
import wordSounds from "util/word-sounds";
import scene from "decorators/scene";
import Actor from "components/actor";
import ActivityTitle from "components/activity-title";
import AdminButton from "components/admin-button";
import DisplayBar from "components/display-bar";
import Screen from "components/screen";
import WordSoundPlayBox from "components/word-sound-play-box";

@scene
export default class Activity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      girl: {
        size: "large",
        speaking: true,
        animating: false
      },
      choices: props.words.map((word) => ({
        word,
        id: word,
        hidden: true
      })),
      showingReplaceWord: false
    };
  }

  getSounds() {
    const {words, replaceWord, replacePhonic, phonic} = this.props;
    return {
      ...wordSounds("girl", words),
      "replace": "girl/common/replace",
      "in": "girl/common/in",
      "with": "girl/common/with",
      "what is the new word": "girl/common/what-is-the-new-word",
      "replace-word": `girl/words/${replaceWord}`,
      "replace-phonic": `girl/common/phonics/_${replacePhonic}_`,
      "phonic": `girl/common/phonics/_${phonic}_`
    };
  }

  autoplay() {
    this.animate();
  }

  animate() {
    const {girl, choices} = this;
    this.startCo(function*() {
      choices.all.set("hidden", true);
      girl.set("size", "large");
      this.setState({showingReplaceWord: false});

      yield this.say(girl, "replace");
      yield this.say(girl, "replace-phonic");
      yield this.say(girl, "in");
      girl.set("size", "small");
      this.setState({showingReplaceWord: true});
      yield this.say(girl, "replace-word");
      yield this.say(girl, "with");
      yield this.say(girl, "phonic");
      yield this.say(girl, "what is the new word");

      yield this.wait(500);
      for(let choice of choices) {
        choice.set("hidden", false);
        yield this.say(girl, choice.get("word"));
        yield this.wait(100);
      }

      girl.set({speaking: false, animating: false});
    });
  }

  render() {
    const {girl, choices, showingReplaceWord} = this.state;
    const {replaceWord, onAnswer, activityIndex, correctWord, showLesson, activityCount, levelId} = this.props;

    return (
      <Screen>
        <Actor {...girl} type="girl" onClick={this.animate.bind(this, false)}/>
        <Actor type="boy" onClick={showLesson}/>

        {showingReplaceWord ?
          <DisplayBar position="top">
            <WordSoundPlayBox word={replaceWord} sound={this.getSound("replace-word")}/>
          </DisplayBar> :
          null
        }

        <DisplayBar position="bottom">
          {choices.map((choice) =>
            <WordSoundPlayBox {...choice}
              key={choice.id}
              sound={this.getSound(choice.word)}
              onClick={() => onAnswer({word: choice.word, correct: correctWord === choice.word})}
            />
          )}
        </DisplayBar>

        <ActivityTitle>
          Lesson {levelId}: Forming New Words<br/>
          Activity {activityIndex + 1} of {activityCount}
        </ActivityTitle>
        <AdminButton/>
      </Screen>
    );
  }
}
