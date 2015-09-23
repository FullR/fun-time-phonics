import React from "react";
import hasher from "hasher";
import Splashscreen from "components/splashscreen";
import Lesson1 from "components/lessons/1";

export default class Router extends React.Component {
  constructor(props) {
    super(props);
    hasher.init();
    this.state = {
      hash: hasher.getHash()
    };
  }

  componentDidMount() {
    hasher.changed.add(() => {
      console.log("Hash changed");
      this.setState({hash: hasher.getHash()});
    });
  }

  render() {
    const {hash} = this.state;
    console.log(hash);
    switch(hash) {
      case "lesson-1": return <Lesson1/>;
      default: return <Splashscreen {...this.props} hash={hash}/>
    }
  }
}