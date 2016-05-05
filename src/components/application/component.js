import React from "react";
import Splash from "components/splash";
import Admin from "components/admin";
import EndGameScreen from "components/end-game-screen";
import store from "store";
import actions from "store/actions";
import storeListener from "decorators/store-listener";
import levelComponents from "levels";

import WordResponse from "components/word-response";
const {Title} = WordResponse;

export default class Application extends React.Component {
  state = {
    storeState: store.getState()
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
  }

  componentWillUnmount() {
    if(this.unsub) {
      this.unsub();
      this.unsub = null;
    }
  }

  render() {
    const {storeState} = this.state;
    const {route, currentLevelId, levels} = storeState;

    switch(route) {
      case "splash": return (<Splash onNext={this.hideSplash.bind(this)}/>);
      case "admin": return (<Admin {...storeState} onShowLevel={this.showLevel.bind(this)}/>);
      case "current-level": {
        const levelData = levels.find((level) => level.id === currentLevelId);
        const LevelComponent = levelComponents[currentLevelId];

        if(LevelComponent) {
          return (
            <LevelComponent {...levelData}
              key={currentLevelId}
              onNext={() => store.dispatch({
                type: actions.COMPLETE_LEVEL,
                levelId: currentLevelId
              })}
            />
          );
        } else {
          return (<EndGameScreen/>);
        }
      }
    }

    console.error(`No route with id ${route}`);
    return null;
  }
}
