import React from "react";
import cn from "util/cn";
import soundContainer from "decorators/sound-container";
import Arrow from "components/arrow";
import AdminButton from "components/admin-button";
import TctcLogo from "components/tctc-logo";
import Screen from "components/screen";

@soundContainer
export default class Splash extends React.Component {
  getSounds() {
    return {
      intro: "intro-teacher"
    };
  }

  onLoad() {
    this.play("intro");
  }

  render() {
    const {onNext, className} = this.props;
    const classNames = cn("Splash", className);

    return (
      <Screen {...this.props} className={classNames}>
        <TctcLogo/>
        <Arrow onClick={onNext} size="large">Begin</Arrow>
        <AdminButton/>
      </Screen>
    );
  }
}
