import React from "react";
import cn from "util/cn";
import DisplayBar from "components/display-bar";
import StarContainer from "components/star-container";
import XOverlay from "components/x-overlay";

export default class ResponseAnswer extends React.Component {
  static propTypes = {
    correct: React.PropTypes.bool
  };

  render() {
    const {isCorrect, children, className} = this.props;
    const classNames = cn("Response-answer", className);

    return (
      <DisplayBar>
        {isCorrect ?
          <StarContainer className="Response-answer__content">
            {children}
          </StarContainer> :
          <div className="Response-answer__content">
            {children}
            <XOverlay/>
          </div>
        }
      </DisplayBar>
    );
  }
}
