import React from "react";
import cn from "util/cn";
import pureUpdate from "pure-update";

export default class Modal extends React.Component {
  shouldComponentUpdate = pureUpdate;

  componentDidMount() {
    window.focus();
  }

  render() {
    const {open, onOverlayClick, children, className} = this.props;
    const classNames = cn("Modal", className);

    if(!open) return null;
    return (
      <div {...this.props} className={classNames}>
        <div className="Modal__window">
          <div className="Modal__content">
            {children}
          </div>
        </div>
        <div className="Modal__overlay" onClick={onOverlayClick}/>
      </div>
    );
  }
}
