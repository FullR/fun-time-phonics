import React from "react";
import cn from "util/cn";
import Box from "components/box";
import pureUpdate from "pure-update";

export default class SceneBar extends React.Component {
  shouldComponentUpdate = pureUpdate;

  render() {
    const {className} = this.props;
    const classNames = cn(
      "Scene-bar",
      `Scene-bar--count-${React.Children.count(this.props.children)}`,
      className
    );

    return (
      <Box {...this.props} className={classNames}/>
    );
  }
}
