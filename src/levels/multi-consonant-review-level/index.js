import React from "react";
import level from "level";
import LessonComponent from "./lesson";
import Activity from "./activity";
import Response from "./response";
import Feedback from "./feedback";

export default ({
  id,
  activities,
  letter,
  Lesson=LessonComponent,
  title=`Consonants "b"-"${letter}" With Short Vowels`
}) => level({
  id,
  Lesson,
  Activity,
  Response,
  Feedback,
  activities,
  levelProps: {
    letter,
    title,
    Title() {
      return (<span>Consonants "b"-"{letter}<span style={{marginLeft: 3}}>"</span> With Short Vowels</span>)
    }
  }
});
