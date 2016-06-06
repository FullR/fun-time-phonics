import React from "react";
import cn from "util/cn";

export default class AdminButtonLetter extends React.Component {
  render() {
    const {size, className} = this.props;
    const classNames = cn(
      "Admin-button-letter",
      size ? `Admin-button-letter--size-${size}` : null,
      className
    );

    return (
      <span {...this.props} className={classNames}/>
    );
  }
}
