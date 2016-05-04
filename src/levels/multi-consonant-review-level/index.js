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
  title=`Review Consonants "b"-"${letter}" With Short Vowels`
}) => level({
  id,
  Lesson,
  Activity,
  Response,
  Feedback,
  activities,
  levelProps: {
    letter,
    title
  }
});
