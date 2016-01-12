import React from "react";
import Sound from "sound";
import hasher from "hasher";
import {sounds} from "asset-index";


class Player extends React.Component {
  constructor(props) {
    super(props);
    this.sound = new Sound({path: props.path});
    this.state = {playing: false};
  }

  load() {
    if(!this.loadPromise) {
      this.loadPromise = this.sound.load().then(
        () => this.setState({error: null, loaded: true}),
        (error) => console.error(`Failed to load ${this.sound.path}: ${error}`)
      );
    }
    return this.loadPromise;
  }

  play() {
    return this.load()
      .then(() => {
        this.setState({playing: true});
        return this.sound.play()
      })
      .then(
        () => this.setState({playing: false}),
        (error) => {
          console.error(`Failed to play ${this.sound.path}: ${error}`);
          this.setState({playing: false});
        }
      );
  }

  render() {
    const {playing} = this.state;
    const style = {
      height: 24,
      cursor: "pointer",
      lineHeight: "20px",
      fontSize: 20,
      color: playing ? "#0A0" : "#00A"
    };

    return (
      <div {...this.props} style={style} onClick={::this.play}/>
    );
  }
}

export default class SoundTestPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {filter: ""};
  }

  updateFilter(event) {
    this.setState({filter: event.target.value.trim()});
  }

  back(event) {
    event.preventDefault();
    hasher.setHash("");
  }

  render() {
    const {filter} = this.state;
    const style = {
      base: {padding: 50, fontSize: 20},
      input: {width: "100%", marginBottom: 30},
      backLink: {position: "absolute", left: 10, top: 10}
    };
    const filteredSounds = filter && filter.length ?
      sounds.filter((path) => path.match(filter)) :
      sounds;

    return (
      <div style={style.base}>
        <a style={style.backLink} href="#" onClick={::this.back}>Back</a>
        <label>Filter</label>
        <input style={style.input} onChange={::this.updateFilter}/>
        {filteredSounds.map((path, i) =>
          <Player key={path} path={path}>{path}</Player>
        )}
      </div>
    );
  }
}
