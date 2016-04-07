import React from "react";
import {isFunction} from "lodash";
import Choice from "components/choice";
import DragContainer from "components/drag-container";

export default class DraggableChoice extends React.Component {
  static defaultProps = {
    autohide: true
  };

  render() {
    const {disabled, value, children} = this.props;
    const style = {
      display: "inline-block",
      cursor: disabled ? "default" : "pointer",
      ...this.props.style
    };

    return (
      <Choice {...this.props} value={null}>
        <DragContainer value={value}>
          {children}
        </DragContainer>
      </Choice>
    );
  }
}
