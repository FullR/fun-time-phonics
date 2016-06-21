import React from "react";
import cn from "util/cn";
import SoundPlayBox from "components/sound-play-box";
import Word from "components/word";

export default class WordSoundPlayBox extends React.Component {
  render() {
    const {className, word, children} = this.props;
    const classNames = cn("Word-sound-play-box", className);

    return (
      <SoundPlayBox {...this.props} className={classNames}>
        <Word word={word} className="Word-sound-play-box__word"/>
        {children}
      </SoundPlayBox>
    );
  }
}
