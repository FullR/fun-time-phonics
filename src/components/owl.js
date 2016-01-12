import React from "react";
import classNames from "util/class-names";
require("style/owl.scss");

export default class Owl extends React.Component {
  static defaultProps = {
    size: "small",
    speaking: false,
    animating: false
  };

  render() {
    const {speaking, animating, centered, glowing, size, text} = this.props;
    const className = classNames("Owl", `Owl--size-${size}`, {
      "Owl--speaking": speaking,
      "Owl--animating": animating,
      "Owl--centered": centered,
      "Owl--glowing": glowing
    });

    return (
      <div {...this.props} className={className}>
        <div className="Owl__content">
          <div className="Owl__image"/>
          <div className="Owl__text">{text}</div>
        </div>
      </div>
    );
  }
}
