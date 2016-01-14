import React from "react";
import Screen from "components/screen";
import Corner from "components/corner";
import Center from "components/center";
import Teacher from "components/teacher";
import AdminLink from "components/admin-link";
import Owl from "components/owl";
import RobotActor from "components/robot-actor";
import classNames from "util/class-names";

require("style/game-screen.scss");

export default class GameScreen extends React.Component {
  render() {
    const {teacher, owl, onTeacherClick, onOwlClick} = this.props;
    const className = classNames(this.props.className, "Game-screen");
    let owlComponent;
    let teacherComponent;

    if(owl) {
      owlComponent = (
        <RobotActor {...owl}
          key="owl"
          type="boy"
          size={owl.centered ? "large" : "small"}
          onClick={onOwlClick}
        />
      );
    } else {
      owlComponent = null;
    }

    if(teacher) {
      teacherComponent = (
        <RobotActor {...teacher}
          key="teacher"
          type="girl"
          size={teacher.centered ? "large" : "small"}
          onClick={onTeacherClick}
        />
      );
    } else {
      teacherComponent = null;
    }

    return (
      <Screen {...this.props} className={className}>
        {this.props.children}
        {owlComponent}
        {teacherComponent}

        <AdminLink/>
      </Screen>
    );
  }
}
