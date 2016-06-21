import React from "react";
import bembam from "bembam";

export default class UserList extends React.Component {
  render() {
    const {className} = this.props;
    const cn = bembam("User-list", className);

    return (
      <div {...this.props} className={cn}/>
    );
  }
}
