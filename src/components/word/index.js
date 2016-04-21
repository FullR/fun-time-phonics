import React from "react";
import cn from "util/cn";
require("./style.scss");

const requireWord = require.context("../../../images/words", false, /\.png$/);

export default class Word extends React.Component {
  static propTypes = {
    word: React.PropTypes.string.isRequired
  };

  render() {
    const {word, className, style} = this.props;
    const classNames = cn("Word", className);
    const imageUrl = requireWord("./" + word + ".png");
    const bgStyle = {backgroundImage: `url("${imageUrl}")`, ...style};

    return (
      <div {...this.props} style={bgStyle} className={classNames}/>
    );
  }
}
