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
    const {animations, word, correct, correctWord, incorrectWords} = this.props;
    const incorrectAnim = [
      this::say("teacher", `teacher/${incorrectWords[0]}`),
      this::say("teacher", "teacher/and", 100),
      this::say("teacher", `teacher/${incorrectWords[1]}`, 100),
      this::say("teacher", "teacher/make-the-same", 200),
      this::say("teacher", "teacher/incorrect-phonic", 100),
      this::say("teacher", "teacher/sound", 100)
    ];

    animations.create("correct",
      this::play("applause"),
      this::say("teacher", `teacher/${correctWord}`),
      this::say("teacher", "teacher/makes-the", 200),
      this::say("teacher", "teacher/correct-phonic", 100),
      this::say("teacher", "teacher/sound", 100),
      this::say("teacher", "teacher/and", 200),
      100,
      incorrectAnim
    );

    animations.create("incorrect", incorrectAnim);

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
