import React from "react";
import Screen from "components/screen";
import Countdown from "components/countdown";
import Arrow from "components/arrow";
require("style/authscreen.scss");
const log = debug("tctc:authscreen");

export default class Authscreen extends React.Component {
  constructor(props) {
    super(props);
    this.updatePassword = this.updatePassword.bind(this);
    this.submit = this.submit.bind(this);
    this.timeout = this.timeout.bind(this);
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
      log("Correct password");
      this.props.onSuccess();
    } else {
      log("Incorrect password");
      this.props.onFail();
    }
  }

  timeout() {
    const {onTimeout, onFail} = this.props;
    log(`Ran out of time. Calling this.props.${onTimeout ? "onTimeout" : "onFail"}`);
    if(onTimeout) onTimeout();
    else onFail();
  }

  render() {
    const {password} = this.state;
    const {timeout, onTimeout, onFail} = this.props;

    return (
      <Screen className="Authscreen">
        <form onSubmit={this.submit}>
          <input type="text" value={password} onChange={this.updatePassword}/>
          <Arrow>Go</Arrow>
        </form>
        <div className="Authscreen__bottom">
          <Countdown className="Authscreen__timer" seconds={timeout} onComplete={onTimeout || onFail}/>
        </div>
      </Screen>
    );
  }
}

Authscreen.defaultProps = {
  correctPassword: "tea",
  onSuccess() { log("onSuccess is a no-op"); },
  onFail() { log("onFail is a no-op"); },
  onTimeout: null, // if not defined, onFail is used
  timeout: 15
};
