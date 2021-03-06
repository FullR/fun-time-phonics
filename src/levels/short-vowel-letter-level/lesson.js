import React from "react";
import Actor from "components/actor";
import AdminButton from "components/admin-button";
import SceneContent from "components/scene-content";
import SceneBar from "components/scene-bar";
import LessonArrow from "components/lesson-arrow";
import LessonTitle, {LessonSubTitle} from "components/lesson-title";
import Screen from "components/screen";
import WordSoundPlayBox from "components/word-sound-play-box";
import scene from "decorators/scene";
import wordSounds from "util/word-sounds";
import soundPropObserver from "decorators/sound-prop-observer";
import PlayableDisplayText from "components/playable-display-text";

@scene
export default class Lesson extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boy: {
        size: "large",
        speaking: true
      },
      choices: props.lessonWords.map((word) => ({
        word,
        id: word,
        hidden: true
      })),
      showingLetter: false
    };
  }

  getSounds() {
    const {letter, lessonWords} = this.props;
    return {
      ...wordSounds("boy", lessonWords),
      "the letter": "boy/common/the-letter",
      "letter": `boy/common/${letter}`,
      "looks like this": "boy/common/looks-like-this",
      "makes the": "boy/common/makes-the",
      "phonic": `boy/common/phonics/_${letter}h_`,
      "sound in": "boy/common/sound-in",
      "we use the letter": "boy/common/we-use-the-letter",
      "to write words that make the": "boy/common/to-write-words-that-make-the",
      "sound": "boy/common/sound",
      "touch the...": "boy/common/touch-the-green-arrow-to-begin"
    };
  }

  autoplay() {
    const {boy, sounds, choices} = this;

    this.startCo(function*() {
      choices.all.set("hidden", true);
      this.setState({showingLetter: false});
      boy.set("size", "large");

      yield this.say(boy, "the letter");
      boy.set("size", "small");
      this.setState({showingLetter: true});
      yield this.say(boy, "letter");
      yield this.say(boy, "looks like this");
      yield this.wait(400);
      yield this.say(boy, "the letter");
      yield this.say(boy, "letter");
      yield this.say(boy, "makes the");
      yield this.say(boy, "phonic");
      yield this.say(boy, "sound in");

      for(let choice of choices) {
        choice.set("hidden", false);
        yield this.say(boy, choice.get("word"));
        yield this.wait(100);
      }

      yield this.say(boy, "we use the letter");
      yield this.say(boy, "letter");
      yield this.say(boy, "to write words that make the");
      yield this.say(boy, "phonic");
      yield this.say(boy, "sound");

      yield this.wait(500);

      yield this.say(boy, "touch the...");

      boy.set({speaking: false, animating: false});
    });
  }

  render() {
    const {title, levelId, letter, activityIndex, onNext} = this.props;
    const {choices, boy, showingLetter} = this.state;

    return (
      <Screen>
        <Actor {...boy} type="boy" onClick={this.autoplay.bind(this)}>Lesson</Actor>
        <LessonTitle levelId={levelId}>{title}</LessonTitle>

        <SceneContent>
          <SceneBar>
            <PlayableDisplayText
              size="medium"
              sound={this.getSound("letter")}
              hidden={!showingLetter}
              waveHidden={this.state.coPlaying}
              style={{width: "auto"}}
            >
              <span style={{marginRight: 25}}>{letter.toUpperCase()}</span><span style={{marginLeft: 25}}>{letter}</span>
            </PlayableDisplayText>
          </SceneBar>

          <SceneBar>
            {choices.map((choice) =>
              <WordSoundPlayBox {...choice}
                size="medium"
                key={choice.word}
                sound={this.getSound(choice.word)}
                waveHidden={this.state.coPlaying}
              />
            )}
          </SceneBar>
        </SceneContent>

        <LessonArrow onClick={onNext}>Activities</LessonArrow>
        <AdminButton/>
        {this.props.children}
      </Screen>
    );
  }
}
