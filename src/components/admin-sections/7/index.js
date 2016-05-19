import React from "react";
import Underlined from "components/underlined";
import Dash from "components/dash";
import AdminSection from "components/admin-section";
import AdminSectionColumn from "components/admin-section-column";
import AdminSectionRow from "components/admin-section-row";
import AdminRowButton from "components/admin-row-button";
import ShortButton from "components/admin-short-button";
import SubGroup from "components/admin-sub-group";
import RowTitle from "components/admin-row-title";
import Index from "components/admin-button-index";
import Title from "components/admin-button-title";

require("./style.scss");

export default class AdminSection7 extends React.Component {
  static title = "Consonant-Vowel Coarticulation";
  static levelRange = [109, 122];
  static Description = () => (
    <div>These lessons teach children the influence the consonants v-z have on the short vowel sounds.&nbsp; Children also learn that these consonant-vowel combinations are used to form words.</div>
  );
  render() {
    const {level} = this.props;
    return (
      <AdminSection className="Admin-section-7">
        <AdminSectionColumn>
          <AdminSectionRow>
            <RowTitle>Consonant "v" With Short Vowels</RowTitle>
            <ShortButton {...level("109")}><Index>109</Index><Title>va</Title></ShortButton>
            <ShortButton {...level("110")}><Index>110</Index><Title>ve</Title></ShortButton>
            <ShortButton {...level("111")}><Index>111</Index><Title>vi</Title></ShortButton>
            <ShortButton {...level("112")}><Index>112</Index><Title>vo</Title></ShortButton>
            <ShortButton hidden/>
            <ShortButton {...level("113")}><Index>113</Index><Title><Underlined>Review</Underlined><br/>va<Dash/>vo</Title></ShortButton>
          </AdminSectionRow>
          <AdminSectionRow>
            <RowTitle>Consonant "w" With Short Vowels</RowTitle>
            <ShortButton {...level("114")}><Index>114</Index><Title>wa</Title></ShortButton>
            <ShortButton {...level("115")}><Index>115</Index><Title>we</Title></ShortButton>
            <ShortButton {...level("116")}><Index>116</Index><Title>wi</Title></ShortButton>
            <ShortButton hidden/>
            <ShortButton hidden/>
            <ShortButton {...level("117")}><Index>117</Index><Title><Underlined>Review</Underlined><br/>wa<Dash/>wi</Title></ShortButton>
          </AdminSectionRow>
          <AdminSectionRow>
            <RowTitle/>
            <ShortButton {...level("118")}><Index>118</Index><Title>Consonant "x" Ending Sound</Title></ShortButton>
            <ShortButton {...level("119")}><Index>119</Index><Title>Consonant "y" With Short Vowels</Title></ShortButton>
            <ShortButton hidden/>
            <ShortButton hidden/>
            <ShortButton hidden/>
            <ShortButton hidden/>
          </AdminSectionRow>
          <AdminSectionRow>
            <RowTitle/>
            <ShortButton {...level("120")}><Index>120</Index><Title>Consonant "z" With Short Vowels</Title></ShortButton>
            <ShortButton hidden/>
            <ShortButton hidden/>
            <ShortButton hidden/>
            <ShortButton hidden/>
            <ShortButton {...level("121")}><Index>121</Index><Title><Underlined>Review</Underlined><br/>Consonants "y" and "z" With Short Vowels</Title></ShortButton>
          </AdminSectionRow>
        </AdminSectionColumn>

        <AdminSectionColumn>
          <ShortButton {...level("122")}>
            <Index>122</Index>
            <Title>Co<Dash/>Articulation Assessment</Title>
          </ShortButton>
        </AdminSectionColumn>
      </AdminSection>
    );
  }
}
