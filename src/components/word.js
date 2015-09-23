import React from "react";
import image from "image";

export default class Word extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: !this.props.preload
    };
  }

  get imageUrl() {
    return `words/${this.props.word}.png`;
  }

  preloadImage() {
    if(this.state.loaded) {
      this.setState({loaded: false});
    }
    image.preload(this.imageUrl).then(() => {
      this.setState({loaded: true});
    }, (error) => {
      logError(`Failed to preload word image:`, error);
      this.setState({loaded: true})
    });
  }

  componentDidMount() {
    if(this.props.preload) {
      this.preloadImage();
    }
  }

  render() {
    const {word, width, height} = this.props;
    const {loaded} = this.state;
    const imageUrl = image(this.imageUrl);
    const style = loaded ? {
      width, height,
      backgroundImage: `url("${imageUrl}")`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "50% 50%"
    } : {width, height, background: "#FFF"};
    return <div {...this.props} style={style}/>
  }
}

Word.defaultProps = {
  word: "undefined", // will use a placeholder undefined.png file
  width: "100%",
  height: "100%",
  preload: true
};
