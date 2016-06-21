import React from "react";
import cn from "util/cn";

export default class Modal extends React.Component {
  componentDidMount() {
    // if(document.activeElement) {
    //   document.activeElement.blur();
    // }
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
