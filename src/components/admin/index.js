import React from "react";
import getViewport from "util/get-viewport";
import AdminMobile from "components/admin-mobile";
import AdminDesktop from "components/admin-desktop";

export default class Admin extends React.Component {
  state = {viewport: getViewport(), loggedIn: false};

  handleWindowResize = () => {
    this.setState({viewport: getViewport()});
  };

  handleLogin = () => {
    this.setState({loggedIn: true});
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowResize);
  }

  render() {
    const {props} = this;
    const {viewport, loggedIn} = this.state;
    const isMobile = viewport.width < 1024;
    const AdminComponent = (isMobile ? AdminMobile : AdminDesktop);

    return (<AdminComponent {...props} onLogin={this.handleLogin} noAuth={props.noAuth || loggedIn} isMobile={isMobile}/>);
  }
}
