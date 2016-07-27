import React from "react";
import cn from "util/cn";
import Screen from "components/screen";
import TctcLogo from "components/tctc-logo";

export default class LoadingScreen extends React.Component {
  render() {
    const {progress, className, children} = this.props;
    const classNames = cn("Loading-screen", className);

    return (
      <Screen className={classNames}>
        <div className="Loading-screen__logo"/>
        <div className="Loading-screen__progress-bar-container">
          <div className="Loading-screen__progress-bar" style={{width: `${progress * 100}%`}}/>
        </div>
        <div className="Loading-screen__text">
          Grades PreK-12+ Books and Software<br/>
          <span className="Loading-screen__sub-text">Reading • Writing • Math • Science • Social Studies</span>
        </div>
        {children}
      </Screen>
    );
  }
}
