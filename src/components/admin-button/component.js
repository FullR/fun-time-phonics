import React from "react";
import LockLink from "../lock-link";
import store from "store";
import actions from "store/actions";
import cn from "util/cn";

export default class AdminButton extends React.Component {
  onClick(event) {
    const {onClick} = this.props;
    if(onClick) { // allow custom onClick
      onClick(event);
    } else {
      store.dispatch({
        type: actions.CHANGE_ROUTE,
        route: "admin"
      });
    }
  }

  render() {
    const {className} = this.props;
    const classNames = cn("Admin-button", className);

    return (
      <LockLink {...this.props}
        className={classNames}
        onClick={this.onClick.bind(this)}
      >
        Admin/Score
      </LockLink>
    );
  }
}
