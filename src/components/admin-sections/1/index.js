import React from "react";
import AdminSection from "components/admin-section";
import AdminRowButton from "components/admin-row-button";
import AdminSectionRow from "components/admin-section-row";
import AdminShortButton from "components/admin-short-button";
import AdminSubGroup from "components/admin-sub-group";
import AdminSubButton from "components/admin-sub-button";
import Title from "components/admin-button-title";
import Index from "components/admin-button-index";
require("./style.scss");

export default class AdminSection1 extends React.Component {
  static title = "Word Sounds";
  static lessons = "1-7";
  render() {
    const {level} = this.props;
    return (
      <AdminSection className="Admin-section-1">
        <AdminRowButton {...level("1")}>
          <Index>1</Index>
          <Title>Beginning Sounds</Title>
          <AdminSubGroup>
            <AdminSubButton {...level("1")}>
              <Title>/t/</Title>
            </AdminSubButton>
            <AdminSubButton {...level("1-m")}>
              <Title>/m/</Title>
            </AdminSubButton>
            <AdminSubButton {...level("1-l")}>
              <Title>/l/</Title>
            </AdminSubButton>
            <AdminSubButton {...level("1-n")}>
              <Title>/n/</Title>
            </AdminSubButton>
            <AdminSubButton {...level("1-r")}>
              <Title>/r/</Title>
            </AdminSubButton>
            <AdminSubButton {...level("1-g")}>
              <Title>/g/</Title>
            </AdminSubButton>
            <AdminSubButton {...level("1-s")}>
              <Title>/s/</Title>
            </AdminSubButton>
          </AdminSubGroup>
        </AdminRowButton>

        <AdminRowButton {...level("2")}>
          <Index>2</Index>
          <Title>Ending Sounds</Title>
          <AdminSubGroup>
            <AdminSubButton {...level("2-t")}>
              <Title>/t/</Title>
            </AdminSubButton>
            <AdminSubButton {...level("2-d")}>
              <Title>/d/</Title>
            </AdminSubButton>
            <AdminSubButton {...level("2-p")}>
              <Title>/p/</Title>
            </AdminSubButton>
            <AdminSubButton {...level("2-k")}>
              <Title>/k/</Title>
            </AdminSubButton>
            <AdminSubButton {...level("2-f")}>
              <Title>/f/</Title>
            </AdminSubButton>
            <AdminSubButton {...level("2-m")}>
              <Title>/m/</Title>
            </AdminSubButton>
            <AdminSubButton {...level("2-b")}>
              <Title>/b/</Title>
            </AdminSubButton>
          </AdminSubGroup>
        </AdminRowButton>

        <AdminRowButton {...level("3")}>
          <Index>3</Index>
          <Title>Beginning and Ending Sounds</Title>
          <AdminSubGroup/>
        </AdminRowButton>
        <AdminSectionRow>
          <AdminShortButton {...level("4")}>
            <Index>4</Index>
            <Title>Rhyme Match</Title>
          </AdminShortButton>
          <AdminShortButton {...level("5")}>
            <Index>5</Index>
            <Title>Rhyme Time</Title>
          </AdminShortButton>
          <AdminShortButton {...level("6")}>
            <Index>6</Index>
            <Title>Say the Word</Title>
          </AdminShortButton>
          <AdminShortButton {...level("7")}>
            <Index>7</Index>
            <Title>Echo the Word</Title>
          </AdminShortButton>
        </AdminSectionRow>
      </AdminSection>
    );
  }
}
