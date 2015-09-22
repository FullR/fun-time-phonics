import React from "react";
import classNames from "decorators/class-names";
require("style/screen.scss");

@classNames("Screen")
export default class Screen extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <div {...this.props} className={null}/>
      </div>
    );
  }
}
