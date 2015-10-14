import React from "react";
import GameScreen from "components/game-screen";
import Arrow from "components/arrow";
import Word from "components/word";
import Center from "components/center";
import Corner from "components/corner";
import XOverlay from "components/x-overlay";
import StarBox from "components/star-box";

export default class TwoWordResponse extends React.Component {
  static defaultProps = {
    onComplete() {}
  };

  render() {
    const {correct, words, onComplete, teacher, owl, showArrow, onTeacherClick, onOwlClick} = this.props;
    const width = 300;
    const height = 300;

    return (
      <GameScreen teacher={teacher} owl={owl} onTeacherClick={onTeacherClick} onOwlClick={onOwlClick}>
        <Center>
          {correct ?
            <StarBox>
              <Word word={words[0]} width={width} height={height}/>
              <Word word={words[1]} width={width} height={height}/>
            </StarBox> :

            <div>
              <Word word={words[0]} width={width} height={height}/>
              <Word word={words[1]} width={width} height={height}/>
              <XOverlay/>
            </div>
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
