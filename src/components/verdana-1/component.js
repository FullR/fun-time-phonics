import React from "react";
import cn from "util/cn";

export default class Verdana1 extends React.Component {
  static defaultProps = {
    scale: "80%"
  };

  render() {
    const {scale, className} = this.props;
    const classNames = cn("Verdana-1", className);

    return (
      <span {...this.props} className={classNames} style={{fontSize: scale}}>1</span>
    );
  }
}
