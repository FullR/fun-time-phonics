import React from "react";
import loadImage from "util/load-image";

const requireWordImage = require.context("../../images/words/", false, /\.png$/);

function getWordImagePath(word) {
  try {
    return requireWordImage(`./${word}.png`);
  } catch(error) {
    return requireWordImage("./undefined.png");
  }
}

export default class Word extends React.Component {
  static defaultProps = {
    word: "undefined", // will use a placeholder undefined.png file
    width: "100%",
    height: "100%",
    preload: true
  };

  constructor(props) {
    super(props);
    this.state = {
      loaded: !this.props.preload
    };
  }

  preloadImage() {
    if(this.state.loaded) return;
    loadImage(getWordImagePath(this.props.word)).then(
      () => this.setState({loaded: true}),
      (error) => console.log(`Failed to load word image "${this.props.word}": `, error)
    );
  }

  componentDidMount() {
    if(this.props.preload) {
      this.preloadImage();
    }
  }

  render() {
    const {word, width, height, display} = this.props;
    const {loaded} = this.state;
    const imageUrl = getWordImagePath(word);
    const style = loaded ? {
      width, height, display,
      backgroundImage: `url("${imageUrl}")`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "50% 50%"
    } : {width, height, display, background: "#FFF"};

    return <div {...this.props} style={style}/>
  }
}
