import React from "react";
import {noop} from "lodash";
import Arrow from "components/arrow";
import Robot from "components/robot";
import StarScreen from "components/star-screen";
import toPercent from "util/to-percent";
import cn from "util/cn";
import soundContainer from "decorators/sound-container";

import ScoreScreenTitle from "components/score-screen-title";
import ScoreScreenScore from "components/score-screen-score";

@soundContainer
export default class ScoreScreen extends React.Component {
  static propTypes = {
    score: React.PropTypes.number.isRequired,
    max: React.PropTypes.number.isRequired,
    requiredScore: React.PropTypes.number,
    onNext: React.PropTypes.func,
    onBack: React.PropTypes.func
  };

  static defaultProps = {
    onNext: noop,
    onBack: noop,
    requiredScore: 85
  };

  isPassing() {
    const {score, max, requiredScore} = this.props;
    return toPercent(score, max) >= requiredScore;
  }

  getSounds() {
    return {
      feedback: this.isPassing() ?
        "boy/common/nice-work-touch-the-green-arrow-to-begin-the-next-lesson-touch-the-orange-arrow-to-play-this-lesson-again" :
        "boy/common/nice-try-lets-practice-this-some-more"
    };
  }

  onLoad() {
    this.play("feedback");
  }

  render() {
    const {onBack, onNext, score, max, requiredScore, children, className} = this.props;
    const classNames = cn("Score-screen", className);
    const passing = this.isPassing();

    return (
      <StarScreen {...this.props} className={classNames}>
        {children}
        <div className="Score-screen__footer">
          <Robot type="boy" className="Score-screen__boy"/>

          <Arrow onClick={onBack} color="red" size="large" flipped>Play Again</Arrow>
          {passing ?
            <Arrow onClick={onNext} size="large">Next</Arrow> :
            null
          }

          <Robot type="girl" className="Score-screen__girl"/>
        </div>
      </StarScreen>
    );
  }
}

ScoreScreen.Title = ScoreScreenTitle;
ScoreScreen.SubTitle = ScoreScreenTitle.SubTitle;
ScoreScreen.Score = ScoreScreenScore;
