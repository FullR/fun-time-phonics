import React from "react";
import cn from "util/cn";

export default class Verdana1 extends React.Component {
  static defaultProps = {
    scale: "80%",
    color: "#666"
  };

  render() {
    const {scale, color, className} = this.props;
    const classNames = cn("Verdana-1", className);

    return (
      <span {...this.props} className={classNames} style={{fontSize: scale, color}}>1</span>
    );
  }
}
