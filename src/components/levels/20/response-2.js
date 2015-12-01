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
    const {animations, word, letter, correct} = this.props;
    animations.create("correct",
      this::play("applause"),
      this::say("teacher", `teacher/${word}`),
      this::say("teacher", "teacher/makes-the"),
      this::say("teacher", `teacher/${letter}h`), // phonic
      this::say("teacher", "teacher/sound-so"),
      this::say("teacher", `teacher/${word}`),
      this::say("teacher", `teacher/${letter}`)
    );

    animations.create("incorrect",
      this::say("teacher", "teacher/there-is-no"),
      this::say("teacher", `teacher/${letter}h`),
      this::say("teacher", "teacher/sound-in"),
      this::say("teacher", `teacher/${word}`)
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
      <SingleWordResponse {...this.props} {...this.state} onTeacherClick={::this.animate}/>
    );
  }
}
