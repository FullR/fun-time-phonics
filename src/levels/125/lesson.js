import React from "react";
import Actor from "components/actor";
import AdminButton from "components/admin-button";
import LessonArrow from "components/lesson-arrow";
import LessonTitle, {LessonSubTitle} from "components/lesson-title";
import Screen from "components/screen";
import scene from "decorators/scene";
import SceneContent from "components/scene-content";
import SceneBar from "components/scene-bar";
import WordSoundPlayBox from "components/word-sound-play-box";
import DisplayText from "components/display-text";

const flashTextActiveStyle = {
  color: "green"
};
const FlashText = ({children, active}) => (<span style={active ? flashTextActiveStyle : null}>{children}</span>);

@scene
export default class Lesson extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boy: {
        size: "small",
        speaking: true
      },
      choices: [{id: "fat", word: "fat", hidden: false}],
      highlighted: null
    };
  }

  getSounds() {
    return {
      "when reading a word...": "boy/common/when-reading-a-word-look-at-the-middle-letter-first",
      "then say...": "boy/common/then-say-the-beginning-and-middle-sounds-together",
      "finally...": "boy/common/finally-add-the-ending-sound",
      "touch the...": "boy/common/touch-the-green-arrow-to-begin",
      "fa": "boy/common/phonics/_f_ah_",
      "fat": "boy/common/phonics/_fa_t_"
    };
  }

  autoplay() {
    const {boy, sounds, choices} = this;

    this.startCo(function*() {
      this.setState({highlighted: null});
      yield this.say(boy, "when reading a word...");

      this.setState({highlighted: "a"});
      yield this.wait(500);
      this.setState({highlighted: null});

      yield this.say(boy, "then say...");
      this.setState({highlighted: "fa"});
      yield this.say(boy, "fa");
      this.setState({highlighted: null});
      yield this.say(boy, "finally...");
      boy.set("size", "small");
      this.setState({highlighted: "t"});
      yield this.say(boy, "fat");
      this.setState({highlighted: null});
      yield this.wait(300);
      yield this.say(boy, "touch the...");
      boy.set({speaking: false, animating: false});
    });
  }

  render() {
    const {levelId, title, activityIndex, onNext} = this.props;
    const {choices, boy, highlighted, wordHidden} = this.state;
    const fat = choices[0];

    return (
      <Screen>
        <Actor {...boy} type="boy" onClick={this.autoplay.bind(this)}>Lesson</Actor>
        <LessonTitle levelId={levelId}>{title}</LessonTitle>

        <SceneContent>
          <SceneBar>
            <DisplayText hidden={wordHidden}>
              <FlashText active={highlighted === "fa"}>f<FlashText active={highlighted === "a"}>a</FlashText></FlashText><FlashText active={highlighted === "t"}>t</FlashText>
            </DisplayText>
          </SceneBar>

          <SceneBar>
            <WordSoundPlayBox {...fat} sound={this.getSound("fat")} waveHidden={this.state.coPlaying}/>
          </SceneBar>
        </SceneContent>

        <LessonArrow onClick={onNext}>Activities</LessonArrow>
        <AdminButton/>
        {this.props.children}
      </Screen>
    );
  }
}
