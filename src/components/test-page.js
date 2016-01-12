import React from "react";
import LevelFeedback from "components/level-feedback";

export default class TestPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <LevelFeedback score={2} total={25}/>
    );
  }
}
