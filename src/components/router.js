import React from "react";
import hasher from "hasher";
import levels from "components/levels";
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
    switch(parts[0]) {
      case "level":
        if(levels.hasOwnProperty(parts[1])) {
          return levels[parts[1]];
        } else {
          throw new Error("Level not found: " + parts[1]);
        }
      case "admin": return require("components/admin");
      case "test": return require("components/test-page");
      case "sound-test": return require("components/sound-test-page");
      case "splash": // intentional fall through
      default: return require("components/splashscreen");
    }
  }

  render() {
    const Route = this.getRoute();
    return (<Route {...this.props} router={this}/>);
  }
}
