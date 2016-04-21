import React from "react";
import cn from "util/cn";

export function LessonSubTitle(props) {
  const classNames = cn("Lesson-title__sub-title", props.className);
  return (
    <div {...props} className={classNames}/>
  );
}

export default function LessonTitle(props) {
  const classNames = cn("Lesson-title", props.className);
  return (
    <div {...props} className={classNames}/>
  );
};

LessonTitle.SubTitle = LessonSubTitle;
