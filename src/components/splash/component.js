import React from "react";
import cn from "util/cn";
import soundContainer from "decorators/sound-container";
import Arrow from "components/arrow";
import AdminButton from "components/admin-button";
import TctcLogo from "components/tctc-logo";
import Screen from "components/screen";
import Robot from "components/robot";

@soundContainer
export default class Splash extends React.Component {
  state = {robotSpeaking: true};

  getSounds() {
    return {
      intro: "intro-teacher"
    };
  }

  onLoad() {
    this.play("intro").then(() => this.setState({robotSpeaking: false}));
  }

  render() {
    const {onNext, className} = this.props;
    const {robotSpeaking} = this.state;
    const classNames = cn("Splash", className);

    return (
      <Screen {...this.props} className={classNames}>
        <TctcLogo/>
        <Robot type="girl" size="large" speaking={robotSpeaking} animating={robotSpeaking}/>
        <Arrow onClick={onNext} size="large">Begin</Arrow>
        <AdminButton/>
      </Screen>
    );
  }
}
