import React from "react";
import AdminSection from "components/admin-section";
import AdminSectionRow from "components/admin-section-row";
import AdminShortButton from "components/admin-short-button";
import Title from "components/admin-button-title";
import Index from "components/admin-button-index";
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
            <Title>Short Vowel "a" Sound</Title>
          </AdminShortButton>
          <AdminShortButton {...level("9")}>
            <Index>9</Index>
            <Title>Short Vowel "e" Sound</Title>
          </AdminShortButton>
          <AdminShortButton {...level("10")}>
            <Index>10</Index>
            <Title>Short Vowel "i" Sound</Title>
          </AdminShortButton>
          <AdminShortButton {...level("11")}>
            <Index>11</Index>
            <Title>Short Vowel "o" Sound</Title>
          </AdminShortButton>
          <AdminShortButton {...level("12")}>
            <Index>12</Index>
            <Title>Short Vowel "u" Sound</Title>
          </AdminShortButton>
          <AdminShortButton {...level("13")}>
            <Index>13</Index>
            <Title>Short Vowel Sounds</Title>
          </AdminShortButton>
        </AdminSectionRow>
        <AdminSectionRow>
          <AdminShortButton {...level("14")}>
            <Index>14</Index>
            <Title>Forming New Words</Title>
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
            <Title>Short Vowel "a"</Title>
          </AdminShortButton>
          <AdminShortButton {...level("16")}>
            <Index>16</Index>
            <Title>Short Vowel "e"</Title>
          </AdminShortButton>
          <AdminShortButton {...level("17")}>
            <Index>17</Index>
            <Title>Short Vowel "i"</Title>
          </AdminShortButton>
          <AdminShortButton {...level("18")}>
            <Index>18</Index>
            <Title>Short Vowel "o"</Title>
          </AdminShortButton>
          <AdminShortButton {...level("19")}>
            <Index>19</Index>
            <Title>Short Vowel "u"</Title>
          </AdminShortButton>
          <AdminShortButton {...level("20")}>
            <Index>20</Index>
            <Title>Review: Short Vowel Sounds</Title>
          </AdminShortButton>
        </AdminSectionRow>
      </AdminSection>
    );
  }
}
