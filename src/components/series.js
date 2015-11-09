import React from "react";
import createFragment from "react-addons-create-fragment";

export default class Series extends React.Component {
  static defaultProps = {
    index: 0
  };

  render() {
    return <div >{this.currentStep}</div>;
  }

  get currentStep() {
    const {children, stepProps, index} = this.props;
    const childArray = React.Children.toArray(children);

    if(!children) {
      return null;
    }

    const fragments = childArray.reduce((f, child, i) => {
      const key = `step-${i}`;
      if(i === index) {
        if(stepProps) {
          f[key] = React.cloneElement(child, stepProps);
        } else {
          f[key] = child;
        }
      } else {
        f[key] = null;
      }
      return f;
    }, {});

    return createFragment(fragments);
  }
}
