import React from "react";
import soundContext from "decorators/sound-context";
import Screen from "components/screen";
import Arrow from "components/arrow";
import Corner from "components/corner";
import AdminLink from "components/admin-link";
import CriticalLogo from "components/critical-logo";
import Robot from "components/robot";
import RobotActor from "components/robot-actor";
require("style/splashscreen.scss");

const introSound = Math.random() > 0.95 ? "intro-owl" : "intro-teacher";

@soundContext({
  welcome: introSound
})
export default class Splashscreen extends React.Component {
  componentDidMount() {
    this.props.sounds.welcome.play();
  }

  showNextScreen() {
    this.props.router.setHash("level/1");
  }

  render() {
    const {welcome} = this.props.sounds;
    return (
      <Screen className="Splashscreen">
        <div style={{position: "absolute", left: -9999}}>
          <Robot type="boy"/>
          <Robot type="girl"/>
        </div>

        <Corner top="1%" left="1%">
          <CriticalLogo size="medium"/>
        </Corner>
        <Corner top="1%" right="1%" style={{fontSize: 20}}>PreK - 2</Corner>
        <Corner bottom="5%" right="5%">
          <Arrow size="large" onClick={() => this.showNextScreen()}>
            <span style={{position: "relative", top: -3}}>
              Begin
            </span>
          </Arrow>
        </Corner>
        <AdminLink/>
      </Screen>
    );
  }
}
