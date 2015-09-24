import React from "react";
import {Authscreen, Screen} from "components";
import {extendState} from "util/state";
import bindMethods from "util/bind-methods";

export default class Admin extends React.Component {
  constructor(props) {
    super(props);
    bindMethods(this, "onLoginFail", "login");
    this.state = {
      authenticated: false
    };
  }

  onLoginFail() {
    this.props.router.back();
  }

  login() {
    extendState(this, {
      authenticated: true
    });
  }

  render() {
    const {authenticated} = this.state;
    if(!authenticated) {
      return (
        <Authscreen onSuccess={this.login} onFail={this.onLoginFail}/>
      );
    }

    return (
      <Screen>
        this is the admin screen
      </Screen>
    );
  }
}
