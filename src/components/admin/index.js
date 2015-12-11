import React from "react";
import hasher from "hasher";
import {Authscreen, Screen} from "components";
import {extendState} from "util/state";
import sections from "./sections";
import Arrow from "components/arrow";
import storage from "storage";

const log = debug("tctc:admin");

require("style/admin/index.scss");
require("style/admin/sections/1.scss");
require("style/admin/sections/2.scss");
require("style/admin/sections/3.scss");
require("style/admin/sections/4.scss");

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
  return storage.get(`level-${levelId}`) || {highscore: -1, showingLesson: true}
}

function resetLevel(levelId) {
  const namespace = `level-${levelId}`;
  const state = Object.assign({}, storage.get(namespace), {
    activityIndex: 0,
    showingLesson: true,
    score: 0,
    activitiesComplete: false
  });
  storage.set(namespace, state);
}

export default class Admin extends React.Component {
  constructor(props) {
    super(props);
    const globalStorage = storage.get("global") || {lastLevel: "1"};
    this.state = {
      authenticated: false,
      sectionIndex: getSection(globalStorage.lastLevel),
      selectedLevel: globalStorage.lastLevel
    };
  }

  onLoginFail() {
    this.props.router.back();
  }

  login() {
    this.setState({
      authenticated: true
    });
  }

  setSection(sectionIndex) {
    if(sectionIndex >= 0 && sectionIndex < sections.length) {
      log(`Showing section ${sectionIndex}`);
      this.setState({sectionIndex});
    }
  }

  nextSection() {
    this.setSection(this.state.sectionIndex + 1);
  }

  previousSection() {
    this.setSection(this.state.sectionIndex - 1);
  }

  selectLevel(lessonId) {
    this.setState({selectedLevel: lessonId});
  }

  showLevel() {
    const {selectedLevel} = this.state;
    const {activitiesComplete} = getLevelData(selectedLevel);
    if(activitiesComplete) {
      resetLevel(selectedLevel);
    }
    hasher.setHash(`level/${selectedLevel}`);
  }

  render() {
    const {authenticated, sectionIndex, selectedLevel} = this.state;
    const Section = sections[sectionIndex] || sections[0];
    const lessonData = getLevelData(selectedLevel);
    let arrowText;

    if(!authenticated) {
      return (
        <Authscreen onSuccess={::this.login} onFail={::this.onLoginFail}/>
      );
    }

    if(lessonData.activitiesComplete) {
      arrowText = `Replay Lesson ${selectedLevel}`;
    } else if(lessonData.activityIndex) {
      arrowText = `Return to Lesson ${selectedLevel}`;
    } else {
      arrowText = `Play Lesson ${selectedLevel}`;
    }

    return (
      <div className="admin">
        <div className="admin__header">
          <ul className="admin__header-nav">
            <li className="admin__header-nav-item">User</li>
            <li className="admin__header-nav-item">Restart</li>
            <li className="admin__header-nav-item">About</li>
          </ul>
          <span className="admin__header-title">Fun-Time Phonics{String.fromCharCode(8482)} Admin/Score</span>
          <span className="admin__header-grades">PreK - 2</span>
        </div>

        <div className="admin__content">
          <div className="admin__current-section">
            <Section onNext={::this.nextSection} onBack={::this.previousSection} onSelectLevel={::this.selectLevel} selectedLevel={selectedLevel}/>
          </div>
          <Arrow className="admin__back-button" onClick={::this.showLevel}>
            {arrowText}
          </Arrow>
        </div>
      </div>
    );
  }
}
