import React from "react";
import classNames from "util/class-names";
require("style/admin/lesson-button.scss");

export default class LessonButton extends React.Component {
    static defaultProps = {
      onClick() {}
    };

    onClick(event) {
      event.preventDefault();
      event.stopPropagation();

      this.props.onClick(event);
    }

    render() {
      const {lessonId, selected} = this.props;
      const className = classNames(
        this.props.className,
        "Lesson-button",
        `Lesson-button-${lessonId}`,
        selected ? "Lesson-button--selected" : null
      );

      return (
        <div {...this.props} onClick={::this.onClick} className={className}>
          <div className="Lesson-button__index">{lessonId}</div>
          {this.props.children}
        </div>
      );
    }
}

LessonButton.Title = class LessonButtonTitle extends React.Component {
  render() {
    return (<div className="Lesson-button__title">{this.props.children}</div>);
  }
};
