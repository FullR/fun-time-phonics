import shallowCompare from "react-addons-shallow-compare";

export default function shouldPureComponentUpdate(nextProps, nextState) {
  return shallowCompare(this, nextProps, nextState);
}
