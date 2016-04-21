import React from "react";
import cn from "util/cn";
import Arrow from "components/arrow";

export default class LessonArrow extends React.Component {
  static defaultProps = {
    children: "Next"
  };

  render() {
    const {className} = this.props;
    const classNames = cn("Lesson-arrow", className);

    return (
      <Arrow {...this.props} className={classNames} size="large"/>
    );
  }
}
