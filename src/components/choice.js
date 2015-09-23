import React from "react";
import Button from "components/button";
import classNames from "util/class-names";
require("style/choice.scss");

export default class Choice extends React.Component {
  render() {
    const {hidden, detached, padding} = this.props;
    const className = classNames(this.props.className, "Choice", {
      "Choice--hidden": hidden,
      "Choice--detached": detached
    });

    return (
      <div {...this.props} className={className}>
        {this.props.children}
      </div>
    );
  }
}

Choice.defaultProps = {
  hidden: false,
  detached: false,
  padding: "5%"
};
