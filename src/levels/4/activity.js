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
        <Actor type="girl" {...girl}/>
        <Actor type="boy" onClick={showLesson}/>

        <DisplayBar position="top">
          <WordSoundPlayBox word={rhymeWord} sound={this.getSound("rhyme-word")}/>
        </DisplayBar>

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
          {levelId}.&nbsp; {title}<br/>
          Activity {activityIndex + 1} of {activityCount}
        </ActivityTitle>
        <AdminButton/>
      </Screen>
    );
  }
}
