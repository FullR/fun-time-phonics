import React from "react";
import Router from "components/router";
import soundContext from "decorators/sound-context";

@soundContext({
  applause: "applause",
  success: "owl/common/nice-work-touch-the-green-arrow-to-begin-the-next-lesson-touch-the-orange-arrow-to-play-this-lesson-again",
  fail: "owl/common/nice-try-lets-practice-this-some-more"
})
export default class Application extends React.Component {
  render() {
    return (<Router soundContext={this.props.soundContext}/>);
  }
}
