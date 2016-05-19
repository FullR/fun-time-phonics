import React from "react";
import Box from "components/box";
import cn from "util/cn";

export default class SceneContent extends React.Component {
  render() {
    const {children, className} = this.props;
    const classNames = cn("Scene-content", className);

    return (
      <Box {...this.props} className={classNames}/>
    );
  }
}
