import React from "react";
import Underlined from "components/underlined";
import Dash from "components/dash";
import AdminSection from "components/admin-section";
import AdminSectionColumn from "components/admin-section-column";
import AdminSectionRow from "components/admin-section-row";
import AdminRowButton from "components/admin-row-button";
import AdminShortButton from "components/admin-short-button";
import AdminSubGroup from "components/admin-sub-group";
import AdminSubButton from "components/admin-sub-button";
import Title from "components/admin-button-title";
import Index from "components/admin-button-index";

require("./style.scss");

export default class AdminSection5 extends React.Component {
  static title = "Co-Articulation";
  static lessons = "44-63";
  render() {
    const {level} = this.props;
    return (
      <AdminSection className="Admin-section-5">
        <AdminSectionColumn>
          <AdminRowButton {...level("44")}>
            <Title>Lesson g</Title>
            <AdminSubGroup small>
              <AdminSubButton {...level("44")}><Index>44</Index><Title>ga</Title></AdminSubButton>
              <AdminSubButton {...level("45")}><Index>45</Index><Title>go</Title></AdminSubButton>
              <AdminSubButton {...level("46")}><Index>46</Index><Title>gu</Title></AdminSubButton>
            </AdminSubGroup>
          </AdminRowButton>
          <AdminRowButton {...level("48")}>
            <Title>Lesson h</Title>
            <AdminSubGroup small>
              <AdminSubButton {...level("48")}><Index>48</Index><Title>ha</Title></AdminSubButton>
              <AdminSubButton {...level("49")}><Index>49</Index><Title>he</Title></AdminSubButton>
              <AdminSubButton {...level("50")}><Index>50</Index><Title>hi</Title></AdminSubButton>
              <AdminSubButton {...level("51")}><Index>51</Index><Title>ho</Title></AdminSubButton>
              <AdminSubButton {...level("52")}><Index>52</Index><Title>hu</Title></AdminSubButton>
            </AdminSubGroup>
          </AdminRowButton>
          <AdminRowButton {...level("54")}>
            <Title>Lesson j</Title>
            <AdminSubGroup small>
              <AdminSubButton {...level("54")}><Index>54</Index><Title>ja</Title></AdminSubButton>
              <AdminSubButton {...level("55")}><Index>55</Index><Title>je</Title></AdminSubButton>
              <AdminSubButton {...level("56")}><Index>56</Index><Title>ji</Title></AdminSubButton>
              <AdminSubButton {...level("57")}><Index>57</Index><Title>jo</Title></AdminSubButton>
              <AdminSubButton {...level("58")}><Index>58</Index><Title>ju</Title></AdminSubButton>
            </AdminSubGroup>
          </AdminRowButton>
          <AdminRowButton {...level("60")}>
            <Title>Lesson k</Title>
            <AdminSubGroup small>
              <AdminSubButton {...level("60")}><Index>60</Index><Title>ke</Title></AdminSubButton>
              <AdminSubButton {...level("61")}><Index>61</Index><Title>ki</Title></AdminSubButton>
            </AdminSubGroup>
          </AdminRowButton>
        </AdminSectionColumn>

        <AdminSectionColumn>
          <AdminSectionRow>
            <AdminShortButton {...level("47")}>
              <Index>47</Index>
              <Title>
                <Underlined>Review</Underlined><br/>
                ga<Dash/>gu
              </Title>
            </AdminShortButton>
          </AdminSectionRow>
          <AdminSectionRow>
            <AdminShortButton {...level("53")}>
              <Index>53</Index>
              <Title>
                <Underlined>Review</Underlined><br/>
                ha<Dash/>hu
              </Title>
            </AdminShortButton>
          </AdminSectionRow>
          <AdminSectionRow>
            <AdminShortButton {...level("59")}>
              <Index>59</Index>
              <Title>
                <Underlined>Review</Underlined><br/>
                ja<Dash/>ju
              </Title>
            </AdminShortButton>
          </AdminSectionRow>
          <AdminSectionRow>
            <AdminShortButton {...level("62")}>
              <Index>62</Index>
              <Title>
                <Underlined>Review</Underlined><br/>
                ke<Dash/>ki
              </Title>
            </AdminShortButton>
          </AdminSectionRow>
        </AdminSectionColumn>

        <AdminSectionColumn>
          <AdminShortButton {...level("63")}>
            <Index>63</Index>
            <Title>
              Consonant With Vowel Review<br/>
              g-k
            </Title>
          </AdminShortButton>
        </AdminSectionColumn>
      </AdminSection>
    );
  }
}
