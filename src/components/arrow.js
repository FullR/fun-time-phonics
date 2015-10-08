import React from "react";
import Button from "components/button";
import classNames from "util/class-names";
require("style/arrow.scss");

export default class Arrow extends React.Component {
  render() {
    const {size, color, reversed} = this.props;
    const className = classNames(
      this.props.className, 
      "Arrow", 
      size ? `Arrow--size-${size}` : null, 
      color ? `Arrow--color-${color}` : null,
      {"Arrow--reversed": reversed}
    );
    return (
      <Button {...this.props} cleared={true} className={className}>
        <div className="Arrow__content">
          <div className="Arrow__image"/>
          <div className="Arrow__text">{this.props.children}</div>
        </div>
      </Button>
    );
  }
}
