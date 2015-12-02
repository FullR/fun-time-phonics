import React from "react";
import Button from "components/button";
import classNames from "util/class-names";
require("style/choice.scss");

export default class Choice extends React.Component {
  static defaultProps = {
    hidden: false,
    detached: false
  };

  render() {
    const {hidden, detached, selected, scalable, disabled} = this.props;
    const className = classNames(this.props.className, "Choice", {
      "Choice--hidden": hidden,
      "Choice--detached": detached,
      "Choice--scalable": scalable,
      "Choice--disabled": disabled
    });

    return (
      <div {...this.props} className={className}>
        {this.props.children}
      </div>
    );
  }
}
