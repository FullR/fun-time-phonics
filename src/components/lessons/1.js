import React from "react";
import {soundContext} from "decorators";
import {GameScreen, Choice, Belt, WordFrame} from "components";

@soundContext({
  tail: "owl/words/tail",
  tip: "owl/words/tip",
  tape: "owl/words/tape"
})
export default class Lesson1 extends React.Component {
  render() {
    const {sounds} = this.props;
    const {tail, tip, tape} = sounds;
    return (
      <GameScreen owl={{text: "lesson", speaking: false, centered: false}} teacher={{speaking: false}}>
        <Belt bottom="30%">
          <Choice>
            <WordFrame word="tail" sound={tail}/>
          </Choice>
          <Choice>
            <WordFrame word="tip" sound={tip}/>
          </Choice>
          <Choice>
            <WordFrame word="tape" sound={tape}/>
          </Choice>
        </Belt>
      </GameScreen>
    );
  }
}
