import React from "react";
import wordSounds from "util/word-sounds";
import scene from "decorators/scene";
import Actor from "components/actor";
import ActivityTitle from "components/activity-title";
import AdminButton from "components/admin-button";
import Screen from "components/screen";
import WordSoundPlayBox from "components/word-sound-play-box";
import SceneContent from "components/scene-content";
import SceneBar from "components/scene-bar";

@scene
export default class Activity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      girl: {
        size: "small",
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
    const {words, rhymeWord} = this.props;
    return {
      ...wordSounds("girl", words),
      "touch the word that rhymes with": "girl/common/touch-the-word-that-rhymes-with",
      "rhyme-word": `girl/words/${rhymeWord}`
    };
  }

  autoplay() {
    const {girl, choices} = this;
    this.startCo(function*() {
      choices.all.set("hidden", true);

      yield this.say(girl, "touch the word that rhymes with");
      yield this.say(girl, "rhyme-word");
      yield this.wait(300);

      for(let choice of choices) {
        choice.set("hidden", false);
        yield this.say(girl, choice.get("word"));
        yield this.wait(200);
      }

      girl.set({speaking: false, animating: false});
    });
  }

  render() {
    const {rhymeWord} = this.props;
    const {girl, choices} = this.state;
    const {levelId, title, activityIndex, activityCount, onAnswer, correctWord, showLesson} = this.props;

    return (
      <Screen>
        <Actor {...girl} type="girl" onClick={this.autoplay.bind(this)}/>
        <Actor type="boy" onClick={showLesson}>Lesson</Actor>

        <SceneContent>
          <SceneBar>
            <WordSoundPlayBox word={rhymeWord} sound={this.getSound("rhyme-word")} waveHidden={this.state.coPlaying}/>
          </SceneBar>

          <SceneBar>
            {choices.map((choice) =>
              <WordSoundPlayBox {...choice}
                key={choice.id}
                waveHidden={this.state.coPlaying}
                sound={this.getSound(choice.word)}
                onClick={() => onAnswer({word: choice.word, correct: correctWord === choice.word})}
              />
            )}
          </SceneBar>
        </SceneContent>

        <ActivityTitle activityIndex={activityIndex} activityCount={activityCount}>
          {title}
        </ActivityTitle>
        <AdminButton/>
      </Screen>
    );
  }
}
