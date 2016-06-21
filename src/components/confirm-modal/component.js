import React from "react";
import cn from "util/cn";
import Modal from "components/modal";
import Button from "components/button";

export default class ConfirmModal extends React.Component {
  static defaultProps = {
    confirmText: "Confirm",
    cancelText: "Cancel"
  };

  render() {
    const {confirmText, cancelText, onConfirm, onCancel, children, className} = this.props;
    const classNames = cn("Confirm-modal", className);

    return (
      <Modal {...this.props} className={classNames} onOverlayClick={onCancel}>
        <div className="Confirm-modal__text">{children}</div>
        <Button className="Confirm-modal__yes" onClick={onConfirm}>{confirmText}</Button>
        <Button className="Confirm-modal__no" onClick={onCancel}>{cancelText}</Button>
      </Modal>
    );
  }
}
