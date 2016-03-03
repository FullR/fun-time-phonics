import React from "react";
import animationContext from "decorators/animation-context";
import {say, play} from "helpers/animation";
import SingleWordResponse from "components/single-word-response";

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
    const {word} = answer;
    animations.create("correct",
      this::play("applause"),
      this::say("teacher", "teacher/correct"),
      this::say("teacher", "teacher/letters", 100),
      this::say("teacher", "teacher/makes-the", 100),
      this::say("teacher", "teacher/phonic", 100),
      this::say("teacher", "teacher/sound-in", 50),
      this::say("teacher", `teacher/${word}`, 50)
    );
    animations.create("incorrect",
      this::say("teacher", `teacher/${word}`),
      this::say("teacher", "teacher/does-not-begin-with-the", 100),
      this::say("teacher", "teacher/phonic", 50),
      this::say("teacher", "teacher/sound-so-it-does-not-begin-with", 50),
      this::say("teacher", "teacher/letters", 50)
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
      <SingleWordResponse {...this.props} {...this.state} word={this.props.answer.word} onTeacherClick={::this.animate}/>
    );
  }
}
