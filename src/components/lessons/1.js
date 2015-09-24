import React from "react";
import {Observable} from "rx";
import {soundContext, animationContext} from "decorators";
import bindMethods from "util/bind-methods";
import {mergeState} from "util/state";
import {map} from "lodash";
import {GameScreen, Choice, Belt, WordFrame, LessonTitle, Corner} from "components";
import {say, endSpeaking, sayEach, hideChoices, resolveState, state, wait} from "helpers/animation";

@soundContext({
  tail: "owl/words/tail",
  tip: "owl/words/tip",
  tape: "owl/words/tape",
  welcome: "welcome"
})
@animationContext
export default class Lesson1 extends React.Component {
  constructor(props) {
    super(props);
    const {tail, tip, tape} = props.sounds;
    this.state = {
      owl: {text: "lesson", speaking: false, animating: false, centered: false},
      choices: {
        "0": {word: "tail"},
        "1": {word: "tip"},
        "2": {word: "tape"}
      }
    };
  }

  componentDidMount() {
    const {animations, sounds} = this.props;
    const {tail, tip, tape} = sounds;

//    this::hideChoices();
    animations.create("words",
      () => this::hideChoices(),
      //wait(1),
      this::sayEach("owl",
         tail,
      //   1000,
      //   tip,
      //   1000,
      //   tape
       )
    ).start("words");
  }

  animate() {
    const {animations} = this.props;
    if(animations.isAnimating()) return;
    animations.start("words");
  }

  render() {
    const {owl, choices} = this.state;
    const {sounds, animations} = this.props;
    const {tail, tip, tape, welcome} = sounds;
    console.log(this.state);

    return (
      <GameScreen owl={owl}>
        <LessonTitle>Beginning Sounds</LessonTitle>
        <LessonTitle.SubTitle>Lesson 1</LessonTitle.SubTitle>
        <Belt bottom="30%">
          {map(choices, (choice, key) =>
            <Choice key={key}>
              <WordFrame {...choice} sound={sounds[choice.word]}/>
            </Choice>
          )}
        </Belt>
        <Corner bottom={30} right={30}>
          <button onClick={() => this.animate()}>Start</button>
          <button onClick={() => animations.stop("words")}>Stop</button>
        </Corner>
      </GameScreen>
    );
  }
}

          // <Choice>
            // <WordFrame word="tail" sound={tail}/>
          // </Choice>
          // <Choice>
            // <WordFrame word="tip" sound={tip}/>
          // </Choice>
          // <Choice>
            // <WordFrame word="tape" sound={tape}/>
          // </Choice>
