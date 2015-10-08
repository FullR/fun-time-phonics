import React from "react";
import classNames from "util/class-names";
require("style/admin/section-header.scss");

export default class SectionHeader extends React.Component {
  render() {
    const {title, letters, lessons} = this.props;
    const className = classNames(
      this.props.className,
      "Section-header"
    );
    return (
      <div className={className}>
        <div className="Section-header__title">{title}</div>
        {letters ? 
          <div className="Section-header__letters">{letters}</div>
          : null
        }
        <div className="Section-header__lessons">Lessons {lessons}</div>
      </div>
    );
  }
}
