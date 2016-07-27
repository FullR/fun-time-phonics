import React from "react";
import Dash from "components/dash";
import AdminSection from "components/admin-section";
import AdminSectionColumn from "components/admin-section-column";
import AdminSectionRow from "components/admin-section-row";
import AdminRow from "components/admin-section-row";
import AdminRowButton from "components/admin-row-button";
import AdminShortButton from "components/admin-short-button";
import AdminSubGroup from "components/admin-sub-group";
import AdminSubButton from "components/admin-sub-button";
import AdminRowTitle from "components/admin-row-title";
import Title from "components/admin-button-title";
import Index from "components/admin-button-index";
import Score from "components/admin-button-score";
import Letter from "components/admin-button-letter";

require("./style.scss");

export default class AdminSection3 extends React.Component {
  static title = "Consonant-Vowel Coarticulation";
  static levelRange = [21, 43];
  static Description = () => (
    <div>These lessons teach children the influence that the short vowel sound has on the consonants b<Dash/>f.&nbsp; Children also learn that these consonant<Dash/>vowel coarticulations are the beginning sounds used to form words.</div>
  );
  render() {
    const {level} = this.props;
    return (
      <AdminSection className="Admin-section-3">
        <AdminSectionColumn>
          <AdminRow>
            <AdminRowTitle>Consonant <Letter>b</Letter><br/>With Short Vowels</AdminRowTitle>
            <AdminShortButton {...level("21")}>
              <Index>21</Index>
              <Title size="large" brief>ba</Title>
              <Score levelId="21"/>
            </AdminShortButton>
            <AdminShortButton {...level("22")}>
              <Index>22</Index>
              <Title size="large" brief>be</Title>
              <Score levelId="22"/>
            </AdminShortButton>
            <AdminShortButton {...level("23")}>
              <Index>23</Index>
              <Title size="large" brief>bi</Title>
              <Score levelId="23"/>
            </AdminShortButton>
            <AdminShortButton {...level("24")}>
              <Index>24</Index>
              <Title size="large" brief>bo</Title>
              <Score levelId="24"/>
            </AdminShortButton>
            <AdminShortButton {...level("25")}>
              <Index>25</Index>
              <Title size="large" brief>bu</Title>
              <Score levelId="25"/>
            </AdminShortButton>
            <AdminShortButton {...level("26")} review>
              <Index>26</Index>
              <Title size="medium" brief>Review<br/><Letter size="large">b</Letter></Title>
              <Score levelId="26"/>
            </AdminShortButton>
          </AdminRow>
          <AdminRow>
            <AdminRowTitle>Consonant <Letter>c</Letter><br/>With Short Vowels</AdminRowTitle>
            <AdminShortButton {...level("27")}>
              <Index>27</Index>
              <Title size="large" brief>ca</Title>
              <Score levelId="27"/>
            </AdminShortButton>
            <AdminShortButton hidden/>
            <AdminShortButton hidden/>
            <AdminShortButton {...level("28")}>
              <Index>28</Index>
              <Title size="large" brief>co</Title>
              <Score levelId="28"/>
            </AdminShortButton>
            <AdminShortButton {...level("29")}>
              <Index>29</Index>
              <Title size="large" brief>cu</Title>
              <Score levelId="29"/>
            </AdminShortButton>
            <AdminShortButton {...level("30")} review>
              <Index>30</Index>
              <Title size="medium" brief>Review<br/><Letter size="large">c</Letter></Title>
              <Score levelId="30"/>
            </AdminShortButton>
          </AdminRow>
          <AdminRow>
            <AdminRowTitle>Consonant <Letter>d</Letter><br/>With Short Vowels</AdminRowTitle>
            <AdminShortButton {...level("31")}>
              <Index>31</Index>
              <Title size="large" brief>da</Title>
              <Score levelId="31"/>
              </AdminShortButton>
            <AdminShortButton {...level("32")}>
              <Index>32</Index>
              <Title size="large" brief>de</Title>
              <Score levelId="32"/>
              </AdminShortButton>
            <AdminShortButton {...level("33")}>
              <Index>33</Index>
              <Title size="large" brief>di</Title>
              <Score levelId="33"/>
              </AdminShortButton>
            <AdminShortButton {...level("34")}>
              <Index>34</Index>
              <Title size="large" brief>do</Title>
              <Score levelId="34"/>
              </AdminShortButton>
            <AdminShortButton {...level("35")}>
              <Index>35</Index>
              <Title size="large" brief>du</Title>
              <Score levelId="35"/>
              </AdminShortButton>
            <AdminShortButton {...level("36")} review>
              <Index>36</Index>
              <Title size="medium" brief>Review<br/><Letter size="large">d</Letter></Title>
              <Score levelId="36"/>
            </AdminShortButton>
          </AdminRow>
          <AdminRow>
            <AdminRowTitle>Consonant <Letter>f</Letter><br/>With Short Vowels</AdminRowTitle>
            <AdminShortButton {...level("37")}>
              <Index>37</Index>
              <Title size="large" brief>fa</Title>
              <Score levelId="37"/>
            </AdminShortButton>
            <AdminShortButton {...level("38")}>
              <Index>38</Index>
              <Title size="large" brief>fe</Title>
              <Score levelId="38"/>
            </AdminShortButton>
            <AdminShortButton {...level("39")}>
              <Index>39</Index>
              <Title size="large" brief>fi</Title>
              <Score levelId="39"/>
            </AdminShortButton>
            <AdminShortButton {...level("40")}>
              <Index>40</Index>
              <Title size="large" brief>fo</Title>
              <Score levelId="40"/>
            </AdminShortButton>
            <AdminShortButton {...level("41")}>
              <Index>41</Index>
              <Title size="large" brief>fu</Title>
              <Score levelId="41"/>
            </AdminShortButton>
            <AdminShortButton {...level("42")} review>
              <Index>42</Index>
              <Title size="medium" brief>Review<br/><Letter size="large">f</Letter></Title>
              <Score levelId="42"/>
            </AdminShortButton>
          </AdminRow>
        </AdminSectionColumn>

        <AdminSectionColumn>
          <AdminShortButton {...level("43")} assessment>
            <Index>43</Index>
            <Title size="medium" brief>
              Review<br/>
              <Letter size="large">b<Dash/>f</Letter>
            </Title>
            <Score levelId="43"/>
          </AdminShortButton>
        </AdminSectionColumn>
      </AdminSection>
    );
  }
}
