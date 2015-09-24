import React from "react";
import Screen from "components/screen";
import Corner from "components/corner";
import Center from "components/center";
import Teacher from "components/teacher";
import AdminLink from "components/admin-link";
import Owl from "components/owl";

export default class GameScreen extends React.Component {
  render() {
    const {teacher, owl} = this.props;
    let owlComponent;
    let teacherComponent;

    if(owl) {
      owlComponent = (<Owl {...owl} size={owl.centered ? "large" : "default"}/>);
    }
    if(teacher) {
      teacherComponent = (<Teacher {...teacher} size={teacher.centered ? "large" : "default"}/>);
    }

    return (
      <Screen {...this.props}>
        {owl && owl.centered ?
          <Center>
            {owlComponent}
          </Center> :
          <Corner top="1em" left="1em">
            {owlComponent}
          </Corner>
        }

        {teacher && teacher.centered ?
          <Center>
            {teacherComponent}
          </Center> :
          <Corner top="1em" right="1em">
            {teacherComponent}
          </Corner>
        }

        <AdminLink/>

        {this.props.children}
      </Screen>
    );
  }
}
