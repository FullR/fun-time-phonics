import React from "react";
import animationContext from "decorators/animation-context";
import {GameScreen, Arrow, Word, Center, Corner, Choice, XOverlay, StarBox} from "components";
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
      this::say("teacher", `teacher/${word}`),
      200,
      this::say("teacher", "teacher/begins-with"),
      300,
      this::say("teacher", "teacher/phonic")
    );

    animations.create("incorrect",
      this::say("teacher", `teacher/${word}`),
      200,
      this::say("teacher", "teacher/does-not-begin-with"),
      400,
      this::say("teacher", "teacher/phonic")
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
      <SingleWordResponse {...this.props} {...this.state} onTeacherClick={::this.animate} word={this.props.answer.word}/>
    );
  }
}
