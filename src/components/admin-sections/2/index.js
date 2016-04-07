import React from "react";
import AdminSection from "components/admin-section";
import AdminSectionRow from "components/admin-section-row";
import AdminShortButton from "components/admin-short-button";
import Title from "components/admin-button-title";
import Index from "components/admin-button-index";
require("./style.scss");

export default class AdminSection2 extends React.Component {
  static title = "Short Sounds";
  static lessons = "8-14";
  render() {
    const {level} = this.props;
    return (
      <AdminSection className="Admin-section-2">
        <AdminSectionRow>
          <AdminShortButton {...level("8")}>
            <Index>8</Index>
            <Title>Short a</Title>
          </AdminShortButton>
          <AdminShortButton {...level("9")}>
            <Index>9</Index>
            <Title>Short e</Title>
          </AdminShortButton>
          <AdminShortButton {...level("10")}>
            <Index>10</Index>
            <Title>Short i</Title>
          </AdminShortButton>
          <AdminShortButton {...level("11")}>
            <Index>11</Index>
            <Title>Short o</Title>
          </AdminShortButton>
          <AdminShortButton {...level("12")}>
            <Index>12</Index>
            <Title>Short u</Title>
          </AdminShortButton>
        </AdminSectionRow>
        <AdminSectionRow>
          <AdminShortButton {...level("13")}>
            <Index>13</Index>
            <Title>Middle Sounds</Title>
          </AdminShortButton>
          <AdminShortButton {...level("14")}>
            <Index>14</Index>
            <Title>Forming New Words</Title>
          </AdminShortButton>
        </AdminSectionRow>
      </AdminSection>
    );
  }
}
