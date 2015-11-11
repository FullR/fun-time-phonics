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
    const {animations, word, correct} = this.props;
    animations.create("correct",
      this::play("applause"),
      this::say("teacher", `teacher/${word}`),
      this::say("teacher", "teacher/makes-the", 200),
      this::say("teacher", "teacher/phonic", 100),
      this::say("teacher", "teacher/sound", 100)
    );

    animations.create("incorrect",
      this::say("teacher", `teacher/${word}`),
      this::say("teacher", "teacher/does-not-make-the", 200),
      this::say("teacher", "teacher/phonic", 100),
      this::say("teacher", "teacher/sound", 100)
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
