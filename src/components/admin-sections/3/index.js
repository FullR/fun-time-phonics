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
    <div>These lessons teach children the influence the consonants b-f have on the short vowel sounds.&nbsp; Children also learn that these consonant-vowel combinations are used to form words.</div>
  );
  render() {
    const {level} = this.props;
    return (
      <AdminSection className="Admin-section-3">
        <AdminSectionColumn>
          <AdminRow>
            <AdminRowTitle>Consonant <Letter>b</Letter> With Short Vowels</AdminRowTitle>
            <AdminShortButton {...level("21")}>
              <Index>21</Index>
              <Title size="large">ba</Title>
              <Score levelId="21"/>
            </AdminShortButton>
            <AdminShortButton {...level("22")}>
              <Index>22</Index>
              <Title size="large">be</Title>
              <Score levelId="22"/>
            </AdminShortButton>
            <AdminShortButton {...level("23")}>
              <Index>23</Index>
              <Title size="large">bi</Title>
              <Score levelId="23"/>
            </AdminShortButton>
            <AdminShortButton {...level("24")}>
              <Index>24</Index>
              <Title size="large">bo</Title>
              <Score levelId="24"/>
            </AdminShortButton>
            <AdminShortButton {...level("25")}>
              <Index>25</Index>
              <Title size="large">bu</Title>
              <Score levelId="25"/>
            </AdminShortButton>
            <AdminShortButton {...level("26")} review>
              <Index>26</Index>
              <Title size="medium">Review<br/><Letter size="large">b</Letter></Title>
              <Score levelId="26"/>
            </AdminShortButton>
          </AdminRow>
          <AdminRow>
            <AdminRowTitle>Consonant <Letter>c</Letter> With Short Vowels</AdminRowTitle>
            <AdminShortButton {...level("27")}>
              <Index>27</Index>
              <Title size="large">ca</Title>
              <Score levelId="27"/>
            </AdminShortButton>
            <AdminShortButton hidden/>
            <AdminShortButton hidden/>
            <AdminShortButton {...level("28")}>
              <Index>28</Index>
              <Title size="large">co</Title>
              <Score levelId="28"/>
            </AdminShortButton>
            <AdminShortButton {...level("29")}>
              <Index>29</Index>
              <Title size="large">cu</Title>
              <Score levelId="29"/>
            </AdminShortButton>
            <AdminShortButton {...level("30")} review>
              <Index>30</Index>
              <Title size="medium">Review<br/><Letter size="large">c</Letter></Title>
              <Score levelId="30"/>
            </AdminShortButton>
          </AdminRow>
          <AdminRow>
            <AdminRowTitle>Consonant <Letter>d</Letter> With Short Vowels</AdminRowTitle>
            <AdminShortButton {...level("31")}>
              <Index>31</Index>
              <Title size="large">da</Title>
              <Score levelId="31"/>
              </AdminShortButton>
            <AdminShortButton {...level("32")}>
              <Index>32</Index>
              <Title size="large">de</Title>
              <Score levelId="32"/>
              </AdminShortButton>
            <AdminShortButton {...level("33")}>
              <Index>33</Index>
              <Title size="large">di</Title>
              <Score levelId="33"/>
              </AdminShortButton>
            <AdminShortButton {...level("34")}>
              <Index>34</Index>
              <Title size="large">do</Title>
              <Score levelId="34"/>
              </AdminShortButton>
            <AdminShortButton {...level("35")}>
              <Index>35</Index>
              <Title size="large">du</Title>
              <Score levelId="35"/>
              </AdminShortButton>
            <AdminShortButton {...level("36")} review>
              <Index>36</Index>
              <Title size="medium">Review<br/><Letter size="large">d</Letter></Title>
              <Score levelId="36"/>
            </AdminShortButton>
          </AdminRow>
          <AdminRow>
            <AdminRowTitle>Consonant <Letter>f</Letter> With Short Vowels</AdminRowTitle>
            <AdminShortButton {...level("37")}>
              <Index>37</Index>
              <Title size="large">fa</Title>
              <Score levelId="37"/>
            </AdminShortButton>
            <AdminShortButton {...level("38")}>
              <Index>38</Index>
              <Title size="large">fe</Title>
              <Score levelId="38"/>
            </AdminShortButton>
            <AdminShortButton {...level("39")}>
              <Index>39</Index>
              <Title size="large">fi</Title>
              <Score levelId="39"/>
            </AdminShortButton>
            <AdminShortButton {...level("40")}>
              <Index>40</Index>
              <Title size="large">fo</Title>
              <Score levelId="40"/>
            </AdminShortButton>
            <AdminShortButton {...level("41")}>
              <Index>41</Index>
              <Title size="large">fu</Title>
              <Score levelId="41"/>
            </AdminShortButton>
            <AdminShortButton {...level("42")} review>
              <Index>42</Index>
              <Title size="medium">Review<br/><Letter size="large">f</Letter></Title>
              <Score levelId="42"/>
            </AdminShortButton>
          </AdminRow>
        </AdminSectionColumn>

        <AdminSectionColumn>
          <AdminShortButton {...level("43")} assessment>
            <Index>43</Index>
            <Title size="medium">
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
