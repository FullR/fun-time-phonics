import React from "react";
import cn from "util/cn";

export default class {{pascalCase name}} extends React.Component {
  render() {
    const {className} = this.props;
    const classNames = cn("{{upperDashCase name}}", className);

    return (
      <div {...this.props} className={classNames}/>
    );
  }
}
