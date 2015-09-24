import React from "react";
import LockLink from "components/lock-link";
import Corner from "components/corner";

export default class AdminLink extends React.Component {
  render() {
    return (
      <Corner bottom={30} left={30}>
        <LockLink href="#admin">Admin</LockLink>
      </Corner>
    );
  }
}
