import React from "react";
import cn from "util/cn";
import Modal from "components/modal";
import Button from "components/button";
import pureUpdate from "pure-update";

export default class AlertModal extends React.Component {
  shouldComponentUpdate = pureUpdate;
  render() {
    const {open, onOverlayClick, onClose, children, className} = this.props;
    const classNames = cn("Alert-modal", className);

    return (
      <Modal className={classNames} open={open} onOverlayClick={onOverlayClick}>
        <div className="Alert-modal__text">{children}</div>
        <Button className="Alert-modal__button" onClick={onClose}>Close</Button>
      </Modal>
    );
  }
}
