import React from "react";
import classNames from "util/class-names";

export default function classComponent(...names) {
  return class ClassComponent extends React.Component {
    render() {
      const className = classNames(...names, this.props.className);
      return <div {...this.props} className={className}/>
    }
  }
}
