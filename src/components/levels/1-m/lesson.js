import React from "react";
import soundContext from "decorators/sound-context";
import Lesson1Sub from "components/levels/1/sublesson";

@soundContext({
  mom: "owl/words/mom",
  monkey: "owl/words/monkey",
  phonic: "owl/common/phonics/m"
})
export default class Lesson1SubM extends React.Component {
  render() {
    return (
      <Lesson1Sub
        words={["mom", "monkey"]}
        phonic="m"
      />
    );
  }
}
