import React from "react";
import Actor from "components/actor";
import AdminButton from "components/admin-button";
import LessonArrow from "components/lesson-arrow";
import LessonTitle, {LessonSubTitle} from "components/lesson-title";
import Screen from "components/screen";
import WordSoundPlayBox from "components/word-sound-play-box";
import scene from "decorators/scene";
import wordSounds from "util/word-sounds";
import PlayableDisplayText from "components/playable-display-text";
import SceneContent from "components/scene-content";
import SceneBar from "components/scene-bar";

const Letters = ({children}) => (<span style={{display: "inline-block"}}>{children}</span>);

@scene
export default class Lesson extends React.Component {
  static defaultProps = {
    letterIntroWords: []
  };

  constructor(props) {
    super(props);
    this.state = {
      boy: {
        size: "small",
        speaking: true
      },
      showingLetterIntro: props.letterIntro,
      showingVowel: false,
      choices: [
        ...(props.letterIntroWords || []).map((word) => ({ // letter into choices
          word,
          id: "intro-" + word,
          hidden: true,
          detached: !props.letterIntro
        })),
        ...props.lessonWords.map((word) => ({ // lesson choices
          word,
          id: word,
          hidden: true,
          detached: props.letterIntro
        }))
      ]
    };
  }

  getSounds() {
    const {consonant, vowel, lessonWords, letterIntroWords} = this.props;
    const sounds = {
      ...wordSounds("boy", lessonWords),
      "words such as": "boy/common/words-such-as",
      "all begin with the": "boy/common/all-begin-with-the",
      "sound": "boy/common/sound",
      "we use the letters": "boy/common/we-use-the-letters",
      "to write the": "boy/common/to-write-the",
      "when we read the letters": "boy/common/when-we-read-the-letters",
      "they tell us to say": "boy/common/they-tell-us-to-say",
      "touch the green...": "boy/common/touch-the-green-arrow-to-begin",
      "letters": `boy/common/${consonant}-${vowel}`,
      "phonic": `boy/common/phonics/_${consonant}${vowel}h_`
    };

    if(letterIntroWords) {
      Object.assign(sounds, {
        ...wordSounds("boy", letterIntroWords),
        "the letter": "boy/common/the-letter",
        "consonant": `boy/common/${consonant}`,
        "looks like this": "boy/common/looks-like-this",
        "makes the beginning sound of": "boy/common/makes-the-beginning-sound-of"
      });
    }

    if(consonant === "q") {
      Object.assign(sounds, {
        "is always followed by the letter": "boy/common/is-always-followed-by-the-letter",
        "vowel": `boy/common/${vowel}`
      });
    }

    return sounds;
  }

  autoplay() {
    const {lessonWords, letterIntro, letterIntroWords, consonant, vowel} = this.props;
    const {boy, sounds, choices} = this;

    if(consonant === "q") {
      return this.autoplay_q_only();
    }

    this.startCo(function*() {
      this.setState({showingLetterIntro: letterIntro, showingVowel: false});
      choices.all.set("hidden", true);

      if(letterIntro) {
        choices.all.set("detached", true);
        for(let word of letterIntroWords) {
          choices["intro-" + word].set("detached", false);
        }

        yield this.say(boy, "the letter");
        yield this.say(boy, "consonant");
        yield this.say(boy, "looks like this");

        yield this.wait(300);
        yield this.say(boy, "the letter");
        yield this.say(boy, "consonant");
        yield this.say(boy, "makes the beginning sound of");

        for(let word of letterIntroWords) {
          choices["intro-" + word].set("hidden", false);
          yield this.say(boy, word);
          yield this.wait(100);
        }

        yield this.wait(400);
        choices.all.set({hidden: true, detached: false});
        for(let word of letterIntroWords) {
          choices["intro-" + word].set("detached", true);
        }
        this.setState({showingLetterIntro: false});
      }

      yield this.say(boy, "words such as");

      for(let word of lessonWords) {
        choices[word].set("hidden", false);
        yield this.say(boy, word);
        yield this.wait(100);
      }

      yield this.say(boy, "all begin with the");
      yield this.say(boy, "phonic");
      yield this.say(boy, "sound");

      yield this.wait(300);

      yield this.say(boy, "we use the letters");
      yield this.say(boy, "letters");
      yield this.say(boy, "to write the");
      yield this.say(boy, "phonic");
      yield this.say(boy, "sound");

      yield this.wait(200);

      yield this.say(boy, "when we read the letters");
      yield this.say(boy, "letters");
      yield this.say(boy, "they tell us to say");
      yield this.say(boy, "phonic");

      yield this.wait(300);

      yield this.say(boy, "touch the green...");

      boy.set({speaking: false, animating: false});
    });
  }

  autoplay_q_only() {
    const {lessonWords, letterIntro, letterIntroWords, consonant, vowel} = this.props;
    const {boy, sounds, choices} = this;

    this.startCo(function*() {
      choices.all.set({hidden: true, detached: false});
      this.setState({showingLetterIntro: letterIntro, showingVowel: false});
      yield this.say(boy, "the letter");
      yield this.say(boy, "consonant");
      yield this.say(boy, "looks like this");

      this.setState({showingVowel: true});
      yield this.say(boy, "the letter");
      yield this.say(boy, "consonant");
      yield this.say(boy, "is always followed by the letter");
      yield this.say(boy, "vowel");

      yield this.say(boy, "words such as");

      for(let choice of choices) {
        choice.set("hidden", false);
        yield this.say(boy, choice.get("word"));
        yield this.wait(150);
      }

      yield this.say(boy, "all begin with the");
      yield this.say(boy, "phonic");
      yield this.say(boy, "sound");

      yield this.say(boy, "we use the letters");
      yield this.say(boy, "letters");
      yield this.say(boy, "to write the");
      yield this.say(boy, "phonic");
      yield this.say(boy, "sound");

      yield this.say(boy, "when we read the letters");
      yield this.say(boy, "letters");
      yield this.say(boy, "they tell us to say");
      yield this.say(boy, "phonic");
      boy.set({speaking: false, animating: false});
    });
  }

  render() {
    const {title, levelId, activityIndex, onNext, consonant, vowel, letterIntroWords} = this.props;
    const {choices, boy, letters, showingLetterIntro, showingVowel} = this.state;

    return (
      <Screen>
        <Actor {...boy} type="boy" onClick={this.autoplay.bind(this)}>Lesson</Actor>
        <LessonTitle levelId={levelId}>{title}</LessonTitle>

        <SceneContent>
          <SceneBar style={consonant === "q" ? {position: "relative", top: -20} : null}>
            {showingLetterIntro && !showingVowel ?
              <PlayableDisplayText sound={this.getSound("consonant")} waveHidden={this.state.coPlaying} style={{width: "100%"}}>
                <span style={{marginRight: 50}}>{consonant.toUpperCase()}</span>
                {consonant}
              </PlayableDisplayText> :
              <PlayableDisplayText sound={this.getSound("letters")} waveHidden={this.state.coPlaying}>
                <span style={{paddingRight: 20}}>{consonant}</span><span>{vowel}</span>
              </PlayableDisplayText>
            }
          </SceneBar>

          <SceneBar>
            {(showingLetterIntro ?
              choices.slice(0, letterIntroWords.length) :
              choices.slice(letterIntroWords.length)
            ).map((choice, i) =>
              <WordSoundPlayBox {...choice}
                waveHidden={this.state.coPlaying}
                size="medium"
                key={choice.word + "-" + i}
                sound={this.getSound(choice.word)}
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
