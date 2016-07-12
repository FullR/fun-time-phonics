import React from "react";
import cn from "util/cn";
import Screen from "components/screen";
import AdminButton from "components/admin-button";
import ResponseAnswer from "components/response-answer";
import CornerTitle from "components/corner-title";
import Arrow from "components/arrow";
import pureUpdate from "pure-update";

export default class Response extends React.Component {
  static Answer = ResponseAnswer;
  static Title = CornerTitle;

  static propTypes = {
    onNext: React.PropTypes.func,
    arrowHidden: React.PropTypes.bool
  };

  shouldComponentUpdate = pureUpdate;

  render() {
    const {arrowHidden, onNext, children, className} = this.props;
    const classNames = cn("Response", className);

    return (
      <Screen {...this.props} className={classNames}>
        {children}
        <Arrow hidden={arrowHidden} onClick={onNext} size="large">Next</Arrow>
        <AdminButton/>
      </Screen>
    );
  }
}
