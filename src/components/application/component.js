import React from "react";
import getViewport from "util/get-viewport";
import Splash from "components/splash";
import Admin from "components/admin";
import DemoEndGameScreen from "components/demo-end-game";
import store from "store";
import actions from "store/actions";
import storeListener from "decorators/store-listener";
import levelComponents from "levels";
import demoLevels from "demo-levels";
import InvalidWindowSizeScreen from "components/invalid-window-size-screen";

import WordResponse from "components/word-response";
const {Title} = WordResponse;

const minWidth = 900;

export default class Application extends React.Component {
  state = {
    storeState: store.getState(),
    invalidScreenSize: false,
    ignoreInvalidScreenSize: false
  };

  hideSplash() {
    store.dispatch({
      type: actions.CHANGE_ROUTE,
      route: "current-level"
    });
  }

  showLevel(levelId) {
    store.dispatch({
      levelId,
      type: actions.SHOW_LEVEL
    });
  }

  componentDidMount() {
    this.unsub = store.subscribe(() => {
      this.setState({storeState: store.getState()});
    });

    window.addEventListener("resize", () => this.checkSize());
    this.checkSize();
  }

  componentWillUnmount() {
    if(this.unsub) {
      this.unsub();
      this.unsub = null;
    }
  }

  checkSize() {
    const {width} = getViewport();
    this.setState({invalidScreenSize: width < minWidth});
  }

  render() {
    const {demo} = this.props;
    const {storeState, invalidScreenSize, ignoreInvalidScreenSize} = this.state;
    const {route, currentLevelId, levels, requiredScore} = storeState;

    if(invalidScreenSize && !ignoreInvalidScreenSize) {
      return (
        <InvalidWindowSizeScreen
          onClose={() => this.setState({ignoreInvalidScreenSize: true})}
        />
      );
    }

    switch(route) {
      case "splash": return (<Splash onNext={this.hideSplash.bind(this)} demo={demo}/>);
      case "admin": return (<Admin {...storeState} onShowLevel={this.showLevel.bind(this)} demo={demo}/>);
      case "current-level": {
        const levelData = levels.find((level) => level.id === currentLevelId);
        const LevelComponent = levelComponents[currentLevelId];

        if(demo && !demoLevels.includes(currentLevelId)) {
          return (<DemoEndGameScreen/>);
        }

        if(LevelComponent) {
          return (
            <LevelComponent {...levelData}
              key={currentLevelId}
              requiredScore={requiredScore}
              onNext={() => store.dispatch({
                type: actions.COMPLETE_LEVEL,
                levelId: currentLevelId
              })}
            />
          );
        }
      }
    }

    console.error(`No route with id ${route}`);
    return null;
  }
}
