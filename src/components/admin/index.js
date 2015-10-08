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

export default class Admin extends React.Component {
  constructor(props) {
    super(props);
    const globalStorage = storage.get("global") || {lastLevel: "1"};
    this.state = {
      authenticated: false,
      sectionIndex: 0,
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
    log(`Selected lesson: ${lessonId}`);
    this.setState({selectedLevel: lessonId});
  }

  showLevel() {
    hasher.setHash(`level/${this.state.selectedLevel}`);
  }

  render() {
    const {authenticated, sectionIndex, selectedLevel} = this.state;
    const Section = sections[sectionIndex] || sections[0];
    const lessonData = storage.get(`level-${selectedLevel}`) || {highscore: -1, showingLesson: true};
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
