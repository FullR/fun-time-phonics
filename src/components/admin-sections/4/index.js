import React from "react";
import Underlined from "components/underlined";
import Dash from "components/dash";
import AdminSection from "components/admin-section";
import AdminSectionColumn from "components/admin-section-column";
import Row from "components/admin-section-row";
import AdminRowButton from "components/admin-row-button";
import ShortButton from "components/admin-short-button";
import AdminSubGroup from "components/admin-sub-group";
import AdminSubButton from "components/admin-sub-button";
import RowTitle from "components/admin-row-title";
import Title from "components/admin-button-title";
import Index from "components/admin-button-index";

require("./style.scss");

export default class AdminSection4 extends React.Component {
  static title = "Consonant-Vowel Coarticulation";
  static levelRange = [44, 63];
  static Description = () => (
    <div>These lessons teach children the influence the consonants g-k have on the short vowel sounds.&nbsp; Children also learn that these consonant-vowel combinations are used to form words.</div>
  );
  render() {
    const {level} = this.props;
    return (
      <AdminSection className="Admin-section-4">
        <AdminSectionColumn>
          <Row>
            <RowTitle>Consonant "g" With Short Vowels</RowTitle>
            <ShortButton {...level("44")}><Index>44</Index><Title>ga</Title></ShortButton>
            <ShortButton hidden/>
            <ShortButton hidden/>
            <ShortButton {...level("45")}><Index>45</Index><Title>go</Title></ShortButton>
            <ShortButton {...level("46")}><Index>46</Index><Title>gu</Title></ShortButton>
            <ShortButton {...level("47")}><Index>47</Index><Title><Underlined>Review</Underlined><br/>Consonant "g" With Short Vowels</Title></ShortButton>
          </Row>
          <Row>
            <RowTitle>Consonant "h" With Short Vowels</RowTitle>
            <ShortButton {...level("48")}><Index>48</Index><Title>ha</Title></ShortButton>
            <ShortButton {...level("49")}><Index>49</Index><Title>he</Title></ShortButton>
            <ShortButton {...level("50")}><Index>50</Index><Title>hi</Title></ShortButton>
            <ShortButton {...level("51")}><Index>51</Index><Title>ho</Title></ShortButton>
            <ShortButton {...level("52")}><Index>52</Index><Title>hu</Title></ShortButton>
            <ShortButton {...level("53")}><Index>53</Index><Title><Underlined>Review</Underlined><br/>Consonant "h" With Short Vowels</Title></ShortButton>
          </Row>
          <Row>
            <RowTitle>Consonant "j" With Short Vowels</RowTitle>
            <ShortButton {...level("54")}><Index>54</Index><Title>ja</Title></ShortButton>
            <ShortButton {...level("55")}><Index>55</Index><Title>je</Title></ShortButton>
            <ShortButton {...level("56")}><Index>56</Index><Title>ji</Title></ShortButton>
            <ShortButton {...level("57")}><Index>57</Index><Title>jo</Title></ShortButton>
            <ShortButton {...level("58")}><Index>58</Index><Title>ju</Title></ShortButton>
            <ShortButton {...level("59")}><Index>59</Index><Title><Underlined>Review</Underlined><br/>Consonant "j" With Short Vowels</Title></ShortButton>
          </Row>
          <Row>
            <RowTitle>Consonant "k" With Short Vowels</RowTitle>
            <ShortButton hidden/>
            <ShortButton {...level("60")}><Index>60</Index><Title>ke</Title></ShortButton>
            <ShortButton {...level("61")}><Index>61</Index><Title>ki</Title></ShortButton>
            <ShortButton hidden/>
            <ShortButton hidden/>
            <ShortButton {...level("62")}><Index>62</Index><Title><Underlined>Review</Underlined><br/>Consonant "k" With Short Vowels</Title></ShortButton>
          </Row>
        </AdminSectionColumn>

        <AdminSectionColumn>
          <ShortButton {...level("63")}>
            <Index>63</Index>
            <Title>
              <Underlined>Review</Underlined><br/>
              Consonants "b"<Dash/>"k" With Short Vowels<br/>
            </Title>
          </ShortButton>
        </AdminSectionColumn>
      </AdminSection>
    );
  }
}
