import React from "react";
import Screen from "components/screen";
import Corner from "components/corner";
import Center from "components/center";
import Teacher from "components/teacher";
import AdminLink from "components/admin-link";
import Owl from "components/owl";

export default class GameScreen extends React.Component {
  render() {
    const {teacher, owl, onTeacherClick, onOwlClick} = this.props;
    let owlComponent;
    let teacherComponent;

    if(owl) {
      owlComponent = (
        <Owl {...owl}
          key="owl"
          size={owl.centered ? "large" : "small"}
          onClick={onOwlClick}
        />
      );
    } else {
      owlComponent = null;
    }

    if(teacher) {
      teacherComponent = (
        <Teacher {...teacher}
          key="teacher"
          size={teacher.centered ? "large" : "small"}
          onClick={onTeacherClick}
        />
      );
    } else {
      teacherComponent = null;
    }

    return (
      <Screen {...this.props}>
        {this.props.children}
        {owlComponent}
        {teacherComponent}

        <AdminLink/>
      </Screen>
    );
  }
}
