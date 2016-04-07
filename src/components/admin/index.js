import React from "react";
import hasher from "hasher";
import {version} from "../../../package";
import storage from "storage";
import Screen from "components/screen";
import AdminHeader from "components/admin-header";
import Arrow from "components/arrow";
import sections from "components/admin-sections";
import Authscreen from "components/authscreen";
require("./style.scss");

const level1SubLessons = ["m", "l", "n", "r", "g", "s"];
const level2SubLessons = ["d", "p", "k", "f", "m", "b"];

function getSection(levelId) {
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

function getLevelData(levelId) {
  return storage.get(`level-${levelId}`) || {highscore: -1, showingLesson: true};
}

function resetLevel(levelId) {
  const namespace = `level-${levelId}`;
  const state = {
    ...storage.get(namespace),
    activityIndex: 0,
    showingLesson: true,
    score: 0,
    activitiesComplete: false,
    currentAnswer: null,
    arrowPulse: false
  };

  storage.set(namespace, state);
}

export default class Admin extends React.Component {
  constructor(props) {
    super(props);
    const globalStorage = storage.get("global") || {lastLevel: "1"};
    this.state = {
      currentLevel: globalStorage.lastLevel,
      sectionIndex: getSection(globalStorage.lastLevel),
      authenticated: false
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

  componentWillUnmount() {
    clearInterval(this.pulseTimeout);
  }

  showLevel() {
    const {currentLevel} = this.state;
    const {activitiesComplete} = getLevelData(currentLevel);
    const [parentLevelId] = currentLevel.split("-");

    if(activitiesComplete) {
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

    hasher.setHash(`level/${currentLevel}`);
  }

  clearStorage() {
    storage.clear();
    storage.set("version", version);
    this.setState({
      currentLevel: "1",
      sectionIndex: 0
    });
  }

  render() {
    const {sectionIndex, currentLevel, authenticated, arrowPulse} = this.state;
    const Section = sections[sectionIndex];
    const NextSection = sections[sectionIndex + 1];
    const PrevSection = sections[sectionIndex - 1];

    if(!authenticated) return (
      <Authscreen
        onSuccess={() => this.setState({authenticated: true})}
        onFail={() => this.props.router.back()}
      />
    );

    const lessonData = getLevelData(currentLevel);
    const {title, lessons} = Section;
    let arrowText;
    let arrowStyle;

    if(lessonData.activitiesComplete) {
      arrowText = (<span>Replay Lesson<br/>{currentLevel}</span>);
      arrowStyle = {fontSize: 24};
    } else if(lessonData.activityIndex) {
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
          <div onClick={this.clearStorage.bind(this)} className="Admin__clear-button">Clear Data</div>
        </AdminHeader>
        <div className="Admin__content">
          <div className="Admin__section-box">
            <div className="Admin__nav">
              <div className="Admin__section-title">{title}</div>

              <div className="Admin__arrows">
                {PrevSection ?
                  <Arrow onClick={this.prevSection.bind(this)} size="small" color="blue" reversed>{PrevSection.lessons}</Arrow> :
                  <Arrow size="small" color="blue" hidden reversed/>
                }
                <div className="Admin__lesson-numbers">Lessons {lessons}</div>
                {NextSection ?
                  <Arrow onClick={this.nextSection.bind(this)} size="small" color="blue">{NextSection.lessons}</Arrow> :
                  <Arrow size="small" color="blue" hidden/>
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
