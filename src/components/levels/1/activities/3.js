import React from "react";
import Activity from "../activity";

export default class extends React.Component {
  render() {
    return (
      <Activity {...this.props}
        wordsOnly={true}
        words={["wet", "pet", "toys"]}
        correctIndex={2}
      />
    );
  }
}
