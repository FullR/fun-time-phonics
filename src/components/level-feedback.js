import React from "react";
import Arrow from "components/arrow";
import StarBox from "components/star-box";
import GameScreen from "components/game-screen";
import Belt from "components/belt";
import AdminLink from "components/admin-link";
import classNames from "util/class-names";
require("style/level-feedback.scss");

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

  render() {
    const {title, subtitle, score, total, requiredPercent, onNext, onBack} = this.props;
    const className = classNames(this.props.className, "Level-feedback");
    const percent = total > 0 ? Math.floor((score / total) * 100) : 0; // avoid dividing by 0
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
          {percent >= requiredPercent ?
            <Arrow onClick={onNext}/> :
            <Arrow onClick={onBack} color="red" reversed/>
          }
        </div>
        <AdminLink bottom={55} left={55}/>
      </StarBox>
    );
  }
}
