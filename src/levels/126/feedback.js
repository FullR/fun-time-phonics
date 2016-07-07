import React from "react";
import ScoreScreen from "components/score-screen";
import Balloon from "components/balloon";
const {Score, Title, SubTitle} = ScoreScreen;

class EndScoreScreen extends ScoreScreen {
  animate() {
    if(!this.state.speaking) {
      if(this.isPassing()) {
        this.play("applause")
          .then(() => this.setState({speaking: true}))
          .then(() => this.play("feedback"))
          .then(() => this.setState({speaking: false}));
      } else {
        this.setState({speaking: true});
        this.play("feedback").then(() => {
          this.setState({speaking: false});
        });
      }
    }
  }

  getSounds() {
    return {
      applause: "end-applause",
      feedback: this.isPassing() ?
        "boy/common/Congrats-FINAL" :
        "boy/common/nice-try-lets-practice-this-some-more"
    };
  }
}

export default class Feedback extends React.Component {
  render() {
    const {levelId, title, score, max} = this.props;
    return (
      <EndScoreScreen {...this.props} hideNext>
        <Title>{title} Is Complete!</Title>

        <Balloon left="8%" duration={3.5} color="red"/>
        <Balloon left="13%" duration={2.75} color="blue"/>
        <Balloon right="8%" duration={3.15} color="green"/>
        <Balloon right="13%" duration={2.8} color="orange"/>
        {this.props.children}
      </EndScoreScreen>
    );
  }
}
