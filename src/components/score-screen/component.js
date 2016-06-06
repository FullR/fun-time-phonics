import React from "react";
import {noop} from "lodash";
import Arrow from "components/arrow";
import Robot from "components/robot";
import StarScreen from "components/star-screen";
import toPercent from "util/to-percent";
import cn from "util/cn";
import soundContainer from "decorators/sound-container";
import AdminButton from "components/admin-button";

import ScoreScreenTitle from "components/score-screen-title";
import ScoreScreenScore from "components/score-screen-score";

@soundContainer
export default class ScoreScreen extends React.Component {
  static propTypes = {
    score: React.PropTypes.number.isRequired,
    max: React.PropTypes.number.isRequired,
    requiredScore: React.PropTypes.number,
    onNext: React.PropTypes.func,
    onBack: React.PropTypes.func,
    hideNext: React.PropTypes.bool
  };

  static defaultProps = {
    onNext: noop,
    onBack: noop,
    requiredScore: 85,
    hideNext: false
  };

  state = {
    speaking: false
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
    this.animate();
  }

  animate() {
    if(!this.state.speaking) {
      this.setState({speaking: true});
      this.play("feedback").then(() => {
        this.setState({speaking: false});
      });
    }
  }

  render() {
    const {onBack, onNext, score, max, requiredScore, hideNext, children, className} = this.props;
    const {speaking} = this.state;
    const classNames = cn("Score-screen", className);
    const passing = this.isPassing();

    return (
      <StarScreen {...this.props} className={classNames}>
        {children}
        <div className="Score-screen__robot-container">
          <ScoreScreenScore className="Score-screen__score" score={score} max={max} passing={passing}/>
          <Robot type="boy" className="Score-screen__boy" onClick={this.animate.bind(this)} speaking={speaking} animating={speaking} noArm/>
        </div>
        <div className="Score-screen__footer">
          <Arrow className="Score-screen__back-arrow" onClick={onBack} color="orange" size="large" flipped>Play Again</Arrow>
          {passing && !hideNext ?
            <Arrow className="Score-screen__next-arrow" onClick={onNext} size="large">Next</Arrow> :
            null
          }
        </div>

        <AdminButton/>
      </StarScreen>
    );
  }
}

ScoreScreen.Title = ScoreScreenTitle;
ScoreScreen.SubTitle = ScoreScreenTitle.SubTitle;
ScoreScreen.Score = ScoreScreenScore;
