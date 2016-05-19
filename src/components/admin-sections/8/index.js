import React from "react";
import AdminSection from "components/admin-section";
import AdminSectionRow from "components/admin-section-row";
import AdminShortButton from "components/admin-short-button";
import Title from "components/admin-button-title";
import Index from "components/admin-button-index";
require("./style.scss");

export default class AdminSection8 extends React.Component {
  static title = "Reading First Words";
  static levelRange = [123, 126];
  static Description = () => (
    <div>Lessons 123 and 124 review beginning and ending sounds.&nbsp; In lesson 125 children apply consonant-vowel articulation with an ending sound to read their first words.&nbsp; Lesson 126 has children read two words to identify the picture described by the words.</div>
  );
  render() {
    const {level} = this.props;
    return (
      <AdminSection className="Admin-section-8">
        <AdminSectionRow>
          <AdminShortButton {...level("123")}>
            <Index>123</Index>
            <Title>Identifying Ending Sounds</Title>
          </AdminShortButton>
          <AdminShortButton {...level("124")}>
            <Index>124</Index>
            <Title>Identifying Vowel Sounds</Title>
          </AdminShortButton>
          <AdminShortButton {...level("125")}>
            <Index>125</Index>
            <Title>Reading First Words</Title>
          </AdminShortButton>
          <AdminShortButton {...level("126")}>
            <Index>126</Index>
            <Title>Reading for Meaning</Title>
          </AdminShortButton>
        </AdminSectionRow>
      </AdminSection>
    );
  }
}
