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
    animations.create("correct",
      this::play("applause"),
      this::say("teacher", `teacher/${answer[0]}`),
      this::say("teacher", "teacher/and", 300),
      this::say("teacher", `teacher/${answer[1]}`, 300),
      this::say("teacher", ending ? "teacher/end-with" : "teacher/begin-with", 300)
    );

    animations.create("incorrect",
      this::say("teacher", `teacher/${answer[0]}`),
      this::say("teacher", "teacher/and", 300),
      this::say("teacher", `teacher/${answer[1]}`, 300),
      this::say("teacher", ending ? "teacher/dont-end" : "teacher/dont-begin", 300)
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
      <TwoWordResponse {...this.props} {...this.state} onTeacherClick={::this.animate}/>
    );
  }
}
