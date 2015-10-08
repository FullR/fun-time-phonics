import React from "react";
import hasher from "hasher";
const log = debug("tctc:router");

export default class Router extends React.Component {
  constructor(props) {
    super(props);
    hasher.init();
    this.state = {
      history: [],
      hash: hasher.getHash()
    };
  }

  get hash() {
    return this.state.hash;
  }

  componentDidMount() {
    hasher.changed.add(() => {
      const hash = hasher.getHash();
      log(`hash changed: ${hash}`);
      this.setState({
        history: [...this.state.history, this.state.hash],
        hash: hash
      });
    });
  }

  back() {
    if(this.state.history.length) {
      const prev = this.state.history.pop();
      log(`Going back to: ${prev}`);
      hasher.setHash(prev);
    } else {
      log("History is empty. Returning to default route");
      hasher.setHash("");
    }
  }

  setHash(hash) {
    hasher.setHash(hash);
  }

  getRoute() {
    const {hash} = this.state;
    const parts = hash.split("/");
    console.log(`Rendering ${hash}`);
    switch(parts[0]) {
      case "level": return require("components/levels/" + parts[1] + "/index");
      case "admin": return require("components/admin/index");
      case "fb": return require("components/level-feedback");
      case "splash": // intentional fall through
      default: return require("components/splashscreen");
    }
  }

  render() {
    const Route = this.getRoute();
    return (<Route router={this}/>);
  }
}