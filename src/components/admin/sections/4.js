import React from "react";
import LessonButton from "components/admin/lesson-button";
import Section from "components/admin/section";
const {Title} = LessonButton;

export default class Section4 extends React.Component {
  render() {
    const {selectedLevel, onSelectLevel} = this.props;
    const isSelected = (lessonId) => lessonId === selectedLevel;
    const select = (lessonId) => () => onSelectLevel(lessonId);

    return (
      <Section {...this.props} className="admin-section-4" lessons="21-42" title="Co-Articulation">
        <LessonButton lessonId="21" selected={isSelected("21")} onClick={select("21")}>
          <Title>Lesson b</Title>
          <div className="inner-buttons">
            <LessonButton lessonId="21" selected={isSelected("21")} onClick={select("21")}>
              <Title>ba</Title>
            </LessonButton>
            <LessonButton lessonId="22" selected={isSelected("22")} onClick={select("22")}>
              <Title>be</Title>
            </LessonButton>
            <LessonButton lessonId="23" selected={isSelected("23")} onClick={select("23")}>
              <Title>bi</Title>
            </LessonButton>
            <LessonButton lessonId="24" selected={isSelected("24")} onClick={select("24")}>
              <Title>bo</Title>
            </LessonButton>
            <LessonButton lessonId="25" selected={isSelected("25")} onClick={select("25")}>
              <Title>bu</Title>
            </LessonButton>
          </div>
        </LessonButton>

        <LessonButton lessonId="26" selected={isSelected("26")} onClick={select("26")}>
          <Title>ba-bu</Title>
        </LessonButton>

        <LessonButton lessonId="27" selected={isSelected("27")} onClick={select("27")}>
          <Title>Lesson c</Title>
          <div className="inner-buttons">
            <LessonButton lessonId="27" selected={isSelected("27")} onClick={select("27")}>
              <Title>ca</Title>
            </LessonButton>
            <LessonButton lessonId="28" selected={isSelected("28")} onClick={select("28")}>
              <Title>co</Title>
            </LessonButton>
            <LessonButton lessonId="29" selected={isSelected("29")} onClick={select("29")}>
              <Title>cu</Title>
            </LessonButton>
          </div>
        </LessonButton>

        <LessonButton lessonId="30" selected={isSelected("30")} onClick={select("30")}>
          <Title>ca-cu</Title>
        </LessonButton>

        <LessonButton lessonId="43" selected={isSelected("43")} onClick={select("43")}>
          <Title>Consonant With Vowel Review<br/>b-f</Title>
        </LessonButton>

        <LessonButton lessonId="31" selected={isSelected("31")} onClick={select("31")}>
          <Title>Lesson d</Title>
          <div className="inner-buttons">
            <LessonButton lessonId="31" selected={isSelected("31")} onClick={select("31")}>
              <Title>da</Title>
            </LessonButton>
            <LessonButton lessonId="32" selected={isSelected("32")} onClick={select("32")}>
              <Title>de</Title>
            </LessonButton>
            <LessonButton lessonId="33" selected={isSelected("33")} onClick={select("33")}>
              <Title>di</Title>
            </LessonButton>
            <LessonButton lessonId="34" selected={isSelected("34")} onClick={select("34")}>
              <Title>do</Title>
            </LessonButton>
            <LessonButton lessonId="35" selected={isSelected("35")} onClick={select("35")}>
              <Title>du</Title>
            </LessonButton>
          </div>
        </LessonButton>

        <LessonButton lessonId="36" selected={isSelected("36")} onClick={select("36")}>
          <Title>da-du</Title>
        </LessonButton>

        <LessonButton lessonId="37" selected={isSelected("37")} onClick={select("37")}>
          <Title>Lesson f</Title>
          <div className="inner-buttons">
            <LessonButton lessonId="37" selected={isSelected("37")} onClick={select("37")}>
              <Title>fa</Title>
            </LessonButton>
            <LessonButton lessonId="38" selected={isSelected("38")} onClick={select("38")}>
              <Title>fe</Title>
            </LessonButton>
            <LessonButton lessonId="39" selected={isSelected("39")} onClick={select("39")}>
              <Title>fi</Title>
            </LessonButton>
            <LessonButton lessonId="40" selected={isSelected("40")} onClick={select("40")}>
              <Title>fo</Title>
            </LessonButton>
            <LessonButton lessonId="41" selected={isSelected("41")} onClick={select("41")}>
              <Title>fu</Title>
            </LessonButton>
          </div>
        </LessonButton>

        <LessonButton lessonId="42" selected={isSelected("42")} onClick={select("42")}>
          <Title>fa-fu</Title>
        </LessonButton>
      </Section>
    );
  }
}
