import React from "react";
import Screen from "components/screen";
import Countdown from "components/countdown";
import Arrow from "components/arrow";
require("style/authscreen.scss");
const log = debug("tctc:authscreen");
const noop = () => {};

export default class Authscreen extends React.Component {
  static defaultProps = {
    correctPassword: "tea",
    timeout: 15, // seconds
    onSuccess: noop,
    onFail: noop,
    onTimeout: null // if not defined, onFail is used
  };

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

