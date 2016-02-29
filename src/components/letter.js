import React from "react";
import classNames from "util/class-names";
require("style/letter.scss");

export default class Letter extends React.Component {
  static defaultProps = {
    letter: "",
    highlighted: false
  };

  render() {
    const {width, height, letter, highlighted} = this.props;
    const className = classNames(this.props.className, "Letter", {
      "Letter--highlighted": highlighted
    });
    const style = {
      width, height, display: "inline-block",
      ...this.props.style
    };

    return (<span {...this.props} style={style} className={className}/>);
  }
}
