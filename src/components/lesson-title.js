import React from "react";
import classNames from "util/class-names";
require("style/lesson-title.scss");

export default class LessonTitle extends React.Component {
  render() {
    const className = classNames(this.props.className, "Lesson-title");
    return (<div {...this.props} className={className}/>);
  }
}

LessonTitle.SubTitle = class SubTitle extends React.Component {
  render() {
    const className = classNames(this.props.className, "Lesson-sub-title");
    return (<div {...this.props} className={className}/>);
  }
}
