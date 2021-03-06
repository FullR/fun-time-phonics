import React from "react";
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
import Score from "components/admin-button-score";
import Letter from "components/admin-button-letter";

require("./style.scss");

export default class AdminSection6 extends React.Component {
  static title = "Consonant-Vowel Coarticulation";
  static levelRange = [89, 108];
  static Description = () => (
    <div>These lessons teach children the influence that the short vowel sound has on the consonants q<Dash/>t.&nbsp; Children also learn that these consonant<Dash/>vowel coarticulations are the beginning sounds used to form words.</div>
  );
  render() {
    const {level} = this.props;
    return (
      <AdminSection className="Admin-section-6">
        <AdminSectionColumn>
          <Row>
            <RowTitle>Consonant <Letter>q</Letter><br/>With Short Vowels</RowTitle>
            <ShortButton hidden/>
            <ShortButton hidden/>
            <ShortButton hidden/>
            <ShortButton hidden/>
            <ShortButton {...level("89")}>
              <Index>89</Index>
              <Title size="large" brief>qu</Title>
              <Score levelId="89"/>
            </ShortButton>
            <ShortButton hidden/>
          </Row>
          <Row>
            <RowTitle>Consonant <Letter>r</Letter><br/>With Short Vowels</RowTitle>
            <ShortButton {...level("90")}>
              <Index>90</Index>
              <Title size="large" brief>ra</Title>
              <Score levelId="90"/>
            </ShortButton>
            <ShortButton {...level("91")}>
              <Index>91</Index>
              <Title size="large" brief>re</Title>
              <Score levelId="91"/>
            </ShortButton>
            <ShortButton {...level("92")}>
              <Index>92</Index>
              <Title size="large" brief>ri</Title>
              <Score levelId="92"/>
            </ShortButton>
            <ShortButton {...level("93")}>
              <Index>93</Index>
              <Title size="large" brief>ro</Title>
              <Score levelId="93"/>
            </ShortButton>
            <ShortButton {...level("94")}>
              <Index>94</Index>
              <Title size="large" brief>ru</Title>
              <Score levelId="94"/>
            </ShortButton>
            <ShortButton {...level("95")} review>
              <Index>95</Index>
              <Title size="medium" brief>Review<br/><Letter size="large">r</Letter></Title>
              <Score levelId="95"/>
            </ShortButton>
          </Row>
          <Row>
            <RowTitle>Consonant <Letter>s</Letter><br/>With Short Vowels</RowTitle>
            <ShortButton {...level("96")}>
              <Index>96</Index>
              <Title size="large" brief>sa</Title>
              <Score levelId="96"/>
            </ShortButton>
            <ShortButton {...level("97")}>
              <Index>97</Index>
              <Title size="large" brief>se</Title>
              <Score levelId="97"/>
            </ShortButton>
            <ShortButton {...level("98")}>
              <Index>98</Index>
              <Title size="large" brief>si</Title>
              <Score levelId="98"/>
            </ShortButton>
            <ShortButton {...level("99")}>
              <Index>99</Index>
              <Title size="large" brief>so</Title>
              <Score levelId="99"/>
            </ShortButton>
            <ShortButton {...level("100")}>
              <Index>100</Index>
              <Title size="large" brief>su</Title>
              <Score levelId="100"/>
            </ShortButton>
            <ShortButton {...level("101")} review>
              <Index>101</Index>
              <Title size="medium" brief>Review<br/><Letter size="large">s</Letter></Title>
              <Score levelId="101"/>
            </ShortButton>
          </Row>
          <Row>
            <RowTitle>Consonant <Letter>t</Letter><br/>With Short Vowels</RowTitle>
            <ShortButton {...level("102")}>
              <Index>102</Index>
              <Title size="large" brief>ta</Title>
              <Score levelId="102"/>
            </ShortButton>
            <ShortButton {...level("103")}>
              <Index>103</Index>
              <Title size="large" brief>te</Title>
              <Score levelId="103"/>
            </ShortButton>
            <ShortButton {...level("104")}>
              <Index>104</Index>
              <Title size="large" brief>ti</Title>
              <Score levelId="104"/>
            </ShortButton>
            <ShortButton {...level("105")}>
              <Index>105</Index>
              <Title size="large" brief>to</Title>
              <Score levelId="105"/>
            </ShortButton>
            <ShortButton {...level("106")}>
              <Index>106</Index>
              <Title size="large" brief>tu</Title>
              <Score levelId="106"/>
            </ShortButton>
            <ShortButton {...level("107")} review>
              <Index>107</Index>
              <Title size="medium" brief>Review<br/><Letter size="large">t</Letter></Title>
              <Score levelId="107"/>
            </ShortButton>
          </Row>
        </AdminSectionColumn>

        <AdminSectionColumn>
          <ShortButton {...level("108")} assessment>
            <Index>108</Index>
            <Title size="medium" brief>
              Review<br/>
              <Letter size="large">b<Dash/>t</Letter>
            </Title>
            <Score levelId="108"/>
          </ShortButton>
        </AdminSectionColumn>
      </AdminSection>
    );
  }
}
