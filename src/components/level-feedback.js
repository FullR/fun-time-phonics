import React from "react";
import Arrow from "components/arrow";
import StarBox from "components/star-box";
import GameScreen from "components/game-screen";
import Belt from "components/belt";
import AdminLink from "components/admin-link";
import classNames from "util/class-names";
import soundContext from "decorators/sound-context";
require("style/level-feedback.scss");

@soundContext({
  failSound: "nice-try"
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
    if(!this.passing) {
      this.props.sounds.failSound.play();
    }
  }

  componentWillUnmount() {
    this.props.sounds.failSound.stop();
  }

  render() {
    const {title, subtitle, score, total, requiredPercent, onNext, onBack} = this.props;
    const className = classNames(this.props.className, "Level-feedback");
    const {percent, passing} = this;

    return (
      <StarBox className={className} boxSizing="border-box" large>
        <div className="Level-feedback__title-box">
          <div className="Level-feedback__title">{title} Complete!</div>
          <div className="Level-feedback__subtitle">{subtitle}</div>
        </div>
        <div className="Level-feedback__score-box">
          <div className="Level-feedback__score-percent">Score {percent}%</div>
          <div className="Level-feedback__score-fraction">{score}/{total}</div>
        </div>
        <div className="Level-feedback__arrow-box">
          {passing ?
            <Arrow onClick={onNext}/> :
            <Arrow onClick={onBack} color="red" reversed>Retry</Arrow>
          }
        </div>
        <AdminLink bottom={55} left={55}/>
      </StarBox>
    );
  }
}
