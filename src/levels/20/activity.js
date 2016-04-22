import React from "react";
import ActivityType1 from "./activity-type-1";
import ActivityType2 from "./activity-type-2";

export default function Activity(props) {
  return props.activityType === 1 ?
    (<ActivityType1 {...props}/>) :
    (<ActivityType2 {...props}/>);
}
