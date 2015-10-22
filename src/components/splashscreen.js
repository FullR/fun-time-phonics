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
    this.props.router.setHash("level/1");
  }

  render() {
    const {welcome} = this.props.sounds;
    return (
      <Screen className="Splashscreen">
        <Corner top={10} left={10}>
          <CriticalLogo size="medium"/>
        </Corner>
        <Corner top={10} right={10} style={{fontSize: 20}}>PreK - 2</Corner>
        <Corner bottom={100} right={100}>
          <Arrow onClick={() => this.showNextScreen()}/>
        </Corner>
        <AdminLink/>
      </Screen>
    );
  }
}
