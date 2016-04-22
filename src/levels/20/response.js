import React from "react";
import ResponseType1 from "./response-type-1";
import ResponseType2 from "./response-type-2";

export default function Response(props) {
  return props.activityType === 1 ?
    (<ResponseType1 {...props}/>) :
    (<ResponseType2 {...props}/>);
}
