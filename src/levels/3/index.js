import React from "react";
import level from "level";
import Lesson from "./lesson";
import Activity from "./activity";
import Response from "./response";
import Feedback from "./feedback";
import activities from "./activities";

export default level({
  id: "3",
  Lesson,
  Activity,
  Response,
  Feedback,
  activities,
  levelProps: {
    title: "Beginning and Ending Sounds",
    Title: ({ending}) => ending ?
      <span>Beginning and <span style={{color: "#F00"}}>Ending</span> Sounds</span> :
      <span><span style={{color: "#00F"}}>Beginning</span> and Ending Sounds</span>
  }
});
