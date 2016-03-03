import React from "react";
import Arrow from "components/arrow";
import StarBox from "components/star-box";
import GameScreen from "components/game-screen";
import Belt from "components/belt";
import AdminLink from "components/admin-link";
import classNames from "util/class-names";
import soundContext from "decorators/sound-context";
import Corner from "components/corner";
import {VCenter} from "components/center";
import Owl from "components/owl";
import Robot from "components/robot";
require("style/level-feedback.scss");

@soundContext({
  applause: "applause",
  success: "owl/common/nice-work-touch-the-green-arrow-to-begin-the-next-lesson-touch-the-orange-arrow-to-play-this-lesson-again",
  fail: "owl/common/good-job-but-we-need-to-practice-this-some-more-touch-the-orange-arrow-to-play-this-lesson-again"
})
export default class LevelFeedback extends React.Component {
  static defaultProps = {
    requiredPercent: 85,
    score: 0,
    total: 1,
    title: "",
    subtitle: "",
    onNext() {},
    onBack() {}
  };

  get percent() {
    const {score, total} = this.props;
    return total > 0 ? Math.floor((score / total) * 100) : 0;
  }

  get passing() {
    return this.percent >= this.props.requiredPercent;
  }

  componentDidMount() {
    const {fail, success, applause} = this.props.sounds;
    if(this.passing) {
      applause.play().then(
        () => success.play(),
        (error) => console.log(error)
      );
    } else {
      fail.play();
    }
  }

  componentWillUnmount() {
    const {success, fail, applause} = this.props.sounds;
    success.stop();
    fail.stop();
    applause.stop();
  }

  render() {
    const {title, subtitle, score, total, requiredPercent, onNext, onBack} = this.props;
    const {percent, passing} = this;
    const className = classNames(this.props.className, "Level-feedback", `Level-feedback--${passing ? "passing" : "failing"}`);

    return (
      <StarBox className={className} boxSizing="border-box" large>
        <div className="Level-feedback__title-box">
          <div className="Level-feedback__title">{title} Complete!</div>
          <div className="Level-feedback__subtitle">{subtitle}</div>
        </div>

        {passing ? null :
          <div className="Level-feedback__text">Nice try! Let's practice this some more.</div>
        }

        <div className="Level-feedback__score-box">
          <div className="Level-feedback__score-percent">Score {percent}%</div>
          <div className="Level-feedback__score-fraction">{score}/{total}</div>
        </div>

        <Robot type="boy"/>
        <Robot type="girl"/>

        <div className="Level-feedback__arrow-box">
          <Arrow onClick={onBack} color="red" size="large" reversed={true}>{passing ? "Play again" : "Retry"}</Arrow>
          {passing ? <Arrow onClick={onNext} size="large"/> : null}
        </div>
        <AdminLink bottom={55} left={55}/>
      </StarBox>
    );
  }
}
