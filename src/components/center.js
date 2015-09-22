import React from "react";
import classNames from "util/class-names";
require("style/center.scss");

export default class Center extends React.Component {
  render() {
    const className = classNames(this.props.className, "Center");
    return (
      <div {...this.props} className={className}>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

Center.VCenter = class VerticalCenter extends React.Component {
  render() {
    const className = classNames(this.props.className, "VerticalCenter");
    return (
      <div {...this.props} className={className}>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

Center.HCenter = class HorizontalCenter extends React.Component {
  render() {
    const className = classNames(this.props.className, "HorizontalCenter");
    return (
      <div {...this.props} className={className}>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}