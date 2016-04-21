import React from "react";
import {throttle} from "lodash";
import getWindowDims from "util/get-window-dims";

function getState() {
  return {window: getWindowDims()};
}

export default (Wrapped) => class WindowListener extends React.Component {
  constructor(props) {
    super(props);
    this.onResize = throttle(this.onResize.bind(this), 100, {leading: true, trailing: true});
    this.state = getState();
  }

  onResize() {
    this.setState(getState());
  }

  componentDidMount() {
    window.addEventListener("resize", this.onResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize);
  }

  render() {
    return (<Wrapped {...this.props} {...this.state}/>);
  }
}
