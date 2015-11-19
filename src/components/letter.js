import React from "react";
import classNames from "util/class-names";
require("style/letter.scss");

export default class Letter extends React.Component {
  static defaultProps = {
    letter: "",
    highlighted: false
  };

  render() {
    const {letter, highlighted} = this.props;
    const className = classNames(this.props.className, "Letter", {
      "Letter--highlighted": highlighted
    });

    return (<span {...this.props} className={className}/>);
  }
}
