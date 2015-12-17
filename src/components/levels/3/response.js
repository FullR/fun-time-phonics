import React from "react";
import animationContext from "decorators/animation-context";
import {GameScreen, Arrow, Word, Center, Corner, Choice, XOverlay, StarBox} from "components";
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
    const {animations, answer, correct, ending} = this.props;
    const {words} = answer;

    if(correct) {
      animations.create("animation",
        this::play("applause"),
        this::say("teacher", `teacher/${words[0]}`),
        this::say("teacher", "teacher/and", 300),
        this::say("teacher", `teacher/${words[1]}`, 300),
        this::say("teacher", ending ? "teacher/end-with" : "teacher/begin-with", 300)
      );
    } else {
      animations.create("animation",
        this::say("teacher", `teacher/${words[0]}`),
        this::say("teacher", "teacher/and", 300),
        this::say("teacher", `teacher/${words[1]}`, 300),
        this::say("teacher", ending ? "teacher/dont-end" : "teacher/dont-begin", 300)
      );
    }

    this.animate();
  }

  animate() {
    const {correct, animations} = this.props;
    if(correct) {
      animations.start("animation");
    } else {
      animations.start("animation", () => this.setState({showArrow: true}));
    }
  }

  render() {
    return (
      <TwoWordResponse {...this.props} {...this.state} words={this.props.answer.words} onTeacherClick={::this.animate}/>
    );
  }
}
