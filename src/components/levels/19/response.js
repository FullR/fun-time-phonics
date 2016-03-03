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
    const {animations, answer} = this.props;
    const {word} = answer;

    animations.create("correct",
      this::play("applause"),
      this::say("teacher", `teacher/${word}`),
      this::say("teacher", "teacher/makes-the", 50),
      this::say("teacher", "teacher/phonic", 50),
      this::say("teacher", "teacher/sound-so", 50),
      this::say("teacher", `teacher/${word}`, 50),
      this::say("teacher", "teacher/has-an", 50),
      this::say("teacher", "teacher/letter", 50),
      this::say("teacher", "teacher/in-it", 50)
    );

    animations.create("incorrect",
      this::say("teacher", `teacher/${word}`),
      this::say("teacher", "teacher/does-not-make-the", 50),
      this::say("teacher", "teacher/phonic", 50),
      this::say("teacher", "teacher/sound-so-it-does-not", 50),
      this::say("teacher", "teacher/letter", 50),
      this::say("teacher", "teacher/in-it", 100)
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
    const {word} = this.props.answer;
    return (
      <SingleWordResponse {...this.props} {...this.state} word={word} onTeacherClick={::this.animate}/>
    );
  }
}
