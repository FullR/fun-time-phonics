import React from "react";
import cn from "util/cn";
import SoundPlayBox from "components/sound-play-box";
import DropContainer from "components/drop-container";
import Word from "components/word";

export default class DropWordBox extends React.Component {
  render() {
    const {onDrop, word, className} = this.props;
    const classNames = cn("Drop-word-box", className);

    return (
      <SoundPlayBox {...this.props} className={classNames} onDrop={null} word={null}>
        <DropContainer onDrop={onDrop}>
          <Word word={word}/>
        </DropContainer>
      </SoundPlayBox>
    );
  }
}
