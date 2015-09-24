import React from "react";
import soundContext from "decorators/sound-context";
import Screen from "components/screen";
import Arrow from "components/arrow";
import Corner from "components/corner";
import AdminLink from "components/admin-link";
import CriticalLogo from "components/critical-logo";
require("style/splashscreen.scss");

@soundContext({
  welcome: "welcome"
})
export default class Splashscreen extends React.Component {
  componentDidMount() {
    this.props.sounds.welcome.play();
  }

  showNextScreen() {
    this.props.router.setHash("lesson-1");
  }

  render() {
    const {welcome} = this.props.sounds;
    return (
      <Screen className="Splashscreen">
        <Corner top={30} left={30}>
          <CriticalLogo size="large"/>
        </Corner>
        <Corner bottom={100} right={100}>
          <Arrow onClick={() => this.showNextScreen()}/>
        </Corner>
        <AdminLink/>
      </Screen>
    );
  }
}
