import React from "react";
import {noop} from "lodash";
import bembam from "bembam";
import Screen from "components/screen";
import Countdown from "components/countdown";
import Arrow from "components/arrow";
import pureUpdate from "pure-update";
import {isCordova} from "util/detect-platform";
require("./style.scss");

export default class Authscreen extends React.Component {
  static defaultProps = {
    correctPassword: "tea",
    timeout: 15, // seconds
    onSuccess: noop,
    onFail: noop,
    onTimeout: null // if not defined, onFail is used
  };

  shouldComponentUpdate = pureUpdate;

  constructor(props) {
    super(props);
    this.state = {
      password: ""
    };
  }

  updatePassword(event) {
    this.setState({
      password: event.target.value
    });
  }

  submit(event) {
    event.preventDefault();
    if(this.state.password.toLowerCase() === this.props.correctPassword) {
      this.props.onSuccess();
    } else {
      this.props.onFail();
    }
  }

  timeout() {
    const {onTimeout, onFail} = this.props;
    if(onTimeout) onTimeout();
    else onFail();
  }

  componentDidMount() {
    if(!isCordova()) { // don't autofocus on mobile
      this.refs.passwordInput.focus();
    }
  }

  render() {
    const {password} = this.state;
    const {timeout, onTimeout, onFail, isMobile, className} = this.props;
    const cn = bembam("Authscreen", className);
    const DesktopOnlyLineBreak = isMobile ? (() => <span> </span>) : (() => <br/>);
    return (
      <Screen className={cn.toString()}>
        <div className={cn.el("instructions")}>
          <span>Enter the first three letters of the word</span><DesktopOnlyLineBreak/><span className={cn.el("password-quotes")}>"<span className={cn.el("password")}>tea</span>cher"</span><br/>
          <span>in the box and select Go to enter the Admin/Score screen.</span>
        </div>

        <form onSubmit={::this.submit}>
          <input ref="passwordInput" type="text" value={password} onChange={::this.updatePassword}/>
          <Arrow onClick={::this.submit}>Go</Arrow>
        </form>
        <div className={cn.el("bottom")}>
          <Countdown className={cn.el("timer")} seconds={timeout} onComplete={onTimeout || onFail}/>
        </div>
      </Screen>
    );
  }
}
