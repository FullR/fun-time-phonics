import React from "react";
import cn from "util/cn";
import Box from "components/box";
import pureUpdate from "pure-update";

export default class SceneItem extends React.Component {
  shouldComponentUpdate = pureUpdate;

  render() {
    const {className} = this.props;
    const classNames = cn("Scene-item", className);

    return (
      <Box {...this.props} className={classNames}/>
    );
  }
}
