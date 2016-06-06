import React from "react";
import cn from "util/cn";
import Screen from "components/screen";
import WebLink from "components/web-link";
import AdminButton from "components/admin-button";

export default class DemoEndGame extends React.Component {
  render() {
    const {className} = this.props;
    const classNames = cn("Demo-end-game", className);

    return (
      <Screen {...this.props} className={classNames}>
        <h1>You have completed all of the demo levels!</h1>
        <h2>To play the other 100 levels, purchase the full software at <WebLink href="http://www.criticalthinking.com/fun-time-phonics-series.html">http://www.criticalthinking.com/fun-time-phonics-series.html</WebLink>.</h2>
        <AdminButton/>
      </Screen>
    );
  }
}
