import React from "react";
import Underlined from "components/underlined";
import Dash from "components/dash";
import AdminSection from "components/admin-section";
import AdminSectionColumn from "components/admin-section-column";
import AdminSectionRow from "components/admin-section-row";
import AdminRowButton from "components/admin-row-button";
import ShortButton from "components/admin-short-button";
import SubGroup from "components/admin-sub-group";
import SubButton from "components/admin-sub-button";
import Row from "components/admin-section-row";
import RowTitle from "components/admin-row-title";
import Index from "components/admin-button-index";
import Title from "components/admin-button-title";

require("./style.scss");

export default class AdminSection6 extends React.Component {
  static title = "Consonant-Vowel Coarticulation";
  static levelRange = [89, 108];
  static Description = () => (
    <div>These lessons teach children the influence the consonants q-t have on the short vowel sounds.&nbsp; Children also learn that these consonant-vowel combinations are used to form words.</div>
  );
  render() {
    const {level} = this.props;
    return (
      <AdminSection className="Admin-section-6">
        <AdminSectionColumn>
          <Row>
            <RowTitle>Consonant "q" With Short Vowels</RowTitle>
            <ShortButton hidden/>
            <ShortButton hidden/>
            <ShortButton hidden/>
            <ShortButton hidden/>
            <ShortButton {...level("89")}><Index>89</Index><Title>qu</Title></ShortButton>
            <ShortButton hidden/>
          </Row>
          <Row>
            <RowTitle>Consonant "r" With Short Vowels</RowTitle>
            <ShortButton {...level("90")}><Index>90</Index><Title>ra</Title></ShortButton>
            <ShortButton {...level("91")}><Index>91</Index><Title>re</Title></ShortButton>
            <ShortButton {...level("92")}><Index>92</Index><Title>ri</Title></ShortButton>
            <ShortButton {...level("93")}><Index>93</Index><Title>ro</Title></ShortButton>
            <ShortButton {...level("94")}><Index>94</Index><Title>ru</Title></ShortButton>
            <ShortButton {...level("95")}><Index>95</Index><Title><Underlined>Review</Underlined><br/>Consonant "r" With Short Vowels</Title></ShortButton>
          </Row>
          <Row>
            <RowTitle>Consonant "s" With Short Vowels</RowTitle>
            <ShortButton {...level("96")}><Index>96</Index><Title>sa</Title></ShortButton>
            <ShortButton {...level("97")}><Index>97</Index><Title>se</Title></ShortButton>
            <ShortButton {...level("98")}><Index>98</Index><Title>si</Title></ShortButton>
            <ShortButton {...level("99")}><Index>99</Index><Title>so</Title></ShortButton>
            <ShortButton {...level("100")}><Index>100</Index><Title>su</Title></ShortButton>
            <ShortButton {...level("101")}><Index>101</Index><Title><Underlined>Review</Underlined><br/>Consonant "s" With Short Vowels</Title></ShortButton>
          </Row>
          <Row>
            <RowTitle>Consonant "t" With Short Vowels</RowTitle>
            <ShortButton {...level("102")}><Index>102</Index><Title>ta</Title></ShortButton>
            <ShortButton {...level("103")}><Index>103</Index><Title>te</Title></ShortButton>
            <ShortButton {...level("104")}><Index>104</Index><Title>ti</Title></ShortButton>
            <ShortButton {...level("105")}><Index>105</Index><Title>to</Title></ShortButton>
            <ShortButton {...level("106")}><Index>106</Index><Title>tu</Title></ShortButton>
            <ShortButton {...level("107")}><Index>107</Index><Title><Underlined>Review</Underlined><br/>Consonant "t" With Short Vowels</Title></ShortButton>
          </Row>
        </AdminSectionColumn>

        <AdminSectionColumn>
          <ShortButton {...level("108")}>
            <Index>108</Index>
            <Title>
              <Underlined>Review</Underlined><br/>
              Consonants "b"<Dash/>"t" With Short Vowels<br/>
            </Title>
          </ShortButton>
        </AdminSectionColumn>
      </AdminSection>
    );
  }
}
