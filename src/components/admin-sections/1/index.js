import React from "react";
import AdminSection from "components/admin-section";
import AdminRowButton from "components/admin-row-button";
import AdminSectionRow from "components/admin-section-row";
import AdminShortButton from "components/admin-short-button";
import AdminSubGroup from "components/admin-sub-group";
import AdminSubButton from "components/admin-sub-button";
import AdminRowTitle from "components/admin-row-title";
import Title from "components/admin-button-title";
import Index from "components/admin-button-index";
require("./style.scss");

export default class AdminSection1 extends React.Component {
  static title = "Word Sounds";
  static levelRange = [1, 7];
  static Description = () => (
    <div>
      Lessons 1-3 teach children that words are made up of different sounds by teaching them to identify beginning and ending sounds in words.&nbsp; Next, lessons 4 and 5 teach children to identify words that rhyme.&nbsp; Lessons 6 and 7 provide children with all the sounds in a word and then ask them to identify the word from its parts.
    </div>
  );

  render() {
    const {level} = this.props;
    return (
      <AdminSection className="Admin-section-1">
        <AdminSectionRow>
          <AdminRowTitle>1.&nbsp; Beginning Sounds</AdminRowTitle>
          <AdminShortButton {...level("1")}>
            <Title>/t/</Title>
          </AdminShortButton>
          <AdminShortButton {...level("1-m")}>
            <Title>/m/</Title>
          </AdminShortButton>
          <AdminShortButton {...level("1-l")}>
            <Title>/l/</Title>
          </AdminShortButton>
          <AdminShortButton {...level("1-n")}>
            <Title>/n/</Title>
          </AdminShortButton>
          <AdminShortButton {...level("1-r")}>
            <Title>/r/</Title>
          </AdminShortButton>
          <AdminShortButton {...level("1-g")}>
            <Title>/g/</Title>
          </AdminShortButton>
          <AdminShortButton {...level("1-s")}>
            <Title>/s/</Title>
          </AdminShortButton>
        </AdminSectionRow>

        <AdminSectionRow>
          <AdminRowTitle>2.&nbsp; Ending Sounds</AdminRowTitle>
          <AdminShortButton {...level("2")}>
            <Title>/t/</Title>
          </AdminShortButton>
          <AdminShortButton {...level("2-d")}>
            <Title>/d/</Title>
          </AdminShortButton>
          <AdminShortButton {...level("2-p")}>
            <Title>/p/</Title>
          </AdminShortButton>
          <AdminShortButton {...level("2-k")}>
            <Title>/k/</Title>
          </AdminShortButton>
          <AdminShortButton {...level("2-f")}>
            <Title>/f/</Title>
          </AdminShortButton>
          <AdminShortButton {...level("2-m")}>
            <Title>/m/</Title>
          </AdminShortButton>
          <AdminShortButton {...level("2-b")}>
            <Title>/b/</Title>
          </AdminShortButton>
        </AdminSectionRow>

        <AdminSectionRow>
          <AdminRowTitle hidden/>
          <AdminShortButton {...level("3")}>
            <Index>3</Index>
            <Title>Beginning and Ending Sounds</Title>
          </AdminShortButton>
          <AdminShortButton {...level("4")}>
            <Index>4</Index>
            <Title>Rhyme Match</Title>
          </AdminShortButton>
          <AdminShortButton {...level("5")}>
            <Index>5</Index>
            <Title>Rhyme Time</Title>
          </AdminShortButton>
          <AdminShortButton {...level("6")}>
            <Index>6</Index>
            <Title>Say the Word</Title>
          </AdminShortButton>
          <AdminShortButton {...level("7")}>
            <Index>7</Index>
            <Title>Echo the Word</Title>
          </AdminShortButton>
          <AdminShortButton hidden/>
          <AdminShortButton hidden/>
        </AdminSectionRow>
      </AdminSection>
    );
  }
}
