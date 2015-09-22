import React from "react";
import {extend} from "lodash";

export default function styleComponent(...styles) {
  return class extends React.Component {
    render() {
      const style = extend({}, ...styles, this.props.style || {});
      return <div {...this.props} style={style}/>
    }
  }
}
