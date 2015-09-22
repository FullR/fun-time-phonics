import React from "react";

export default function classNames(...classNames) {
  return (Component) => class ClassNamesWrapper extends React.Component {
    render() {
      const className = this.props.className ?
        `${this.props.className} ${classNames.join(" ")}` :
        classNames.join(" ");

      return (<Component {...this.props} className={className}/>);
    }
  }
}
