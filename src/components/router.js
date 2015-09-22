import React from "react";
import hasher from "hasher";
import Splashscreen from "components/splashscreen";

export default class Router extends React.Component {
  constructor(props) {
    super(props);
    hasher.init();
    this.state = {
      hash: hasher.getHash()
    };
  }

  componentDidMount() {
    hasher.changed.add(() => this.setState({hash: hasher.getHash()}));
  }

  render() {
    const {hash} = this.state;
    switch(hash) {
      default: return <Splashscreen {...this.props} hash={hash}/>
    }
  }
}