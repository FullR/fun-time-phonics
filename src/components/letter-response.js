import React from "react";
import GameScreen from "components/game-screen";
import Arrow from "components/arrow";
import Letter from "components/letter";
import Center from "components/center";
import Corner from "components/corner";
import XOverlay from "components/x-overlay";
import StarBox from "components/star-box";

export default class LetterResponse extends React.Component {
  static defaultProps = {
    onComplete() {}
  };

  render() {
    const {correct, letter, onComplete, teacher, owl, showArrow, onTeacherClick, onOwlClick} = this.props;

    return (
      <GameScreen teacher={teacher} owl={owl} onTeacherClick={onTeacherClick} onOwlClick={onOwlClick}>
        <Center>
          {correct ?
            <StarBox width={300} height={300}>
              <Center>
                <Letter>
                  {letter}
                </Letter>
              </Center>
            </StarBox> :
            <Letter width={300} height={300} style={{lineHeight: "300px"}}>
              {letter}
              <XOverlay/>
            </Letter>
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
