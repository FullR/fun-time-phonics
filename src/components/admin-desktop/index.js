import React from "react";
import bembam from "bembam";
import {version} from "../../../package";
import {isElectron, isCordova} from "util/detect-platform";
import demoLevels from "demo-levels";
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
import ConfirmModal from "components/confirm-modal";
import ChangeScoreModal from "components/change-score-modal";
import AdminPrintPage from "components/admin-print-page";
require("./style.scss");

const level1SubLessons = ["m", "l", "n", "r", "g", "s"];
const level2SubLessons = ["d", "p", "k", "f", "m", "b"];

// since level 1 needs to be displayed as 1-t and 2 as 2-t
// admin arrow is the only place this matters
function getLevelDisplayId(levelId) {
  switch(levelId) {
    case "1": return "1-t";
    case "2": return "2-t";
    default: return levelId;
  }
}

function getSection(levelId) {
  if(levelId.indexOf("-") !== -1) {
    levelId = levelId.split("-")[0];
  }
  levelId = parseInt(levelId);
  return sections.findIndex(({levelRange}) => levelId >= levelRange[0] && levelId <= levelRange[1])
}

function getLevel(levelId) {
  try {
    return require("levels/" + levelId + "/index");
  } catch(error) {
    try {
      return require("levels/" + levelId);
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
      currentLevel: props.demo && !demoLevels.includes(props.user.currentLevelId) ? "26" : props.user.currentLevelId,
      sectionIndex: getSection(props.user.currentLevelId),
      authenticated: !!props.noAuth,
      infoScreen: null,
      showingClearModal: false,
      showingChangeScoreModal: false
    };
  }

  handleLogin() {
    this.setState({authenticated: true});
    if(this.props.onLogin) {
      this.props.onLogin();
    }
  }

  nextSection() {
    this.setState({sectionIndex: this.state.sectionIndex + 1});
  }

  prevSection() {
    this.setState({sectionIndex: this.state.sectionIndex - 1});
  }

  selectLevel(levelId) {
    clearTimeout(this.pulseTimeout);
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
    if(!currentLevel) return;
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

  openChangeScoreModal() {
    this.setState({showingChangeScoreModal: true});
  }

  closeChangeScoreModal() {
    this.setState({showingChangeScoreModal: false});
  }

  setRequiredScore(requiredScore) {
    store.dispatch({type: actions.SET_REQUIRED_SCORE, requiredScore});
  }

  openClearModal() {
    this.setState({showingClearModal: true});
  }

  closeClearModal() {
    this.setState({showingClearModal: false});
  }

  clearStorage() {
    store.dispatch({type: actions.RESET_PROGRESS});
    this.setState({
      currentLevel: "1",
      sectionIndex: 0
    });
    this.closeClearModal();
  }

  print() {
    window.print();
  }

  exit() {
    if(isElectron()) {
      window.close();
    }
  }

  render() {
    const {user, onChangeUser, demo} = this.props;
    const {requiredScore} = this.props.user;
    const {authenticated, sectionIndex, infoScreen, currentLevel, arrowPulse, showingClearModal, showingChangeScoreModal} = this.state;
    const Section = sections[sectionIndex];
    const NextSection = sections[sectionIndex + 1];
    const PrevSection = sections[sectionIndex - 1];
    let InfoScreen;

    if(!authenticated) return (
      <Authscreen
        onSuccess={this.handleLogin.bind(this)}
        onFail={() => store.dispatch({type: actions.BACK_ROUTE})}
        isMobile={this.props.isMobile}
      />
    );

    switch(infoScreen) {
      case "license": InfoScreen = LicenseScreen; break;
      case "other-products": InfoScreen = OtherProductsScreen; break;
      case "about": InfoScreen = AboutScreen; break;
    }

    if(InfoScreen) {
      return (<InfoScreen onBack={this.closeInfoScreen.bind(this)}/>);
    }

    const levelData = getLevelData(this.props, currentLevel);
    const {title, levelRange, Description} = Section;
    let arrowText;
    let arrowStyle;

    if(levelData.complete) {
      arrowText = `Replay Lesson ${getLevelDisplayId(currentLevel)}`;
      arrowStyle = {fontSize: "91%"};
    } else if(levelData.started) {
      arrowText = `Return to Lesson ${getLevelDisplayId(currentLevel)}`;
      arrowStyle = {fontSize: "83%"};
    } else {
      arrowText = `Play Lesson ${getLevelDisplayId(currentLevel)}`;
      arrowStyle = {fontSize: "100%"};
    }

    const level = (levelId) => {
      const disabled = demo && !demoLevels.includes(levelId);
      const elementId = `Admin__level-button-${levelId}`; // used for button specific breakpoints
      if(disabled) {
        return {
          id: elementId,
          selected: false,
          onClick: null,
          disabled
        };
      } else {
        return {
          id: elementId,
          selected: levelId === currentLevel,
          onClick: this.selectLevel.bind(this, levelId),
          disabled
        };
      }
    };

    const className = bembam("Admin")
      .mod("next-arrow-hidden", !NextSection)
      .mod("prev-arrow-hidden", !PrevSection);

    return (
      <Screen className={className.toString()}>
        <AdminPrintPage className="Admin__print-page" user={user}/>
        <AdminHeader>
          <div className="Admin__header-left">
            <div className="Admin__header-button" onClick={this.showAboutScreen.bind(this)}>About</div>
            <div className="Admin__header-button" onClick={this.showOtherProductsScreen.bind(this)}>Other Products</div>
            <div className="Admin__header-button" onClick={this.showLicenseScreen.bind(this)}>License Agreement</div>
          </div>
          <div className="Admin__header-right">
            <div className="Admin__header-button" onClick={this.openClearModal.bind(this)}>Clear Data</div>
            <div className="Admin__header-button" onClick={this.openChangeScoreModal.bind(this)}>Success Percentage</div>
            <div className="Admin__header-button" onClick={onChangeUser}>
              Manage Users
              <div className="Admin__user-name">User:&nbsp;&nbsp;{user.name}</div>
            </div>
            {isCordova() ? null :
              <div className="Admin__header-button" onClick={this.print.bind(this)}>Print</div>
            }
            {isElectron() ?
              <div className="Admin__header-button" onClick={this.exit.bind(this)}>Exit</div> :
              null
            }
          </div>
        </AdminHeader>
        <div className="Admin__content">
          <div className="Admin__section-box">
            <div className="Admin__nav">
              <div className="Admin__arrows">
                <Arrow key="prev-arrow" onClick={this.prevSection.bind(this)} size="very-small" color="blue" flipped hidden={!PrevSection}>
                  <span style={{position: "relative", left: 3}}>Previous</span>
                </Arrow>
                <div className="Admin__lesson-numbers">Lessons <span className="Admin__lesson-number-range">{levelRange[0]}-{levelRange[1]}</span></div>
                <Arrow key="next-arrow" onClick={this.nextSection.bind(this)} size="very-small" color="blue" hidden={!NextSection}>
                  Next
                </Arrow>
              </div>
              <div className="Admin__section-title">{title}</div>
            </div>
            <div className={`Admin__section Admin__section-${sectionIndex + 1}`}>
              <div className="Admin__section-description">
                {Description ?
                  <Description/> :
                  null
                }
              </div>
              <Section level={level} currentLevel={currentLevel} onSelectLevel={this.selectLevel.bind(this)}/>
            </div>
          </div>
          <div className="Admin__arrow-box">
            <Arrow className="Admin__continue-arrow" style={arrowStyle} size="large" onClick={this.showLevel.bind(this)} pulsing={arrowPulse}>
              {arrowText}
            </Arrow>
          </div>
        </div>
        <ConfirmModal open={showingClearModal} onConfirm={this.clearStorage.bind(this)} onCancel={this.closeClearModal.bind(this)}>
          Are you sure you want to clear all data for this user?&nbsp; This action cannot be undone.
        </ConfirmModal>
        <ChangeScoreModal
          value={requiredScore}
          open={showingChangeScoreModal}
          onChange={this.setRequiredScore.bind(this)}
          onClose={this.closeChangeScoreModal.bind(this)}
        />
      </Screen>
    );
  }
}
