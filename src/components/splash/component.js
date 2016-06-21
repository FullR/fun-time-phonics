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
      welcome: "splash-message"
    };
  }

  onLoad() {
    this.play("welcome")
      .then(() => this.setState({robotSpeaking: false}))
      .catch((error) => console.log(`Failed to play intro sound: ${error}`));
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
        <div className="Splash__robot-container">
          <Robot type="girl" size="large" speaking={robotSpeaking} animating={robotSpeaking} showText>
            <img className="Splash__speech-bubble" src={require("../../../images/splash/speech-bubble.png")}/>
          </Robot>
        </div>
        <Arrow onClick={onNext} size="large">Begin</Arrow>
        <AdminButton/>
      </Screen>
    );
  }
}
