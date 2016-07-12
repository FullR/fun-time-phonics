import React from "react";
import cn from "util/cn";
import pureUpdate from "pure-update";

const images = {
  red: require("../../../images/balloons/red.png"),
  blue: require("../../../images/balloons/blue.png"),
  green: require("../../../images/balloons/green.png"),
  orange: require("../../../images/balloons/orange.png")
};

export default class Balloon extends React.Component {
  static propTypes = {
    color: React.PropTypes.oneOf(Object.keys(images)),
    duration: React.PropTypes.number
  };

  shouldComponentUpdate = pureUpdate;

  state = {destroyed: false};

  destroy() {
    this.setState({destroyed: true});
  }

  render() {
    if(this.state.destroyed) return null;

    const {left, right, color, duration, className} = this.props;
    const classNames = cn("Balloon", className);
    const src = images[color] || images.red;
    const style = {
      left, right,
      animationDuration: `${duration ? duration : 1 + (Math.random() * 3)}s`
    };

    return (
      <img src={src} className={classNames} style={style} onClick={this.destroy.bind(this)}/>
    );
  }
}
