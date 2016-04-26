import React from "react";
import Underlined from "components/underlined";
import Dash from "components/dash";
import AdminSection from "components/admin-section";
import AdminSectionColumn from "components/admin-section-column";
import AdminSectionRow from "components/admin-section-row";
import AdminRowButton from "components/admin-row-button";
import AdminShortButton from "components/admin-short-button";
import SubGroup from "components/admin-sub-group";
import SubButton from "components/admin-sub-button";
import Index from "components/admin-button-index";
import Title from "components/admin-button-title";

require("./style.scss");

export default class AdminSection1 extends React.Component {
  static title = "Co-Articulation";
  static lessons = "109-122";
  render() {
    const {level} = this.props;
    return (
      <AdminSection className="Admin-section-8">
        <AdminSectionColumn>
          <AdminSectionRow>
            <AdminRowButton {...level("109")}>
              <Title>Lesson V</Title>
              <SubGroup small>
                <SubButton {...level("109")}><Index>109</Index><Title>va</Title></SubButton>
                <SubButton {...level("110")}><Index>110</Index><Title>ve</Title></SubButton>
                <SubButton {...level("111")}><Index>111</Index><Title>vi</Title></SubButton>
                <SubButton {...level("112")}><Index>112</Index><Title>vo</Title></SubButton>
              </SubGroup>
            </AdminRowButton>
            <AdminShortButton {...level("113")}>
              <Index>113</Index>
              <Title>
                <Underlined>Review</Underlined><br/>
                va<Dash/>vo
              </Title>
            </AdminShortButton>
          </AdminSectionRow>
          <AdminSectionRow>
            <AdminRowButton {...level("114")}>
              <Title>Lesson W</Title>
              <SubGroup small>
                <SubButton {...level("114")}><Index>114</Index><Title>wa</Title></SubButton>
                <SubButton {...level("115")}><Index>115</Index><Title>we</Title></SubButton>
                <SubButton {...level("116")}><Index>116</Index><Title>wi</Title></SubButton>
              </SubGroup>
            </AdminRowButton>
            <AdminShortButton {...level("117")}>
              <Index>117</Index>
              <Title>
                <Underlined>Review</Underlined><br/>
                wa<Dash/>wi
              </Title>
            </AdminShortButton>
          </AdminSectionRow>
          <AdminSectionRow>
            <AdminShortButton {...level("118")}>
              <Index>118</Index>
              <Title className="Admin-section-8__underlined">Consonant "x" Ending Sound</Title>
            </AdminShortButton>
            <AdminRowButton className="Admin-section-8__odd-button" {...level("119")}>
              <Index>119</Index>
              <Title>Consonant "y" With Short Vowels</Title>
            </AdminRowButton>
          </AdminSectionRow>
          <AdminSectionRow>
            <AdminRowButton {...level("120")}>
              <Index>120</Index>
              <Title>Consonant "z" With Short Vowels</Title>
            </AdminRowButton>
            <AdminShortButton {...level("121")}>
              <Index>121</Index>
              <Title>
                <Underlined>Review</Underlined><br/>
                Consonants "y" and "z" With Short Vowels
              </Title>
            </AdminShortButton>
          </AdminSectionRow>
        </AdminSectionColumn>

        <AdminSectionColumn>
          <AdminShortButton {...level("122")}>
            <Index>122</Index>
            <Title>Co<Dash/>Articulation Assessment</Title>
          </AdminShortButton>
        </AdminSectionColumn>
      </AdminSection>
    );
  }
}
