import level from "level";
import Activity from "./activity";
import Response from "./response";
import Feedback from "./feedback";
import activities from "./activities";

export default level({
  id: "126",
  Activity,
  Response,
  Feedback,
  activities,
  levelProps: {
    title: "Reading for Meaning"
  }
});
