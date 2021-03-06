import level from "level";
import Lesson from "./lesson";
import Activity from "./activity";
import Response from "./response";
import Feedback from "./feedback";

/* Used in levels 15-19 */

export default ({id, activities, letter, lessonWords}) => level({
  id,
  Lesson,
  Activity,
  Response,
  Feedback,
  activities,
  levelProps: {
    letter,
    lessonWords,
    title: `Short Vowel "${letter}"`
  }
});
