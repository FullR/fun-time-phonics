import React from "react";
import LessonButton from "components/admin/lesson-button";
import Section from "components/admin/section";
import {range} from "lodash";

export default class Section5 extends React.Component {
  render() {
    const {onSelectLevel} = this.props;
    return (
      <Section {...this.props} lessons="43-63">
        {range(44, 63).map((levelId) =>
          <div
            style={{
              cursor: "pointer"
            }}
            onClick={onSelectLevel.bind(null, levelId + "")}
          >
            Level {levelId}
          </div>
        )}
      </Section>
    );
  }
}
