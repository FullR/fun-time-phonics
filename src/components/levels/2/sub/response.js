import React from "react";
import animationContext from "decorators/animation-context";
import soundContext from "decorators/sound-context";
import {say, play} from "helpers/animation";
import SingleWordResponse from "components/single-word-response";

@animationContext
export default class Level2SubResponse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teacher: {speaking: true, animating: false},
      showArrow: !!props.correct
    };
  }

  componentDidMount() {
    const {animations, word, correct, exampleWords} = this.props;
    animations.create("correct",
      this::play("applause"),
      this::say("teacher", `teacher/${word}`),
      200,
      this::say("teacher", "teacher/begins-with"),
      300,
      this::say("teacher", `teacher/${exampleWords[0]}`),
      200,
      this::say("teacher", "teacher/and"),
      200,
      this::say("teacher", `teacher/${exampleWords[1]}`)
    );

    animations.create("incorrect",
      this::say("teacher", `teacher/${word}`),
      200,
      this::say("teacher", "teacher/does-not-begin-with"),
      200,
      this::say("teacher", `teacher/${exampleWords[0]}`),
      200,
      this::say("teacher", "teacher/and"),
      200,
      this::say("teacher", `teacher/${exampleWords[1]}`)
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
