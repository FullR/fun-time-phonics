import React from "react";
import Sound from "sound";
const {loaded, loadEvents} = Sound;

const style = {
  position: "absolute",
  fontSize: 22,
  left: 0,
  top: 0,
  height: 500,
  width: "100%",
  background: "rgba(255, 255, 255, 0.8)",
  border: "2px solid #444",
  overflow: "auto",
  zIndex: 10
};

const soundStyle = {
  cursor: "pointer"
};

export default class AudioInspector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {loaded};
    this.onLoadedChange = ::this.onLoadedChange;
  }

  onLoadedChange() {
    this.setState({loaded});
  }

  componentDidMount() {
    loadEvents.on("change", this.onLoadedChange);
  }

  componentWillUnmount() {
    loadEvents.removeListener("change", this.onLoadedChange);
  }

  render() {
    return (
      <div style={style}>
        {this.state.loaded.map((sound) => 
          <div key={sound.id} style={soundStyle} onClick={() => sound.play()}>{sound.path}</div>
        )}
      </div>
    );
  }
}
