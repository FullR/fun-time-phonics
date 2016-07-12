import React from "react";
import cn from "util/cn";
import pureUpdate from "pure-update";
require("./style.scss");

export default class SoundWave extends React.Component {
  static propTypes = {
    active: React.PropTypes.bool,
    hidden: React.PropTypes.bool
  };

  static defaultProps = {
    active: false,
    hidden: false
  };

  shouldComponentUpdate = pureUpdate;

  render() {
    const {active, hidden, className} = this.props;
    const classNames = cn(
      "Sound-wave",
      active ? `Sound-wave--active` : null,
      hidden ? `Sound-wave--hidden` : null,
      className
    );

    return (
      <div {...this.props} className={classNames} hidden={null}/>
    );
  }
}
