import React from "react";

export default class Countdown extends React.Component {
  static defaultProps = {
    seconds: 10,
    onComplete() {}
  };

  constructor(props) {
    super(props);
    this.state = {
      remaining: props.seconds
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      if(this.state.remaining === 1) {
        clearInterval(this.interval);
        this.props.onComplete();
      }
      this.setState({
        remaining: this.state.remaining - 1
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div {...this.props}>{this.state.remaining}</div>
    );
  }
}
