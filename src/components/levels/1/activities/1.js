import React from "react";
import Activity from "../activity";

export default class extends React.Component {
  render() {
    return (
      <Activity {...this.props}
        words={["top", "pig", "hen"]}
        correctIndex={0}
      />
    );
  }
}
