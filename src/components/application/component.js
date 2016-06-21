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
import Login from "components/login";
import Screen from "components/screen";
import LoadingScreen from "components/loading-screen";
import loadImage from "util/load-image";
import images from "images-to-preload";

import wait from "util/wait";

import WordResponse from "components/word-response";
const {Title} = WordResponse;

const minWidth = 900;

export default class Application extends React.Component {
  state = {
    storeState: store.getState(),
    invalidScreenSize: false,
    ignoreInvalidScreenSize: false,
    loaded: false,
    imagesLoaded: 0
  };

  showLogin(afterLoginRoute) {
    store.dispatch({
      type: actions.CHANGE_ROUTE,
      route: "login",
      routeProps: {afterLoginRoute}
    });
  }

  login() {
    const {routeProps} = this.state.storeState;
    store.dispatch({
      type: actions.CHANGE_ROUTE,
      route: routeProps.afterLoginRoute || "current-level"
    });
  }

  showLevel(levelId) {
    store.dispatch({
      levelId,
      type: actions.SHOW_LEVEL
    });
    if(this.state.noAdminAuth) {
      this.setState({noAdminAuth: false});
    }
  }

  componentDidMount() {
    this.unsub = store.subscribe(() => {
      this.setState({storeState: store.getState()});
    });

    window.addEventListener("resize", () => this.checkSize());
    this.checkSize();
    this.preload();
  }

  preload() {
    Promise.all(images.map((path) =>
      loadImage(path)
        .then(() => this.setState({imagesLoaded: this.state.imagesLoaded + 1}))
        .catch((error) => console.error(`Failed to preload image ${path}: ${error}`))
    ))
    .then(() => wait(500))
    .then(() => this.setState({loaded: true}));
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

  changeUser(userName) {
    store.dispatch({
      type: actions.CHANGE_USER,
      userName
    });
  }

  createUser(userName) {
    store.dispatch({
      type: actions.CREATE_USER,
      userName
    });
  }

  deleteUser(userName) {
    store.dispatch({
      type: actions.DELETE_USER,
      userName
    });
  }

  renderCurrent() {
    const {demo} = this.props;
    const {loaded, imagesLoaded, storeState} = this.state;
    const {route, routeProps, users, currentUserId} = storeState;
    const user = users[currentUserId];

    if(!loaded) {
      return (<LoadingScreen progress={imagesLoaded / images.length}/>);
    }

    const {currentLevelId, levels, requiredScore} = user || {};
    switch(route) {
      case "splash": return (
        <Splash
          onNext={this.showLogin.bind(this, "current-level")}
          demo={demo}
        />
      );
      case "login": return (
        <Login {...routeProps}
          users={Object.values(users).filter((user) => !!user)}
          currentUser={currentUserId}
          maxUserCount={demo ? 4 : 30}
          onSubmit={this.login.bind(this)}
          onSelectUser={this.changeUser.bind(this)}
          onCreateUser={this.createUser.bind(this)}
          onDeleteUser={this.deleteUser.bind(this)}
        />
      );
      case "admin": return (
        <Admin {...routeProps} {...storeState}
          user={user}
          onChangeUser={this.showLogin.bind(this, "admin")}
          onShowLevel={this.showLevel.bind(this)}
          demo={demo}
        />
      );
      case "current-level": {
        const levelData = levels.find((level) => level.id === currentLevelId);
        const LevelComponent = levelComponents[currentLevelId];

        if(demo && !demoLevels.includes(currentLevelId)) {
          return (<DemoEndGameScreen/>);
        }

        if(LevelComponent) {
          return (
            <LevelComponent {...routeProps} {...levelData}
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

  render() {
    const {invalidScreenSize, ignoreInvalidScreenSize} = this.state;
    const current = this.renderCurrent();

    return (
      <Screen>
        {invalidScreenSize && !ignoreInvalidScreenSize ?
          <InvalidWindowSizeScreen
            onClose={() => this.setState({ignoreInvalidScreenSize: true})}
          /> :
          null
        }
        {current}
      </Screen>
    );
  }
}
