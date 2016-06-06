import React from "react";
import cn from "util/cn";
import soundContainer from "decorators/sound-container";
import timerContainer from "decorators/timer-container";
import Arrow from "components/arrow";
import AdminButton from "components/admin-button";
import TctcLogo from "components/tctc-logo";
import Screen from "components/screen";
import Robot from "components/robot";

@soundContainer
@timerContainer
export default class Splash extends React.Component {
  state = {robotSpeaking: true};

  getSounds() {
    return {
      welcome: "intro-teacher",
      "please-max": "please-maximize-1",
      "please-max-2": "please-maximize-2"
    };
  }

  onLoad() {
    this.play("welcome")
      .then(() => this.wait(300))
      .then(() => this.play("please-max"))
      .then(() => this.wait(300))
      .then(() => this.play("please-max-2"))
      .then(() => this.setState({robotSpeaking: false}))
      .catch((error) => console.log(`Failed to play intro sounds: ${error}`));
  }

  render() {
    const {onNext, demo, className} = this.props;
    const {robotSpeaking} = this.state;
    const classNames = cn("Splash", className);

    return (
      <Screen {...this.props} className={classNames}>
        {demo ?
          <div className="Splash__demo-label">DEMO</div> :
          null
        }
        <TctcLogo/>
        <Robot type="girl" size="large" speaking={robotSpeaking} animating={robotSpeaking}/>
        <Arrow onClick={onNext} size="large">Begin</Arrow>
        <AdminButton/>
      </Screen>
    );
  }
}
