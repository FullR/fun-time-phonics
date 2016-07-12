import React from "react";
import cn from "util/cn";
import Modal from "components/modal";
import Button from "components/button";
import pureUpdate from "pure-update";

export default class ConfirmModal extends React.Component {
  static defaultProps = {
    confirmText: "Confirm",
    cancelText: "Cancel"
  };

  shouldComponentUpdate = pureUpdate;

  render() {
    const {confirmText, cancelText, onConfirm, onCancel, open, children, className} = this.props;
    const classNames = cn("Confirm-modal", className);

    return (
      <Modal className={classNames} onOverlayClick={onCancel} open={open}>
        <div className="Confirm-modal__text">{children}</div>
        <Button className="Confirm-modal__yes" onClick={onConfirm}>{confirmText}</Button>
        <Button className="Confirm-modal__no" onClick={onCancel}>{cancelText}</Button>
      </Modal>
    );
  }
}
