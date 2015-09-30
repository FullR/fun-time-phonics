import React from "react";
import LockLink from "components/lock-link";
import Corner from "components/corner";

export default class AdminLink extends React.Component {
  static defaultProps = {
    bottom: 30,
    left: 30
  };
  render() {
    const {bottom, left} = this.props;
    return (
      <Corner bottom={bottom} left={left}>
        <LockLink href="#admin">Admin/Score</LockLink>
      </Corner>
    );
  }
}
