import level from "level";
import Lesson from "./lesson";
import Activity from "./activity";
import Response from "./response";
import activities from "./activities";

export default level({
  id: "2",
  Lesson,
  Activity,
  Response,
  activities,
  levelProps: {
    title: "Ending Sounds"
  }
});
