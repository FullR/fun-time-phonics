import React from "react";
import animationContext from "decorators/animation-context";
import {say, play} from "helpers/animation";
import LetterResponse from "components/letter-response";

@animationContext
export default class Response extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teacher: {speaking: true, animating: false},
      showArrow: !!props.correct
    };
  }

  componentDidMount() {
    const {animations, answer, correct} = this.props;
    animations.create("correct",
      this::say("teacher", "teacher/correct"),
      this::say("teacher", `teacher/${answer.letter}`, 200),
      this::say("teacher", "teacher/makes-the", 200),
      this::say("teacher", `teacher/${answer.letter}h`, 200),
      this::say("teacher", "teacher/sound-in", 200),
      this::say("teacher", "teacher/word", 200)
    );
    animations.create("incorrect",
      this::say("teacher", "teacher/the-letters"),
      this::say("teacher", `teacher/${answer.letter}`, 200),
      this::say("teacher", "teacher/make-the", 200),
      this::say("teacher", `teacher/${answer.letter}h`, 200),
      this::say("teacher", "teacher/sound-so", 200),
      this::say("teacher", "teacher/word", 200),
      this::say("teacher", "teacher/does-not-begin-with", 200),
      this::say("teacher", `teacher/${answer.letter}`, 200)
    );
    this.animate();
  }

  animate() {
    const {correct, animations} = this.props;
    if(correct) {
      animations.start("correct");
    } else {
      animations.start("incorrect", () => this.setState({showArrow: true}));
    }
  }

  render() {
    return (
      <LetterResponse {...this.props} {...this.state} letter={this.props.answer.letter} onTeacherClick={::this.animate}/>
    );
  }
}
