import React from "react";
import cn from "util/cn";
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

  render() {
    const {active, hidden, className} = this.props;
    const classNames = cn(
      "Sound-wave",
      active ? `Sound-wave--active` : null,
      hidden ? `Sound-wave--hidden` : null,
      className
    );

    return (
      <div {...this.props} className={classNames}/>
    );
  }
}
