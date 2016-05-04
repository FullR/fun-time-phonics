import level from "level";
import Lesson from "./lesson";
import Activity from "./activity";
import Response from "./response";
import Feedback from "./feedback";
import activities from "./activities";

export default level({
  id: "120",
  Lesson,
  Activity,
  Response,
  Feedback,
  activities,
  levelProps: {
    title: "Consonant \"z\" With Short Vowels"
  }
});
