import React from "react";
import cn from "util/cn";
import Screen from "components/screen";
import AdminButton from "components/admin-button";

export default class EndGameScreen extends React.Component {
  render() {
    const {className} = this.props;
    const classNames = cn("End-game-screen", className);

    return (
      <Screen {...this.props} className={classNames}>
        <h1 style={{textAlign: "center"}}>End of game screen (need to add some content)</h1>
        <AdminButton/>
      </Screen>
    );
  }
}
