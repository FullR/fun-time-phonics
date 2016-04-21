import React from "react";
import Screen from "../screen";
import Robot from "../robot";
import LockLink from "../lock-link";
import cn from "util/cn";

export default class GameScreen extends React.Component {
  static propTypes = {
    boy: React.PropTypes.object,
    girl: React.PropTypes.object,
    boyText: React.PropTypes.string,
    girlText: React.PropTypes.string
  };

  static defaultProps = {
    boy: {},
    girl: {},
    boyText: "",
    girlText: ""
  };

  render() {
    const {className, boy, girl, onBoyClick, onGirlClick, boyText, girlText, onAdminClick, children} = this.props;
    const classNames = cn("Game-screen", className);

    return (
      <Screen {...this.props} className={classNames}>
        <Robot {...boy} type="boy" onClick={onBoyClick}>{boyText}</Robot>
        <Robot {...girl} type="girl" onClck={onGirlClick}>{girlText}</Robot>
        <LockLink onClick={onAdminClick}>Admin/Score</LockLink>
        {children}
      </Screen>
    );
  }
}
