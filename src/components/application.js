import React from "react";
import Router from "components/router";
import AudioInspector from "components/audio-inspector";

const style = {
  position: "relative",
  width: "100%",
  height: "100%"
};

export default class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingAudioInspector: false
    };
  }

  componentDidMount() {
    window.addEventListener("keydown", (e) => {
      if(e.keyCode === 192) {
        e.preventDefault();
        this.toggleAudioInspector();
      }
    });
  }

  toggleAudioInspector() {
    this.setState({
      showingAudioInspector: !this.state.showingAudioInspector
    });
  }

  render() {
    return (<div style={style}><Router/>{this.state.showingAudioInspector ? <AudioInspector/> : null}</div>);
  }
}
