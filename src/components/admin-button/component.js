import React from "react";
import LockLink from "../lock-link";
import store from "store";
import actions from "store/actions";
import cn from "util/cn";

export default class AdminButton extends React.Component {
  render() {
    const {className} = this.props;
    const classNames = cn("Admin-button", className);

    return (
      <LockLink {...this.props}
        className={classNames}
        onClick={store.dispatch.bind(store, {type: actions.CHANGE_ROUTE, route: "admin"})}
      >
        Admin/Score
      </LockLink>
    );
  }
}
