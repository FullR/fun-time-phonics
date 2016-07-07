import React from "react";
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
import Score from "components/admin-button-score";
import Letter from "components/admin-button-letter";

require("./style.scss");

export default class AdminSection7 extends React.Component {
  static title = "Consonant-Vowel Coarticulation";
  static levelRange = [109, 122];
  static Description = () => (
    <div>These lessons teach children the influence that the short vowel sound has on the consonants v<Dash/>z.&nbsp; Children also learn that these consonant<Dash/>vowel coarticulations are the beginning sounds used to form words.</div>
  );
  render() {
    const {level} = this.props;
    return (
      <AdminSection className="Admin-section-7">
        <AdminSectionColumn>
          <AdminSectionRow>
            <RowTitle>Consonant <Letter>v</Letter><br/>With Short Vowels</RowTitle>
            <ShortButton {...level("109")}>
              <Index>109</Index>
              <Title size="large">va</Title>
              <Score levelId="109"/>
            </ShortButton>
            <ShortButton {...level("110")}>
              <Index>110</Index>
              <Title size="large">ve</Title>
              <Score levelId="110"/>
            </ShortButton>
            <ShortButton {...level("111")}>
              <Index>111</Index>
              <Title size="large">vi</Title>
              <Score levelId="111"/>
            </ShortButton>
            <ShortButton {...level("112")}>
              <Index>112</Index>
              <Title size="large">vo</Title>
              <Score levelId="112"/>
            </ShortButton>
            <ShortButton {...level("113")} review>
              <Index>113</Index>
              <Title size="medium">Review<br/><Letter size="large">v</Letter></Title>
              <Score levelId="113"/>
            </ShortButton>
          </AdminSectionRow>
          <AdminSectionRow>
            <RowTitle>Consonant <Letter>w</Letter><br/>With Short Vowels</RowTitle>
            <ShortButton {...level("114")}>
              <Index>114</Index>
              <Title size="large">wa</Title>
              <Score levelId="114"/>
            </ShortButton>
            <ShortButton {...level("115")}>
              <Index>115</Index>
              <Title size="large">we</Title>
              <Score levelId="115"/>
            </ShortButton>
            <ShortButton {...level("116")}>
              <Index>116</Index>
              <Title size="large">wi</Title>
              <Score levelId="116"/>
            </ShortButton>
            <ShortButton hidden/>
            <ShortButton {...level("117")} review>
              <Index>117</Index>
              <Title size="medium">Review<br/><Letter size="large">w</Letter></Title>
              <Score levelId="117"/>
            </ShortButton>
          </AdminSectionRow>
          <AdminSectionRow>
            <RowTitle/>
            <ShortButton {...level("118")}>
              <Index>118</Index>
              <Title size="medium">Consonant <Letter>x</Letter><br/>Ending Sound</Title>
              <Score levelId="118"/>
            </ShortButton>
            <ShortButton {...level("119")}>
              <Index>119</Index>
              <Title size="medium">Consonant <Letter>y</Letter><br/>With<br/>Short Vowels</Title>
              <Score levelId="119"/>
            </ShortButton>
            <ShortButton {...level("120")}>
              <Index>120</Index>
              <Title size="medium">Consonant <Letter>z</Letter><br/>With<br/>Short Vowels</Title>
              <Score levelId="120"/>
            </ShortButton>
            <ShortButton hidden/>
            <ShortButton {...level("121")} review>
              <Index>121</Index>
              <Title size="medium">Review<br/><Letter size="large">y<Dash/>z</Letter></Title>
              <Score levelId="121"/>
            </ShortButton>
          </AdminSectionRow>
        </AdminSectionColumn>

        <AdminSectionColumn>
          <ShortButton {...level("122")} assessment>
            <Index>122</Index>
            <Title size="medium">Coarticulation Assessment<br/><Letter size="large">b<Dash/>z</Letter></Title>
            <Score levelId="122"/>
          </ShortButton>
        </AdminSectionColumn>
      </AdminSection>
    );
  }
}
