import React from "react";
import Underlined from "components/underlined";
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
            <AdminRowTitle>Consonant "b" With Short Vowels</AdminRowTitle>
            <AdminShortButton {...level("21")}><Index>21</Index><Title>ba</Title></AdminShortButton>
            <AdminShortButton {...level("22")}><Index>22</Index><Title>be</Title></AdminShortButton>
            <AdminShortButton {...level("23")}><Index>23</Index><Title>bi</Title></AdminShortButton>
            <AdminShortButton {...level("24")}><Index>24</Index><Title>bo</Title></AdminShortButton>
            <AdminShortButton {...level("25")}><Index>25</Index><Title>bu</Title></AdminShortButton>
            <AdminShortButton {...level("26")}><Index>26</Index><Title><Underlined>Review</Underlined><br/>Consonant "b" With Short Vowels</Title></AdminShortButton>
          </AdminRow>
          <AdminRow>
            <AdminRowTitle>Consonant "c" With Short Vowels</AdminRowTitle>
            <AdminShortButton {...level("27")}><Index>27</Index><Title>ca</Title></AdminShortButton>
            <AdminShortButton hidden/>
            <AdminShortButton hidden/>
            <AdminShortButton {...level("28")}><Index>28</Index><Title>co</Title></AdminShortButton>
            <AdminShortButton {...level("29")}><Index>29</Index><Title>cu</Title></AdminShortButton>
            <AdminShortButton {...level("30")}><Index>30</Index><Title><Underlined>Review</Underlined><br/>Consonant "c" With Short Vowels</Title></AdminShortButton>
          </AdminRow>
          <AdminRow>
            <AdminRowTitle>Consonant "d" With Short Vowels</AdminRowTitle>
            <AdminShortButton {...level("31")}><Index>31</Index><Title>da</Title></AdminShortButton>
            <AdminShortButton {...level("32")}><Index>32</Index><Title>de</Title></AdminShortButton>
            <AdminShortButton {...level("33")}><Index>33</Index><Title>di</Title></AdminShortButton>
            <AdminShortButton {...level("34")}><Index>34</Index><Title>do</Title></AdminShortButton>
            <AdminShortButton {...level("35")}><Index>35</Index><Title>du</Title></AdminShortButton>
            <AdminShortButton {...level("36")}><Index>36</Index><Title><Underlined>Review</Underlined><br/>Consonant "d" With Short Vowels</Title></AdminShortButton>
          </AdminRow>
          <AdminRow>
            <AdminRowTitle>Consonant "f" With Short Vowels</AdminRowTitle>
            <AdminShortButton {...level("37")}><Index>37</Index><Title>fa</Title></AdminShortButton>
            <AdminShortButton {...level("38")}><Index>38</Index><Title>fe</Title></AdminShortButton>
            <AdminShortButton {...level("39")}><Index>39</Index><Title>fi</Title></AdminShortButton>
            <AdminShortButton {...level("40")}><Index>40</Index><Title>fo</Title></AdminShortButton>
            <AdminShortButton {...level("41")}><Index>41</Index><Title>fu</Title></AdminShortButton>
            <AdminShortButton {...level("42")}><Index>42</Index><Title><Underlined>Review</Underlined><br/>Consonant "f" With Short Vowels</Title></AdminShortButton>
          </AdminRow>
        </AdminSectionColumn>

        <AdminSectionColumn>
          <AdminShortButton {...level("43")}>
            <Index>43</Index>
            <Title>
              <Underlined>Review</Underlined><br/>
              Consonants "b"<Dash/>"f" With Short Vowels<br/>
            </Title>
          </AdminShortButton>
        </AdminSectionColumn>
      </AdminSection>
    );
  }
}
