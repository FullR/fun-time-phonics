import React from "react";
import Activity from "../activity";

export default class extends React.Component {
  render() {
    return (
      <Activity {...this.props}
        wordsOnly={true}
        words={["bug", "ten", "car"]}
        correctIndex={1}
      />
    );
  }
}
