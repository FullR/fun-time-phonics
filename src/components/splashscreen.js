import React from "react";
import soundContext from "decorators/sound-context";
import Screen from "components/screen";
import SplashArrow from "components/splash-arrow";
import Owl from "components/owl";
import {HCenter, VCenter} from "components/center";
import Corner from "components/corner";
require("style/splashscreen.scss");

@soundContext({
  welcome: "welcome"
})
export default class Splashscreen extends React.Component {
  componentDidMount() {
    this.props.sounds.welcome.play();
  }

  render() {
    return (
      <Screen className="Splashscreen">
        <Corner top={50} left={50}>
          <Owl speaking={true}>Lesson</Owl>
        </Corner>
        <Corner bottom={100} right={100}>
          <SplashArrow/>
        </Corner>
      </Screen>
    );
  }
}
