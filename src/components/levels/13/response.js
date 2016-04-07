import React from "react";
import animationContext from "decorators/animation-context";
import {say, play} from "helpers/animation";
import TwoWordResponse from "components/two-word-response";

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
    const {animations, answer, correct, correctWords, incorrectWord} = this.props;

    animations.create("correct",
      this::play("applause"),
      this::say("teacher", `teacher/${correctWords[0]}`),
      this::say("teacher", "teacher/and"),
      this::say("teacher", `teacher/${correctWords[1]}`),
      this::say("teacher", "teacher/make-the", 50),
      this::say("teacher", "teacher/correct-phonic", 25),
      this::say("teacher", "teacher/sound", 50)
    );

    animations.create("incorrect",
      this::say("teacher", `teacher/${incorrectWord}`),
      this::say("teacher", "teacher/makes-the", 50),
      this::say("teacher", "teacher/incorrect-phonic", 50),
      this::say("teacher", "teacher/sound", 50),
      this::say("teacher", "teacher/and", 50),
      this::say("teacher", `teacher/${correctWords[0]}`),
      this::say("teacher", "teacher/and"),
      this::say("teacher", `teacher/${correctWords[1]}`),
      this::say("teacher", "teacher/make-the", 50),
      this::say("teacher", "teacher/correct-phonic", 25),
      this::say("teacher", "teacher/sound", 50)
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
    const {words} = this.props.answer;
    return (
      <TwoWordResponse {...this.props} {...this.state} words={words} onTeacherClick={::this.animate}/>
    );
  }
}
