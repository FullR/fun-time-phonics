import React from "react";
import animationContext from "decorators/animation-context";
import soundContext from "decorators/sound-context";
import {GameScreen, Arrow, Word, Center, Corner, Choice, XOverlay, StarBox} from "components";
import {say, play} from "helpers/animation";
import SingleWordResponse from "components/single-word-response";

@soundContext({
  applause: "applause"
})
@animationContext
export default class Level1Response extends React.Component {
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
      this::say("teacher", word)
    );

    animations.create("incorrect",
      this::say("teacher", word)
    );

    if(correct) {
      animations.start("correct");
    } else {
      animations.start("incorrect", () => this.setState({showArrow: true}));
    }
  }

  render() {
    return (
      <SingleWordResponse {...this.props} {...this.state}/>
    );
  }
}
