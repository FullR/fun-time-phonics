import React from "react";
import hasher from "hasher";
import soundContext from "decorators/sound-context";
import Screen from "components/screen";
import SplashArrow from "components/splash-arrow";
import Corner from "components/corner";
require("style/splashscreen.scss");

@soundContext({
  welcome: "welcome"
})
export default class Splashscreen extends React.Component {
  componentDidMount() {
    this.props.sounds.welcome.play();
  }

  showNextScreen() {
    hasher.setHash("lesson-1");
  }

  render() {
    const {welcome} = this.props.sounds;
    return (
      <Screen className="Splashscreen">
        <Corner bottom={100} right={100}>
          <SplashArrow onClick={() => this.showNextScreen()}/>
        </Corner>
      </Screen>
    );
  }
}
