import React from "react";
import cn from "util/cn";
import SoundPlayBox from "components/sound-play-box";
import Letters from "components/letters";

export default class LetterSoundPlayBox extends React.Component {
  render() {
    const {children, className} = this.props;
    const classNames = cn("Letter-sound-play-box", className);

    return (
      <SoundPlayBox {...this.props} className={classNames}>
        <Letters className="Letter-sound-play-box__letters">
          {children}
        </Letters>
      </SoundPlayBox>
    );
  }
}
