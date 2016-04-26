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
  static lessons = "89-108";
  render() {
    const {level} = this.props;
    return (
      <AdminSection className="Admin-section-7">
        <AdminSectionColumn>
          <AdminRowButton {...level("89")}>
            <Title>Lesson Q</Title>
            <SubGroup small>
              <SubButton {...level("89")}><Index>89</Index><Title>qu</Title></SubButton>
            </SubGroup>
          </AdminRowButton>
          <AdminRowButton {...level("90")}>
            <Title>Lesson R</Title>
            <SubGroup small>
              <SubButton {...level("90")}><Index>90</Index><Title>ra</Title></SubButton>
              <SubButton {...level("91")}><Index>91</Index><Title>re</Title></SubButton>
              <SubButton {...level("92")}><Index>92</Index><Title>ri</Title></SubButton>
              <SubButton {...level("93")}><Index>93</Index><Title>ro</Title></SubButton>
              <SubButton {...level("94")}><Index>94</Index><Title>ru</Title></SubButton>
            </SubGroup>
          </AdminRowButton>
          <AdminRowButton {...level("96")}>
            <Title>Lesson S</Title>
            <SubGroup small>
              <SubButton {...level("96")}><Index>96</Index><Title>sa</Title></SubButton>
              <SubButton {...level("97")}><Index>97</Index><Title>se</Title></SubButton>
              <SubButton {...level("98")}><Index>98</Index><Title>si</Title></SubButton>
              <SubButton {...level("99")}><Index>99</Index><Title>so</Title></SubButton>
              <SubButton {...level("100")}><Index>100</Index><Title>su</Title></SubButton>
            </SubGroup>
          </AdminRowButton>
          <AdminRowButton {...level("102")}>
            <Title>Lesson T</Title>
            <SubGroup small>
              <SubButton {...level("102")}><Index>102</Index><Title>ta</Title></SubButton>
              <SubButton {...level("103")}><Index>103</Index><Title>te</Title></SubButton>
              <SubButton {...level("104")}><Index>104</Index><Title>ti</Title></SubButton>
              <SubButton {...level("105")}><Index>105</Index><Title>to</Title></SubButton>
              <SubButton {...level("106")}><Index>106</Index><Title>tu</Title></SubButton>
            </SubGroup>
          </AdminRowButton>
        </AdminSectionColumn>
        <AdminSectionColumn>
          <AdminSectionRow><AdminShortButton/></AdminSectionRow>
          <AdminSectionRow>
            <AdminShortButton {...level("95")}>
              <Index>95</Index>
              <Title>
                <Underlined>Review</Underlined><br/>
                Consonant "r" With Short Vowels
              </Title>
            </AdminShortButton>
          </AdminSectionRow>
          <AdminSectionRow>
            <AdminShortButton {...level("101")}>
              <Index>101</Index>
              <Title>
                <Underlined>Review</Underlined><br/>
                Consonant "s" With Short Vowels
              </Title>
            </AdminShortButton>
          </AdminSectionRow>
          <AdminSectionRow>
            <AdminShortButton {...level("107")}>
              <Index>107</Index>
              <Title>
                <Underlined>Review</Underlined><br/>
                Consonant "t" With Short Vowels
              </Title>
            </AdminShortButton>
          </AdminSectionRow>
        </AdminSectionColumn>

        <AdminSectionColumn>
          <AdminShortButton {...level("108")}>
            <Index>108</Index>
            <Title>
              <Underlined>Review</Underlined><br/>
              Consonants "b"<Dash/>"t" With Short Vowels<br/>
            </Title>
          </AdminShortButton>
        </AdminSectionColumn>
      </AdminSection>
    );
  }
}
