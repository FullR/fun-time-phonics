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
      choices: [
        {id: "hot", word: "hot", hidden: true},
        {id: "cap", word: "cap", hidden: true},
        {id: "dad", word: "dad", hidden: true},
        {id: "sun", word: "sun", hidden: true},
        {id: "box", word: "box", hidden: true}
      ],
      letters: ["t", "p", "d", "n", "x"],
      visibleLetters: []
    };
  }

  revealLetter(letter) {
    this.setState({
      visibleLetters: [...this.state.visibleLetters, letter]
    });
  }

  getSounds() {
    return {
      "hot": "boy/words/hot",
      "cap": "boy/words/cap",
      "dad": "boy/words/dad",
      "sun": "boy/words/sun",
      "box": "boy/words/box",
      "t": "boy/common/t",
      "p": "boy/common/p",
      "d": "boy/common/d",
      "n": "boy/common/n",
      "x": "boy/common/x",
      "t-phonic": "boy/common/phonics/_t_",
      "p-phonic": "boy/common/phonics/_p_",
      "d-phonic": "boy/common/phonics/_d_",
      "n-phonic": "boy/common/phonics/_n_",
      "x-phonic": "boy/common/phonics/_x_",
      "remember...": "boy/common/lesson123-instructions",
      "the ending sound in": "boy/common/the-ending-sound-in",
      "is": "boy/common/is",
      "so": "boy/common/so",
      "ends with": "boy/common/ends-with",
      "touch the...": "boy/common/touch-the-green-arrow-to-begin"
    };
  }

  autoplay() {
    const {boy, sounds, choices} = this;

    this.startCo(function*() {
      choices.all.set("hidden", true);
      this.setState({visibleLetters: []});
      let first = true;
      yield this.say(boy, "remember...");

      for(let choice of choices) {
        const word = choice.get("word");
        const endingLetter = word[word.length - 1];
        yield this.say(boy, "the ending sound in");
        if(first) {
          first = false;
          boy.set("size", "small");
        }
        choice.set("hidden", false);
        yield this.say(boy, word);
        yield this.say(boy, "is");
        yield this.say(boy, endingLetter + "-phonic");
        yield this.wait(100);
        yield this.say(boy, "so");
        yield this.say(boy, word);
        yield this.say(boy, "ends with");
        this.revealLetter(endingLetter);
        yield this.say(boy, endingLetter);
        yield this.wait(100);
      }

      yield this.say(boy, "touch the...");

      boy.set({speaking: false, animating: false});
    });
  }

  render() {
    const {levelId, title, activityIndex, onNext} = this.props;
    const {choices, boy, letters, visibleLetters} = this.state;

    return (
      <Screen>
        <Actor {...boy} type="boy" onClick={this.autoplay.bind(this)}>Lesson</Actor>
        <LessonTitle levelId={levelId}>{title}</LessonTitle>

        <SceneContent>
          <SceneBar style={{position: "relative", top: 40}}>
            {choices.map((choice) =>
              <WordSoundPlayBox {...choice}
                size="medium"
                key={choice.word}
                sound={this.getSound(choice.word)}
                waveHidden={this.state.coPlaying}
              />
            )}
          </SceneBar>

          <SceneBar style={{position: "relative", top: 40}}>
            {letters.map((letter) =>
              <PlayableDisplayText
                key={letter}
                sound={this.getSound(letter)}
                hidden={!visibleLetters.includes(letter)}
                waveHidden={this.state.coPlaying}
                size="medium"
              >
                {letter}
              </PlayableDisplayText>
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
