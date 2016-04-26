import React from "react";
import cn from "util/cn";
import SoundPlayBox from "components/sound-play-box";
import DragContainer from "components/drag-container";
import Letters from "components/letters";

export default class DragLetter extends React.Component {
  render() {
    const {children, value, className} = this.props;
    const classNames = cn("Drag-letter-box", className);

    return (
      <SoundPlayBox {...this.props} className={classNames} value={null}>
        <DragContainer value={value} className="Drag-letter-box__drag-container">
          <Letters className="Drag-letter-box__letters">
            {children}
          </Letters>
        </DragContainer>
      </SoundPlayBox>
    );
  }
}
