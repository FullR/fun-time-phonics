import React from "react";
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
import Score from "components/admin-button-score";
import Letter from "components/admin-button-letter";

require("./style.scss");

export default class AdminSection4 extends React.Component {
  static title = "Consonant-Vowel Coarticulation";
  static levelRange = [44, 63];
  static Description = () => (
    <div>These lessons teach children the influence that the short vowel sound has on the consonants g<Dash/>k.&nbsp; Children also learn that these consonant-vowel coarticulations are the beginning sounds used to form words.</div>
  );
  render() {
    const {level} = this.props;

    return (
      <AdminSection className="Admin-section-4">
        <AdminSectionColumn>
          <Row>
            <RowTitle>Consonant <Letter>g</Letter><br/>With Short Vowels</RowTitle>
            <ShortButton {...level("44")}>
              <Index>44</Index>
              <Title size="large" brief>ga</Title>
              <Score levelId="44"/>
            </ShortButton>
            <ShortButton hidden/>
            <ShortButton hidden/>
            <ShortButton {...level("45")}>
              <Index>45</Index>
              <Title size="large" brief>go</Title>
              <Score levelId="45"/>
            </ShortButton>
            <ShortButton {...level("46")}>
              <Index>46</Index>
              <Title size="large" brief>gu</Title>
              <Score levelId="46"/>
            </ShortButton>
            <ShortButton {...level("47")} review>
              <Index>47</Index>
              <Title size="medium" brief>Review<br/><Letter size="large">g</Letter></Title>
              <Score levelId="47"/>
            </ShortButton>
          </Row>
          <Row>
            <RowTitle>Consonant <Letter>h</Letter><br/>With Short Vowels</RowTitle>
            <ShortButton {...level("48")}>
              <Index>48</Index>
              <Title size="large" brief>ha</Title>
              <Score levelId="48"/>
            </ShortButton>
            <ShortButton {...level("49")}>
              <Index>49</Index>
              <Title size="large" brief>he</Title>
              <Score levelId="49"/>
            </ShortButton>
            <ShortButton {...level("50")}>
              <Index>50</Index>
              <Title size="large" brief>hi</Title>
              <Score levelId="50"/>
            </ShortButton>
            <ShortButton {...level("51")}>
              <Index>51</Index>
              <Title size="large" brief>ho</Title>
              <Score levelId="51"/>
            </ShortButton>
            <ShortButton {...level("52")}>
              <Index>52</Index>
              <Title size="large" brief>hu</Title>
              <Score levelId="52"/>
            </ShortButton>
            <ShortButton {...level("53")} review>
              <Index>53</Index>
              <Title size="medium" brief>Review<br/><Letter size="large">h</Letter></Title>
              <Score levelId="53"/>
            </ShortButton>
          </Row>
          <Row>
            <RowTitle>Consonant <Letter>j</Letter><br/>With Short Vowels</RowTitle>
            <ShortButton {...level("54")}>
              <Index>54</Index>
              <Title size="large" brief>ja</Title>
              <Score levelId="54"/>
            </ShortButton>
            <ShortButton {...level("55")}>
              <Index>55</Index>
              <Title size="large" brief>je</Title>
              <Score levelId="55"/>
            </ShortButton>
            <ShortButton {...level("56")}>
              <Index>56</Index>
              <Title size="large" brief>ji</Title>
              <Score levelId="56"/>
            </ShortButton>
            <ShortButton {...level("57")}>
              <Index>57</Index>
              <Title size="large" brief>jo</Title>
              <Score levelId="57"/>
            </ShortButton>
            <ShortButton {...level("58")}>
              <Index>58</Index>
              <Title size="large" brief>ju</Title>
              <Score levelId="58"/>
            </ShortButton>
            <ShortButton {...level("59")} review>
              <Index>59</Index>
              <Title size="medium" brief>Review<br/><Letter size="large">j</Letter></Title>
              <Score levelId="59"/>
            </ShortButton>
          </Row>
          <Row>
            <RowTitle>Consonant <Letter>k</Letter><br/>With Short Vowels</RowTitle>
            <ShortButton hidden/>
            <ShortButton {...level("60")}>
              <Index>60</Index>
              <Title size="large" brief>ke</Title>
              <Score levelId="60"/>
            </ShortButton>
            <ShortButton {...level("61")}>
              <Index>61</Index>
              <Title size="large" brief>ki</Title>
              <Score levelId="61"/>
            </ShortButton>
            <ShortButton hidden/>
            <ShortButton hidden/>
            <ShortButton {...level("62")} review>
              <Index>62</Index>
              <Title size="medium" brief>Review<br/><Letter size="large">k</Letter></Title>
              <Score levelId="62"/>
            </ShortButton>
          </Row>
        </AdminSectionColumn>

        <AdminSectionColumn>
          <ShortButton {...level("63")} assessment>
            <Index>63</Index>
            <Title size="medium" brief>
              Review<br/>
              <Letter size="large">b<Dash/>k</Letter>
            </Title>
            <Score levelId="63"/>
          </ShortButton>
        </AdminSectionColumn>
      </AdminSection>
    );
  }
}
