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
    const {animations, answer, phonic, correct, correctWord, replaceWord, replacePhonic} = this.props;
    const {word} = answer;

    const response = [
      this::say("teacher", "teacher/if-you-replace", 100),
      this::say("teacher", `teacher/${replacePhonic}`, 50),
      this::say("teacher", "teacher/in", 50),
      this::say("teacher", `teacher/replace-word`, 50),
      this::say("teacher", "teacher/with", 50),
      this::say("teacher", `teacher/${phonic}`, 50),
      this::say("teacher", "teacher/the-new-word-is", 100),
      this::say("teacher", `teacher/${correctWord}`, 50)
    ];

    animations.create("correct",
      this::play("applause"),
      this::say("teacher", "teacher/yes"),
      response
    );
    animations.create("incorrect", response);
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
