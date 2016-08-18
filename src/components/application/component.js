import React from "react";
import {isCordova, isElectron} from "util/detect-platform";
import browser from "detect-browser";
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
import InvalidBrowserScreen from "components/invalid-browser-screen";
import Login from "components/login";
import Screen from "components/screen";
import LoadingScreen from "components/loading-screen";
import loadImage from "util/load-image";
import images from "images-to-preload";
import wait from "util/wait";
import CustomDragLayer from "components/custom-drag-layer";
import dndContext from "dnd-context";
import WordResponse from "components/word-response";

// import AdminMobile from "components/admin-mobile";

const {Title} = WordResponse;
const preloadDivStyle = {position: "absolute", left: "-100%", height: 0, width: 0, overflow: "hidden"};
const validBrowser = (isCordova() || isElectron()) || ["chrome", "edge"].includes(browser.name);

@dndContext
export default class Application extends React.Component {
  static defaultProps = {
    minWindowWidth: 0
  };

  state = {
    storeState: store.getState(),
    invalidScreenSize: false,
    ignoreInvalidScreenSize: false,
    loaded: false,
    imagesLoaded: 0
  };

  isLoggedIn() {
    const {users, currentUserId} = this.state.storeState;
    return users.hasOwnProperty(currentUserId);
  }

  componentDidMount() {
    this.unsub = store.subscribe(() => {
      this.setState({storeState: store.getState()});
    });

    if(this.props.minWindowWidth) {
      window.addEventListener("resize", () => this.checkSize());
      this.checkSize();
    }
    this.preload();
  }

  preload() {
    Promise.all(images.map((path) =>
      loadImage(path)
        .then(() => this.setState({imagesLoaded: this.state.imagesLoaded + 1}))
        .catch((error) => console.error(`Failed to preload image ${path}: ${error}`))
    ))
    .then(() => wait(500)) // "the loading screen is too fast"
    .then(() => this.setState({loaded: true}));
  }

  componentWillUnmount() {
    if(this.unsub) {
      this.unsub();
      this.unsub = null;
    }
  }

  checkSize() {
    const {minWindowWidth} = this.props;
    const {width} = getViewport();
    this.setState({invalidScreenSize: width < minWindowWidth});
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

  login(nextRoute) {
    if(this.isLoggedIn()) {
      store.dispatch({
        route: nextRoute,
        type: actions.CHANGE_ROUTE
      });
    }
  }

  showLevel(levelId) {
    store.dispatch({
      levelId,
      type: actions.SHOW_LEVEL
    });
  }

  showLogin(nextRoute) {
    store.dispatch({
      route: `login/${nextRoute}`,
      type: actions.CHANGE_ROUTE
    });
  }

  showAdmin() {
    this.showLogin("admin-no-auth");
  }

  begin() {
    if(!this.state.storeState.currentUserId) {
      this.showLogin("current-level");
    } else {
      store.dispatch({
        route: "current-level",
        type: actions.CHANGE_ROUTE
      })
    }
  }

  renderCurrent() {
    //return (<AdminMobile/>);
    const {demo} = this.props;
    const {loaded, imagesLoaded, storeState} = this.state;
    const {users, userNames, currentUserId} = storeState;
    const user = users[currentUserId];
    const [route, ...params] = storeState.route.split("/");

    if(!loaded) {
      return (
        <LoadingScreen progress={imagesLoaded / images.length}>
          <div style={preloadDivStyle}>
            {images.map((src) =>
              <div key={src} style={{backgroundImage: `url("${src}")`}}/>
            )}
          </div>
        </LoadingScreen>
      );
    }

    const {currentLevelId, levels, requiredScore} = user || {};

    switch(route) {
      case "splash": return (
        <Splash
          onNext={this.begin.bind(this)}
          demo={demo}
          adminButtonHidden={!user}
          userName={user ? user.name : ""}
        />
      );
      case "admin": return (
        <Admin {...storeState}
          params={params}
          user={user}
          onChangeUser={this.showLogin.bind(this, "admin-no-auth")}
          onShowLevel={this.showLevel.bind(this)}
          demo={demo}
        />
      );
      case "admin-no-auth": return (
        <Admin {...storeState}
          params={params}
          user={user}
          onChangeUser={this.showLogin.bind(this, "admin-no-auth")}
          onShowLevel={this.showLevel.bind(this)}
          demo={demo}
          noAuth
        />
      );
      case "login": return (
        <Login
          users={Object.values(users).filter((user) => !!user)}
          userIndex={users}
          userNames={userNames}
          currentUser={currentUserId}
          maxUserCount={demo ? 4 : (isCordova() ? 5 : 30)}
          onSubmit={this.login.bind(this, params[0] || "current-level")}
          onSelectUser={this.changeUser.bind(this)}
          onCreateUser={this.createUser.bind(this)}
          onDeleteUser={this.deleteUser.bind(this)}
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
            <LevelComponent {...levelData}
              key={currentLevelId}
              currentUserId={currentUserId}
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
    //if(!validBrowser) return (<InvalidBrowserScreen/>);
    const {invalidScreenSize, ignoreInvalidScreenSize} = this.state;
    const current = this.renderCurrent();

    return (
      <Screen className={isCordova() ? "hover-disabled" : "hover-enabled"}>
        {invalidScreenSize && !ignoreInvalidScreenSize ?
          <InvalidWindowSizeScreen
            onClose={() => this.setState({ignoreInvalidScreenSize: true})}
          /> :
          null
        }
        {current}
        <CustomDragLayer/>
      </Screen>
    );
  }
}
