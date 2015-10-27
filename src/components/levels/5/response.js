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
    const {animations, words, correct} = this.props;
    animations.create("correct",
      this::play("applause"),
      this::say("teacher", `teacher/${words[0]}`),
      this::say("teacher", "teacher/rhymes-with"),
      this::say("teacher", `teacher/${words[1]}`)
    );

    animations.create("incorrect",
      this::say("teacher", `teacher/${words[0]}`),
      this::say("teacher", "teacher/does-not-rhyme-with"),
      this::say("teacher", `teacher/${words[1]}`)
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
