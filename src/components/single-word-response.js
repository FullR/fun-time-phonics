import React from "react";
import GameScreen from "components/game-screen";
import Arrow from "components/arrow";
import Word from "components/word";
import Center from "components/center";
import Corner from "components/corner";
import XOverlay from "components/x-overlay";
import StarBox from "components/star-box";

export default class SingleWordResponse extends React.Component {
  static defaultProps = {
    onComplete() {}
  };

  render() {
    const {correct, word, onComplete, teacher, owl, showArrow} = this.props;

    return (
      <GameScreen teacher={teacher} owl={owl}>
        <Center>
          {correct ?
            <StarBox>
              <Word word={word} width={300} height={300}/>
            </StarBox> :

            <Word word={word} width={300} height={300}>
              <XOverlay/>
            </Word>
          }
        </Center>
        <Corner bottom={100} right={100}>
          {showArrow ?
            <Arrow size="large" onClick={() => onComplete(correct)}/> :
            null
          }
        </Corner>
      </GameScreen>
    );
  }
}
