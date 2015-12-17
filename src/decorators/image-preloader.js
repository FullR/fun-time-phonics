import React from "react";
import {preload} from "image";

export default function imagePreloader(...images) {
  return (Wrapped) => class ImagePreloader extends React.Component {
    constructor(props) {
      super(props);
      this.state = {loaded: false};
    }

    componentDidMount() {
      Promise.all(preload(...images))
        .then(() => this.setState({loaded: true}))
        .catch(() => this.setState({loaded: true}));
    }

    render() {
      if(this.state.loaded) {
        return (<Wrapped {...this.props}/>);
      } else {
        return null;
      }
    }
  }
}
