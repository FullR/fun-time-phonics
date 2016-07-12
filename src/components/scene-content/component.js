import React from "react";
import Box from "components/box";
import cn from "util/cn";
import pureUpdate from "pure-update";

export default class SceneContent extends React.Component {
  shouldComponentUpdate = pureUpdate;

  render() {
    const {children, className} = this.props;
    const classNames = cn("Scene-content", className);

    return (
      <Box {...this.props} className={classNames}/>
    );
  }
}
