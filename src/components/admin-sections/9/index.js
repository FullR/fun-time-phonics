import React from "react";
import AdminSection from "components/admin-section";
import AdminSectionRow from "components/admin-section-row";
import AdminShortButton from "components/admin-short-button";
import Title from "components/admin-button-title";
import Index from "components/admin-button-index";
require("./style.scss");

export default class AdminSection1 extends React.Component {
  static title = "Co-Articulation Review";
  static lessons = "123-126";
  render() {
    const {level} = this.props;
    return (
      <AdminSection className="Admin-section-9">
        <AdminSectionRow>
          <AdminShortButton {...level("123")}>
            <Index>123</Index>
            <Title>Identifying Ending Sounds</Title>
          </AdminShortButton>
        </AdminSectionRow>
        <AdminSectionRow>
          <AdminShortButton {...level("124")}>
            <Index>124</Index>
            <Title>Identifying Vowel Sounds</Title>
          </AdminShortButton>
        </AdminSectionRow>
        <AdminSectionRow>
          <AdminShortButton {...level("125")}>
            <Index>125</Index>
            <Title>Reading First Words</Title>
          </AdminShortButton>
        </AdminSectionRow>
        <AdminSectionRow>
          <AdminShortButton {...level("126")}>
            <Index>126</Index>
            <Title>Reading for Meaning</Title>
          </AdminShortButton>
        </AdminSectionRow>
      </AdminSection>
    );
  }
}
