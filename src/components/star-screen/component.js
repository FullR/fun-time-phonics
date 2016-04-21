import React from "react";
import cn from "util/cn";
import Screen from "components/screen";
import StarContainer from "components/star-container";

export default class StarScreen extends React.Component {
  render() {
    const {children, className} = this.props;
    const classNames = cn("Star-screen", className);

    return (
      <Screen {...this.props} className={classNames}>
        <StarContainer large>
          {children}
        </StarContainer>
      </Screen>
    );
  }
}
