import React from "react";

function defaultLog(props, str) {
  console.log(str);
}

export default function inspector(log=defaultLog) {
  return (WrappedComponent) => class InspectorWrapper extends React.Component {
    constructor(props) {
      super(props);
      log(this.props, "constructing");
    }

    componentWillMount() {
      log(this.props, "componentWillMount");
    }

    componentDidMount() {
      log(this.props, "componentDidMount");
    }

    componentWillReceiveProps() {
      log(this.props, "componentWillReceiveProps");
    }

    componentWillUpdate() {
      log(this.props, "componentWillUpdate");
    }

    componentDidUpdate() {
      log(this.props, "componentDidUpdate");
    }

    componentWillUnmount() {
      log(this.props, "componentWillUnmount");
    }

    render() {
      log(this.props, "Rendering");
      return <WrappedComponent {...this.props}/>
    }
  }
}
