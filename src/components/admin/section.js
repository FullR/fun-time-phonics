import React from "react";
import SectionHeader from "components/admin/section-header";
import Arrow from "components/arrow";
import classNames from "util/class-names";

export default class AdminSection extends React.Component {
  static defaultProps = {nextText: "", backText: ""};

  render() {
    const {title, lessons, onBack, onNext, nextText, backText} = this.props;
    const className = classNames(
      this.props.className,
      "admin-section"
    );
    return (
      <div className={className}>
        <div className="section-header-container">
          <Arrow onClick={onBack} color="blue" reversed={true} className="previous-section-button">{backText}</Arrow>
          <SectionHeader title={title} lessons={lessons}
            onBack={onBack}
            onNext={onNext}
            backText={backText}
            nextText={nextText}
          />
          <Arrow onClick={onNext} color="blue" className="next-section-button">{nextText}</Arrow>
        </div>
        {this.props.children}
      </div>
    );
  }
}
