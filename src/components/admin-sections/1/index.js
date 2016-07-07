import React from "react";
import Verdana1 from "components/verdana-1";
import Dash from "components/dash";
import AdminSection from "components/admin-section";
import AdminRowButton from "components/admin-row-button";
import AdminSectionRow from "components/admin-section-row";
import AdminShortButton from "components/admin-short-button";
import AdminSubGroup from "components/admin-sub-group";
import AdminSubButton from "components/admin-sub-button";
import AdminRowTitle from "components/admin-row-title";
import Title from "components/admin-button-title";
import Index from "components/admin-button-index";
import Score from "components/admin-button-score";
require("./style.scss");

export default class AdminSection1 extends React.Component {
  static title = "Word Sounds";
  static levelRange = [1, 7];
  static Description = () => (
    <div>
      Lessons <Verdana1 color="#555"/><Dash/>3 teach children that words are made up of different sounds by teaching them to identify beginning and ending sounds in words.&nbsp;Not all letter sounds will be covered in these lessons, but they will be covered in later lessons.&nbsp; Lessons 4 and 5 teach children to identify words that rhyme.&nbsp; Lessons 6 and 7 provide children with all the sounds in a word and then ask them to identify the word from its parts.
    </div>
  );

  render() {
    const {level} = this.props;
    return (
      <AdminSection className="Admin-section-1">
        <AdminSectionRow>
          <AdminRowTitle stretchContent>
            <div>1.&nbsp;&nbsp;</div>
            <div>Beginning Sounds</div>
          </AdminRowTitle>
          <AdminShortButton {...level("1")}>
            <Title size="large">t</Title>
            <Score levelId="1"/>
          </AdminShortButton>
          <AdminShortButton {...level("1-m")}>
            <Title size="large">m</Title>
            <Score levelId="1-m"/>
          </AdminShortButton>
          <AdminShortButton {...level("1-l")}>
            <Title size="large">l</Title>
            <Score levelId="1-l"/>
          </AdminShortButton>
          <AdminShortButton {...level("1-n")}>
            <Title size="large">n</Title>
            <Score levelId="1-n"/>
          </AdminShortButton>
          <AdminShortButton {...level("1-r")}>
            <Title size="large">r</Title>
            <Score levelId="1-r"/>
          </AdminShortButton>
          <AdminShortButton {...level("1-g")}>
            <Title size="large">g</Title>
            <Score levelId="1-g"/>
          </AdminShortButton>
          <AdminShortButton {...level("1-s")}>
            <Title size="large">s</Title>
            <Score levelId="1-s"/>
          </AdminShortButton>
        </AdminSectionRow>

        <AdminSectionRow>
          <AdminRowTitle stretchContent>
            <div>2.&nbsp;&nbsp;</div>
            <div>Ending Sounds</div>
          </AdminRowTitle>
          <AdminShortButton {...level("2")}>
            <Title size="large">t</Title>
            <Score levelId="2"/>
          </AdminShortButton>
          <AdminShortButton {...level("2-d")}>
            <Title size="large">d</Title>
            <Score levelId="2-d"/>
          </AdminShortButton>
          <AdminShortButton {...level("2-p")}>
            <Title size="large">p</Title>
            <Score levelId="2-p"/>
          </AdminShortButton>
          <AdminShortButton {...level("2-k")}>
            <Title size="large">k</Title>
            <Score levelId="2-k"/>
          </AdminShortButton>
          <AdminShortButton {...level("2-f")}>
            <Title size="large">f</Title>
            <Score levelId="2-f"/>
          </AdminShortButton>
          <AdminShortButton {...level("2-m")}>
            <Title size="large">m</Title>
            <Score levelId="2-m"/>
          </AdminShortButton>
          <AdminShortButton {...level("2-b")}>
            <Title size="large">b</Title>
            <Score levelId="2-b"/>
          </AdminShortButton>
        </AdminSectionRow>

        <AdminSectionRow>
          <AdminRowTitle hidden/>
          <AdminShortButton {...level("3")}>
            <Index>3</Index>
            <Title size="medium">Beginning<br/>& Ending<br/>Sounds</Title>
            <Score levelId="3"/>
          </AdminShortButton>
          <AdminShortButton {...level("4")}>
            <Index>4</Index>
            <Title size="medium">Rhyme<br/>Match</Title>
            <Score levelId="4"/>
          </AdminShortButton>
          <AdminShortButton {...level("5")}>
            <Index>5</Index>
            <Title size="medium">Rhyme<br/>Time</Title>
            <Score levelId="5"/>
          </AdminShortButton>
          <AdminShortButton {...level("6")}>
            <Index>6</Index>
            <Title size="medium">Say<br/>the Word</Title>
            <Score levelId="6"/>
          </AdminShortButton>
          <AdminShortButton {...level("7")}>
            <Index>7</Index>
            <Title size="medium">Echo<br/>the Word</Title>
            <Score levelId="7"/>
          </AdminShortButton>
          <AdminShortButton hidden/>
          <AdminShortButton hidden/>
        </AdminSectionRow>
      </AdminSection>
    );
  }
}
