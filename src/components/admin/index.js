import React from "react";
import {version} from "../../../package";
import Screen from "components/screen";
import AdminHeader from "components/admin-header";
import Arrow from "components/arrow";
import sections from "components/admin-sections";
import store from "store";
import actions from "store/actions";
import getLevelData from "store/helpers/get-level-data";
import LicenseScreen from "components/license-screen";
import OtherProductsScreen from "components/other-products-screen";
import AboutScreen from "components/about-screen";
import Authscreen from "components/authscreen";
require("./style.scss");

const level1SubLessons = ["m", "l", "n", "r", "g", "s"];
const level2SubLessons = ["d", "p", "k", "f", "m", "b"];

function getSection(levelId) {
  if(levelId.indexOf("-") !== -1) {
    levelId = levelId.split("-")[0];
  }
  levelId = parseInt(levelId);
  if(levelId <= 7) {
    return 0;
  } else if(levelId <= 14) {
    return 1;
  } else if(levelId <= 20) {
    return 2;
  } else if(levelId <= 43) {
    return 3;
  } else if(levelId <= 63) {
    return 4;
  } else if(levelId <= 88) {
    return 5;
  } else if(levelId <= 108) {
    return 6;
  } else if(levelId <= 122) {
    return 7;
  } else if(levelId <= 127) {
    return 8;
  } else {
    return 9;
  }
}

function getLevel(levelId) {
  try {
    return require("components/levels/" + levelId + "/index");
  } catch(error) {
    try {
      return require("components/levels/" + levelId);
    } catch(error) {
      return null;
    }
  }
}

function resetLevel(levelId) {
  store.dispatch({
    type: actions.RESET_LEVEL,
    levelId
  });
}

export default class Admin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authenticated: false,
      currentLevel: props.currentLevelId.split("-")[0],
      sectionIndex: getSection(props.currentLevelId),
      authenticated: false,
      infoScreen: null
    };
  }

  nextSection() {
    this.setState({sectionIndex: this.state.sectionIndex + 1});
  }

  prevSection() {
    this.setState({sectionIndex: this.state.sectionIndex - 1});
  }

  selectLevel(levelId) {
    clearInterval(this.pulseTimeout);
    this.setState({arrowPulse: true, currentLevel: levelId});
    this.pulseTimeout = setTimeout(() => this.setState({arrowPulse: false}), 3000);
  }

  showLicenseScreen() {
    this.showInfoScreen("license");
  }

  showOtherProductsScreen() {
    this.showInfoScreen("other-products");
  }

  showAboutScreen() {
    this.showInfoScreen("about");
  }

  showInfoScreen(infoScreen) {
    this.setState({infoScreen});
  }

  closeInfoScreen() {
    this.showInfoScreen(null);
  }

  componentWillUnmount() {
    clearInterval(this.pulseTimeout);
  }

  showLevel() {
    const {currentLevel} = this.state;
    const {complete} = getLevelData(this.props, currentLevel);
    const [parentLevelId] = currentLevel.split("-");

    if(complete) {
      if(parentLevelId === "1") {
        resetLevel("1");
        level1SubLessons.forEach((c) => resetLevel(`1-${c}`));
      } else if(parentLevelId === "2") {
        resetLevel("2");
        level2SubLessons.forEach((c) => resetLevel(`2-${c}`));
      } else {
        resetLevel(currentLevel);
      }
    }

    this.props.onShowLevel(currentLevel);
  }

  clearStorage() {
    store.dispatch({type: actions.RESET_PROGRESS});
    this.setState({
      currentLevel: "1",
      sectionIndex: 0
    });
  }

  render() {
    const {authenticated, sectionIndex, infoScreen, currentLevel, arrowPulse} = this.state;
    const Section = sections[sectionIndex];
    const NextSection = sections[sectionIndex + 1];
    const PrevSection = sections[sectionIndex - 1];
    let InfoScreen;

    if(!authenticated) return (
      <Authscreen
        onSuccess={() => this.setState({authenticated: true})}
        onFail={() => store.dispatch({type: actions.BACK_ROUTE})}
      />
    );

    switch(infoScreen) {
      case "license": InfoScreen = LicenseScreen; break;
      case "other-products": InfoScreen = OtherProductsScreen; break;
      case "about": InfoScreen = AboutScreen; break;
    }
    if(InfoScreen) return (<InfoScreen onBack={this.closeInfoScreen.bind(this)}/>);

    const levelData = getLevelData(this.props, currentLevel);
    const {title, lessons} = Section;
    let arrowText;
    let arrowStyle;

    if(levelData.complete) {
      arrowText = (<span>Replay Lesson<br/>{currentLevel}</span>);
      arrowStyle = {fontSize: 24};
    } else if(levelData.started) {
      arrowText = `Return to Lesson ${currentLevel}`;
      arrowStyle = {fontSize: 20};
    } else {
      arrowText = `Play Lesson ${currentLevel}`;
      arrowStyle = {fontSize: 26};
    }

    const level = (levelId) => ({
      selected: levelId === currentLevel,
      onClick: this.selectLevel.bind(this, levelId)
    });

    return (
      <Screen className="Admin">
        <AdminHeader>
          <div className="Admin__header-button" onClick={this.showOtherProductsScreen.bind(this)}>Other Products</div>
          <div className="Admin__header-button" onClick={this.showLicenseScreen.bind(this)}>License Agreement</div>
          <div className="Admin__header-button" onClick={this.showAboutScreen.bind(this)}>About</div>
          <div className="Admin__header-button" onClick={this.clearStorage.bind(this)}>Clear Data</div>
        </AdminHeader>
        <div className="Admin__content">
          <div className="Admin__section-box">
            <div className="Admin__nav">
              <div className="Admin__section-title">{title}</div>
              <div className="Admin__arrows">
                {PrevSection ?
                  <Arrow onClick={this.prevSection.bind(this)} size="very-small" color="blue" flipped>{PrevSection.lessons}</Arrow> :
                  <Arrow size="very-small" color="blue" hidden reversed/>
                }
                <div className="Admin__lesson-numbers">Lessons {lessons}</div>
                {NextSection ?
                  <Arrow onClick={this.nextSection.bind(this)} size="very-small" color="blue">{NextSection.lessons}</Arrow> :
                  <Arrow size="very-small" color="blue" hidden/>
                }
              </div>
            </div>
            <div className="Admin__section">
              <Section level={level} currentLevel={currentLevel} onSelectLevel={this.selectLevel.bind(this)}/>
            </div>
          </div>
          <div className="Admin__arrow-box">
            <Arrow className="Admin__continue-arrow" style={arrowStyle} size="large" onClick={this.showLevel.bind(this)} pulsing={arrowPulse}>
              {arrowText}
            </Arrow>
          </div>
        </div>
      </Screen>
    );
  }
}
