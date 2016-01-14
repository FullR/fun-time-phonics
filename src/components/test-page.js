import React from "react";
import RobotActor from "components/robot-actor";
import Corner from "components/corner";

export default class TestPage extends React.Component {
  render() {
    return (
      <div>
        <Corner right={20} top={20}>
          <RobotActor type="boy" animating={false} size="small">Lesson</RobotActor>
        </Corner>
        <Corner left={20} top={20}>
          <RobotActor type="girl" animating={false} size="small">Lesson</RobotActor>
        </Corner>
      </div>
    );
  }
}
