import React from "react";
import wordSounds from "util/word-sounds";
import scene from "decorators/scene";
import Actor from "components/actor";
import ActivityTitle from "components/activity-title";
import AdminButton from "components/admin-button";
import SceneContent from "components/scene-content";
import SceneBar from "components/scene-bar";
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
      }))
    };
  }

  getSounds() {
    const {words, spellWord} = this.props;
    return {
      ...wordSounds("girl", words),
      "say the word...": "girl/common/say-the-word-the-same-way-i-say-it-then-touch-its-picture",
      "spell-word": `girl/common/phonics/_${spellWord}_`
    };
  }

  autoplay() {
    this.animate(this.props.wordsOnly);
  }

  animate(wordsOnly) {
    const {girl, choices} = this;
    this.startCo(function*() {
      choices.all.set("hidden", true);
      if(!wordsOnly) {
        girl.set("size", "large");
        yield this.say(girl, "say the word...");
        yield this.wait(300);
      }
      yield this.say(girl, "spell-word");
      girl.set("size", "small");
      for(let choice of choices) {
        choice.set("hidden", false);
        yield this.say(girl, choice.get("word"));
        yield this.wait(100);
      }
      girl.set({speaking: false, animating: false});
    });
  }

  render() {
    const {girl, choices} = this.state;
    const {levelId, title, activityCount, onAnswer, activityIndex, correctWord} = this.props;

    return (
      <Screen>
        <Actor {...girl} type="girl" onClick={this.animate.bind(this, false)}/>

        <SceneContent>
          <SceneBar>
            {choices.map((choice) =>
              <WordSoundPlayBox {...choice}
                key={choice.id}
                sound={this.getSound(choice.word)}
                onClick={() => onAnswer({word: choice.word, correct: correctWord === choice.word})}
              />
            )}
          </SceneBar>
        </SceneContent>

        <ActivityTitle>
          {levelId}.&nbsp; {title}<br/>
          Activity {activityIndex + 1} of {activityCount}
        </ActivityTitle>
        <AdminButton/>
      </Screen>
    );
  }
}
