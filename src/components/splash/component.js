import React from "react";
import {isWeb} from "util/detect-platform";
import cn from "util/cn";
import soundContainer from "decorators/sound-container";
import timerContainer from "decorators/timer-container";
import Arrow from "components/arrow";
import AdminButton from "components/admin-button";
import TctcLogo from "components/tctc-logo";
import Screen from "components/screen";
import Robot from "components/robot";
import UserNameLabel from "components/user-name-label";

@soundContainer
@timerContainer
export default class Splash extends React.Component {
  state = {robotSpeaking: true};

  getSounds() {
    return {
      welcome: isWeb() ? "splash-message-maximize" : "splash-message"
    };
  }

  onLoad() {
    this.play("welcome")
      .then(() => this.setState({robotSpeaking: false}))
      .catch((error) => console.log(`Failed to play intro sound: ${error}`));
  }

  render() {
    const {onNext, demo, adminButtonHidden, userName, className} = this.props;
    const {robotSpeaking} = this.state;
    const classNames = cn("Splash", className);

    return (
      <Screen {...this.props} className={classNames}>
        {demo ?
          <div className="Splash__demo-label">DEMO<br/>1.0</div> :
          null
        }
        <TctcLogo/>
        <Robot type="girl" size="large" speaking={robotSpeaking} animating={robotSpeaking} showText>
          <img className="Splash__speech-bubble" src={require("../../../images/splash/speech-bubble.png")}/>
        </Robot>
        <div className="Splash__arrow-container">
          <Arrow onClick={onNext} size="large">Begin</Arrow>
          {userName && userName.length ?
            <UserNameLabel>{userName}</UserNameLabel> :
            null
          }
        </div>

        {adminButtonHidden ?
          null :
          <AdminButton/>
        }
      </Screen>
    );
  }
}
