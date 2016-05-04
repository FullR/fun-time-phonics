import level from "level";
import Lesson from "./lesson";
import Activity from "./activity";
import Response from "./response";
import Feedback from "./feedback";
import activities from "./activities";

export default level({
  id: "119",
  Lesson,
  Activity,
  Response,
  Feedback,
  activities,
  levelProps: {
    title: "Consonant \"y\" With Short Vowels"
  }
});
