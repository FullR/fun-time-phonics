import React from "react";
import cn from "util/cn";
import Screen from "components/screen";

export default class InvalidWindowSizeScreen extends React.Component {
  render() {
    const {onClose, className} = this.props;
    const classNames = cn("Invalid-window-size-screen", className);

    return (
      <Screen {...this.props} className={classNames}>
        <h1>Your app is too small, please maximize the window or run the app on a device that supports a higher resolution.</h1>
        <span onClick={onClose}>Play anyway</span>
      </Screen>
    );
  }
}
