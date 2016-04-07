import React from "react";
import AdminSection from "components/admin-section";
import AdminSectionRow from "components/admin-section-row";
import AdminShortButton from "components/admin-short-button";
import Title from "components/admin-button-title";
import Index from "components/admin-button-index";
require("./style.scss");

export default class AdminSection3 extends React.Component {
  static title = "Short Vowels Letter";
  static lessons = "15-20";
  render() {
    const {level} = this.props;
    return (
      <AdminSection className="Admin-section-3">
        <AdminSectionRow>
          <AdminShortButton {...level("15")}>
            <Index>15</Index>
            <Title>The Letter "a"</Title>
          </AdminShortButton>
          <AdminShortButton {...level("16")}>
            <Index>16</Index>
            <Title>The Letter "e"</Title>
          </AdminShortButton>
          <AdminShortButton {...level("17")}>
            <Index>17</Index>
            <Title>The Letter "i"</Title>
          </AdminShortButton>
          <AdminShortButton {...level("18")}>
            <Index>18</Index>
            <Title>The Letter "o"</Title>
          </AdminShortButton>
          <AdminShortButton {...level("19")}>
            <Index>19</Index>
            <Title>The Letter "u"</Title>
          </AdminShortButton>
        </AdminSectionRow>

        <AdminSectionRow>
          <AdminShortButton {...level("20")}>
            <Index>20</Index>
            <Title>Short Vowel Review</Title>
          </AdminShortButton>
        </AdminSectionRow>
      </AdminSection>
    );
  }
}
