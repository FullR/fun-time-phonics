import React from "react";
import AdminSection from "components/admin-section";
import AdminSectionRow from "components/admin-section-row";
import AdminShortButton from "components/admin-short-button";
import Title from "components/admin-button-title";
import Index from "components/admin-button-index";
import Score from "components/admin-button-score";
import Letter from "components/admin-button-letter";
require("./style.scss");

export default class AdminSection2 extends React.Component {
  static title = "Short Vowel Sounds";
  static levelRange = [8, 20];
  static Description = () => (
    <div>Lessons 8-14 teach children to identify the 5 short vowel sounds.&nbsp; Lessons 15-20 teach children which letter makes each short vowel sound.</div>
  );
  render() {
    const {level} = this.props;
    return (
      <AdminSection className="Admin-section-2">
        <AdminSectionRow>
          <AdminShortButton {...level("8")}>
            <Index>8</Index>
            <Title size="medium">Short Vowel<br/><Letter size="large">a</Letter>&nbsp; Sound</Title>
            <Score levelId="8"/>
          </AdminShortButton>
          <AdminShortButton {...level("9")}>
            <Index>9</Index>
            <Title size="medium">Short Vowel<br/><Letter size="large">e</Letter>&nbsp; Sound</Title>
            <Score levelId="9"/>
          </AdminShortButton>
          <AdminShortButton {...level("10")}>
            <Index>10</Index>
            <Title size="medium">Short Vowel<br/><Letter size="large">i</Letter>&nbsp; Sound</Title>
            <Score levelId="10"/>
          </AdminShortButton>
          <AdminShortButton {...level("11")}>
            <Index>11</Index>
            <Title size="medium">Short Vowel<br/><Letter size="large">o</Letter>&nbsp; Sound</Title>
            <Score levelId="11"/>
          </AdminShortButton>
          <AdminShortButton {...level("12")}>
            <Index>12</Index>
            <Title size="medium">Short Vowel<br/><Letter size="large">u</Letter>&nbsp; Sound</Title>
            <Score levelId="12"/>
          </AdminShortButton>
          <AdminShortButton {...level("13")}>
            <Index>13</Index>
            <Title size="medium">Short<br/>Vowel Sounds</Title>
            <Score levelId="13"/>
          </AdminShortButton>
        </AdminSectionRow>
        <AdminSectionRow>
          <AdminShortButton {...level("14")}>
            <Index>14</Index>
            <Title size="medium">Forming<br/>New Words</Title>
            <Score levelId="14"/>
          </AdminShortButton>
          <AdminShortButton hidden/>
          <AdminShortButton hidden/>
          <AdminShortButton hidden/>
          <AdminShortButton hidden/>
          <AdminShortButton hidden/>
        </AdminSectionRow>
        <AdminSectionRow>
          <AdminShortButton {...level("15")}>
            <Index>15</Index>
            <Title size="medium">Short Vowel<br/><Letter size="large">a</Letter></Title>
            <Score levelId="15"/>
          </AdminShortButton>
          <AdminShortButton {...level("16")}>
            <Index>16</Index>
            <Title size="medium">Short Vowel<br/><Letter size="large">e</Letter></Title>
            <Score levelId="16"/>
          </AdminShortButton>
          <AdminShortButton {...level("17")}>
            <Index>17</Index>
            <Title size="medium">Short Vowel<br/><Letter size="large">i</Letter></Title>
            <Score levelId="17"/>
          </AdminShortButton>
          <AdminShortButton {...level("18")}>
            <Index>18</Index>
            <Title size="medium">Short Vowel<br/><Letter size="large">o</Letter></Title>
            <Score levelId="18"/>
          </AdminShortButton>
          <AdminShortButton {...level("19")}>
            <Index>19</Index>
            <Title size="medium">Short Vowel<br/><Letter size="large">u</Letter></Title>
            <Score levelId="19"/>
          </AdminShortButton>
          <AdminShortButton {...level("20")} review>
            <Index>20</Index>
            <Title size="medium">Review<br/>Short Vowels</Title>
            <Score levelId="20"/>
          </AdminShortButton>
        </AdminSectionRow>
      </AdminSection>
    );
  }
}
