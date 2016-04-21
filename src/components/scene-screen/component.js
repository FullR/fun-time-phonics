import React from "react";
import Screen from "components/screen";
import cn from "util/cn";

export default class SceneScreen extends React.Component {
  render() {
    const {className} = this.props;
    const classNames = cn("Scene-screen", className);

    return (
      <Screen {...this.props} className={classNames}>
      </Screen>
    );
  }
}
