import React from "react";
import LessonButton from "components/admin/lesson-button";
import Section from "components/admin/section";
const {Title} = LessonButton;


export default class Section1 extends React.Component {
  render() {
    const {selectedLevel, onSelectLevel} = this.props;
    const isSelected = (lessonId) => lessonId === selectedLevel;
    const select = (lessonId) => () => onSelectLevel(lessonId);

    return (
      <Section {...this.props} className="admin-section-1">
        <LessonButton lessonId="1" selected={isSelected("1")} onClick={select("1")}>
          <Title>Beginning Sounds</Title>
          <div className="sub-lessons">
            <LessonButton lessonId="1" className="sub-lesson-button" selected={isSelected("1")} onClick={select("1")}>
              <div className="sub-lesson__title">/t/</div>
            </LessonButton>
            <LessonButton lessonId="1-m" className="sub-lesson-button" selected={isSelected("1-m")} onClick={select("1-m")}>
              <div className="sub-lesson__title">/m/</div>
            </LessonButton>
            <LessonButton lessonId="1-l" className="sub-lesson-button" selected={isSelected("1-l")} onClick={select("1-l")}>
              <div className="sub-lesson__title">/l/</div>
            </LessonButton>
            <LessonButton lessonId="1-n" className="sub-lesson-button" selected={isSelected("1-n")} onClick={select("1-n")}>
              <div className="sub-lesson__title">/n/</div>
            </LessonButton>
            <LessonButton lessonId="1-r" className="sub-lesson-button" selected={isSelected("1-r")} onClick={select("1-r")}>
              <div className="sub-lesson__title">/r/</div>
            </LessonButton>
            <LessonButton lessonId="1-g" className="sub-lesson-button" selected={isSelected("1-g")} onClick={select("1-g")}>
              <div className="sub-lesson__title">/g/</div>
            </LessonButton>
            <LessonButton lessonId="1-s" className="sub-lesson-button" selected={isSelected("1-s")} onClick={select("1-s")}>
              <div className="sub-lesson__title">/s/</div>
            </LessonButton>
          </div>
        </LessonButton>

        <LessonButton lessonId="2" selected={isSelected("2")} onClick={select("2")}>
          <Title>Ending Sounds</Title>
          <div className="sub-lessons">
            <LessonButton lessonId="2" className="sub-lesson-button" selected={isSelected("2")} onClick={select("2")}>
              <div className="sub-lesson__title">/t/</div>
            </LessonButton>
            <LessonButton lessonId="2-d" className="sub-lesson-button" selected={isSelected("2-d")} onClick={select("2-d")}>
              <div className="sub-lesson__title">/d/</div>
            </LessonButton>
            <LessonButton lessonId="2-p" className="sub-lesson-button" selected={isSelected("2-p")} onClick={select("2-p")}>
              <div className="sub-lesson__title">/p/</div>
            </LessonButton>
            <LessonButton lessonId="2-k" className="sub-lesson-button" selected={isSelected("2-k")} onClick={select("2-k")}>
              <div className="sub-lesson__title">/k/</div>
            </LessonButton>
            <LessonButton lessonId="2-f" className="sub-lesson-button" selected={isSelected("2-f")} onClick={select("2-f")}>
              <div className="sub-lesson__title">/f/</div>
            </LessonButton>
            <LessonButton lessonId="2-m" className="sub-lesson-button" selected={isSelected("2-m")} onClick={select("2-m")}>
              <div className="sub-lesson__title">/m/</div>
            </LessonButton>
            <LessonButton lessonId="2-b" className="sub-lesson-button" selected={isSelected("2-b")} onClick={select("2-b")}>
              <div className="sub-lesson__title">/b/</div>
            </LessonButton>
          </div>
        </LessonButton>

        <LessonButton lessonId="3" selected={isSelected("3")} onClick={select("3")}>
          <Title>Beginning and Ending Sounds</Title>
        </LessonButton>

        <LessonButton lessonId="4" selected={isSelected("4")} onClick={select("4")}>
          <Title>Rhyme Match</Title>
        </LessonButton>

        <LessonButton lessonId="5" selected={isSelected("5")} onClick={select("5")}>
          <Title>Rhyme Time</Title>
        </LessonButton>

        <LessonButton lessonId="6" selected={isSelected("6")} onClick={select("6")}>
          <Title>Say the Word</Title>
        </LessonButton>

        <LessonButton lessonId="7" selected={isSelected("7")} onClick={select("7")}>
          <Title>Echo the Word</Title>
        </LessonButton>
      </Section>
    );
  }
}
