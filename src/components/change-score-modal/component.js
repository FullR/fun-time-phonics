import React from "react";
import cn from "util/cn";
import Modal from "components/modal";

function ChangeScoreButton({children, selected, onClick}) {
  const className = selected ?
    "Change-score-modal__score-button Change-score-modal__score-button-selected" :
    "Change-score-modal__score-button";

  return (<div className={className} onClick={onClick}>{children}</div>)
}

export default class ChangeScoreModal extends React.Component {
  change(percent) {
    const {onChange} = this.props;
    if(onChange) {
      onChange(percent);
    }
  }

  render() {
    const {value, onChange, onClose, className} = this.props;
    const classNames = cn("Change-score-modal", className);

    return (
      <Modal {...this.props} className={classNames} onOverlayClick={onClose}>
        <ChangeScoreButton selected={value === 65} onClick={this.change.bind(this, 65)}>65%</ChangeScoreButton>
        <ChangeScoreButton selected={value === 75} onClick={this.change.bind(this, 75)}>75%</ChangeScoreButton>
        <ChangeScoreButton selected={value === 85} onClick={this.change.bind(this, 85)}>85%</ChangeScoreButton>
        <div className="Change-score-modal__close-button" onClick={onClose}>Close</div>
      </Modal>
    );
  }
}
