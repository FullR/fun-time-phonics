import React from "react";
import cn from "util/cn";
import Modal from "components/modal";
import Button from "components/button";

export default class AlertModal extends React.Component {
  render() {
    const {onClose, children, className} = this.props;
    const classNames = cn("Alert-modal", className);

    return (
      <Modal {...this.props} className={classNames}>
        <div className="Alert-modal__text">{children}</div>
        <Button className="Alert-modal__button" onClick={onClose}>Close</Button>
      </Modal>
    );
  }
}
