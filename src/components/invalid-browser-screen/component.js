import React from "react";
import cn from "util/cn";
import Screen from "components/screen";

export default class InvalidBrowserScreen extends React.Component {
  render() {
    const {onClose, className} = this.props;
    const classNames = cn("Invalid-browser-screen", className);

    return (
      <Screen {...this.props} className={classNames}>
        <h1>This version of <i>Fun-Time Phonics!</i>™ will only work in Chrome or Edge, and your default browser is not either of these.&nbsp; Please switch to one of these browsers to play this app.&nbsp; We hope to have a new version of this demo out sometime in July that will be compatible with Internet Explorer (version 11), FireFox (version 47.0.1), and possibly Safari (version 9.1).</h1>
      </Screen>
    );
  }
}
