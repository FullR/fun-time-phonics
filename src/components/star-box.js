import React from "react";
import {extend} from "lodash";
import classNames from "util/class-names";
require("style/star-box.scss");

export default class StarBox extends React.Component {
  static defaultProps = {
    fill: false,
    large: false
  };

  render() {
    const {width, height, large, fill, style, boxSizing} = this.props;
    const className = classNames(this.props.className, "Star-box", {
      "Star-box--large": large
    });

    const s = extend({}, style || {}, {
      boxSizing, 
      width: fill ? "100%" : width, 
      height: fill ? "100%" : height
    });

    return (<div {...this.props} className={className} style={s}/>);
  }
}
