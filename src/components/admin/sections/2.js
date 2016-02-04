import React from "react";
import LessonButton from "components/admin/lesson-button";
import Section from "components/admin/section";
const {Title} = LessonButton;

export default class Section2 extends React.Component {
  render() {
    const {selectedLevel, onSelectLevel} = this.props;
    const isSelected = (lessonId) => lessonId === selectedLevel;
    const select = (lessonId) => () => onSelectLevel(lessonId);

    return (
      <Section {...this.props} className="admin-section-2" title="Short Vowel Sounds" lessons="8-14" backText="1-7" nextText="15-20">
        <LessonButton lessonId="8" selected={isSelected("8")} onClick={select("8")}>
          <Title>Short a</Title>
        </LessonButton>
        <LessonButton lessonId="9" selected={isSelected("9")} onClick={select("9")}>
          <Title>Short e</Title>
        </LessonButton>
        <LessonButton lessonId="10" selected={isSelected("10")} onClick={select("10")}>
          <Title>Short i</Title>
        </LessonButton>
        <LessonButton lessonId="11" selected={isSelected("11")} onClick={select("11")}>
          <Title>Short o</Title>
        </LessonButton>
        <LessonButton lessonId="12" selected={isSelected("12")} onClick={select("12")}>
          <Title>Short u</Title>
        </LessonButton>
        <LessonButton lessonId="13" selected={isSelected("13")} onClick={select("13")}>
          <Title>Odd One Out</Title>
        </LessonButton>
        <LessonButton lessonId="14" selected={isSelected("14")} onClick={select("14")}>
          <Title>Forming New Words</Title>
        </LessonButton>
      </Section>
    );
  }
}
