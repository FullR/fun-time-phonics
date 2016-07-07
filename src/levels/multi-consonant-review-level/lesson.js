import React from "react";
import Actor from "components/actor";
import AdminButton from "components/admin-button";
import LessonArrow from "components/lesson-arrow";
import LessonTitle, {LessonSubTitle} from "components/lesson-title";
import Screen from "components/screen";
import WordSoundPlayBox from "components/word-sound-play-box";
import scene from "decorators/scene";
import wordSounds from "util/word-sounds";
import LetterSoundPlayBox from "components/letter-sound-play-box";
import toPairs from "util/to-pairs";

@scene
export default class Lesson extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boy: {
        size: "large",
        speaking: true
      }
    };
  }

  getSounds() {
    const {lessonLetters, lessonWords} = this.props;
    return {
      "lets review...": "boy/common/lets-review-all-the-letter-sounds-you-have-learned",
      "touch the...": "boy/common/touch-the-green-arrow-to-begin"
    };
  }

  autoplay() {
    const {lessonWords, lessonLetters} = this.props;
    const {boy, sounds, choices} = this;

    this.startCo(function*() {
      yield this.say(boy, "lets review...");
      yield this.say(boy, "touch the...");
      boy.set({speaking: false, animating: false});
    });
  }

  render() {
    const {Title, levelId, activityIndex, onNext, letter} = this.props;
    const {choices, boy} = this.state;

    return (
      <Screen>
        <Actor {...boy} type="boy" onClick={this.autoplay.bind(this)}>Lesson</Actor>
        <LessonTitle levelId={levelId}>Review:&nbsp;&nbsp;<Title/></LessonTitle>
        <LessonArrow onClick={onNext}>Activities</LessonArrow>
        <AdminButton/>
        {this.props.children}
      </Screen>
    );
  }
}
