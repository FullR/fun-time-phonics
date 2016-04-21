import React from "react";

export default function bindProps(props) {
  return (TargetComponent) => class BindProps extends React.Component {
    render() {
      return (<TargetComponent {...Object.assign({}, this.props || {}, props)}/>);
    }
  }
}
