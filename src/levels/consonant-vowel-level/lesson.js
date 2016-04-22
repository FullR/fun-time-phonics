import React from "react";
import Actor from "components/actor";
import AdminButton from "components/admin-button";
import DisplayBar from "components/display-bar";
import LessonArrow from "components/lesson-arrow";
import LessonTitle, {LessonSubTitle} from "components/lesson-title";
import Screen from "components/screen";
import WordSoundPlayBox from "components/word-sound-play-box";
import scene from "decorators/scene";
import wordSounds from "util/word-sounds";

@scene
export default class Lesson extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boy: {
        size: "large",
        speaking: true
      },
      choices: [
        ...(props.letterIntroWords || []).map((word) => ({ // letter into choices
          word,
          id: word,
          hidden: true,
          detached: true
        })),
        ...props.lessonWords.map((word) => ({ // lesson choices
          word,
          id: word,
          hidden: true
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
      "letters": `boy/common/letters/${consonant}-${vowel}`
    };

    if(letterIntroWords) {
      Object.assign(sounds, {
        ...wordSounds("boy", letterIntroWords),
        "the letter": "boy/common/the-letter",
        "consonant": `boy/common/letters/${consonant}`,
        "looks like this": "boy/common/looks-like-this",
        "makes the beginning sound of": "boy/common/makes-the-beginning-sound-of"
      });
    }

    return sounds;
  }

  autoplay() {
    const {boy, sounds, choices, letterIntro, letterIntroWords} = this;

    this.startCo(function*() {
      choices.all.set("hidden", true);

      // TODO: Write animation code (remember you will need to display the letter during the letter intro)

      boy.set({speaking: false, animating: false});
    });
  }

  render() {
    const {levelId, activityIndex, onNext} = this.props;
    const {choices, boy} = this.state;

    return (
      <Screen>
        <Actor {...boy} type="boy" onClick={this.autoplay.bind(this)}/>

        <LessonTitle>Consonant &quot;b&quot; With Short Vowel &quot;a&quot;</LessonTitle>
        <LessonTitle.SubTitle>Lesson {levelId}</LessonTitle.SubTitle>

        <DisplayBar>
          {choices.map((choice) =>
            <WordSoundPlayBox {...choice}
              key={choice.word}
              sound={this.getSound(choice.word)}
            />
          )}
        </DisplayBar>

        <LessonArrow onClick={onNext}>Activity {activityIndex + 1}</LessonArrow>
        <AdminButton/>
      </Screen>
    );
  }
}
