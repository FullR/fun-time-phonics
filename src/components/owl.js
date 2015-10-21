import React from "react";
import classNames from "util/class-names";
require("style/owl.scss");

export default class Owl extends React.Component {
  static defaultProps = {
    size: "default",
    speaking: false,
    animating: false
  };

  render() {
    const className = classNames("Owl", `Owl--size-${this.props.size}`, {
      "Owl--speaking": this.props.speaking,
      "Owl--speaking-animating": this.props.animating,
      "Owl--centered": this.props.centered
    });

    return (
      <div {...this.props} className={className}>
        <div className="Owl__content">
          <div className="Owl__image"/>
          <div className="Owl__text">{this.props.text}</div>
        </div>
      </div>
    );
  }
}
