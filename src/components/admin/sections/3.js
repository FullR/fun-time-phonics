import React from "react";
import LessonButton from "components/admin/lesson-button";
import Section from "components/admin/section";
const {Title} = LessonButton;

export default class Section3 extends React.Component {
  render() {
    const {selectedLevel, onSelectLevel} = this.props;
    const isSelected = (lessonId) => lessonId === selectedLevel;
    const select = (lessonId) => () => onSelectLevel(lessonId);

    return (
      <Section {...this.props} className="admin-section-3">
        <LessonButton lessonId="15" selected={isSelected("15")} onClick={select("15")}>
          <Title>The Letter "a"</Title>
        </LessonButton>
        <LessonButton lessonId="16" selected={isSelected("16")} onClick={select("16")}>
          <Title>The Letter "e"</Title>
        </LessonButton>
        <LessonButton lessonId="17" selected={isSelected("17")} onClick={select("17")}>
          <Title>The Letter "i"</Title>
        </LessonButton>
        <LessonButton lessonId="18" selected={isSelected("18")} onClick={select("18")}>
          <Title>The Letter "o"</Title>
        </LessonButton>
        <LessonButton lessonId="19" selected={isSelected("19")} onClick={select("19")}>
          <Title>The Letter "u"</Title>
        </LessonButton>
        <LessonButton lessonId="20" selected={isSelected("20")} onClick={select("20")}>
          <Title>Short Vowels Review</Title>
        </LessonButton>
      </Section>
    );
  }
}
