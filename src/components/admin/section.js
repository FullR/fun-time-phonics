import React from "react";
import Arrow from "components/arrow";
import SectionHeader from "components/admin/section-header";
import classNames from "util/class-names";

export default class AdminSection extends React.Component {
  render() {
    const {title, lessons, onBack, onNext} = this.props;
    const className = classNames(
      this.props.className,
      "admin-section"
    );
    return (
      <div className={className}>
        <div className="section-header-container">
          <Arrow onClick={onBack} color="black" reversed={true} className="previous-section-button">Back</Arrow>
          <SectionHeader title={title} lessons={lessons}/>
          <Arrow onClick={onNext} color="black" className="next-section-button">Next</Arrow>
        </div>
        {this.props.children}
      </div>
    );
  }
}
