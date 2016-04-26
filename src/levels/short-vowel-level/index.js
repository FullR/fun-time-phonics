import level from "level";
import Lesson from "./lesson";
import Activity from "./activity";
import Response from "./response";
import Feedback from "./feedback";

/* Used in levels 8-12 */

export default ({id, activities, vowel, lessonWords}) => level({
  id,
  Lesson,
  Activity,
  Response,
  Feedback,
  activities,
  levelProps: {
    vowel,
    lessonWords
  }
});
