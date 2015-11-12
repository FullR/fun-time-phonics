import React from "react";
import SoundFrame from "components/sound-frame";
import Word from "components/word";
import Center from "components/center";

export default class WordFrame extends React.Component {
  render() {
    return (
      <SoundFrame {...this.props} word={null}>
        <Word word={this.props.word} disabled={this.props.disabled}>{this.props.children}</Word>
      </SoundFrame>
    );
  }
}
