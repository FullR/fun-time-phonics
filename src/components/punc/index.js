import React from "react";

export default function Punc(props) {
  return (<span {...props}>{props.children}&nbsp;</span>);
}
