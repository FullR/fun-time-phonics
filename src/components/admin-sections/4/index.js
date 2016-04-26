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

export default class AdminSection4 extends React.Component {
  static title = "Co-Articulation";
  static lessons = "21-43";
  render() {
    const {level} = this.props;
    return (
      <AdminSection className="Admin-section-4">
        <AdminSectionColumn>
          <AdminRowButton {...level("21")}>
            <Title>Lesson b</Title>
            <AdminSubGroup small>
              <AdminSubButton {...level("21")}><Index>21</Index><Title>ba</Title></AdminSubButton>
              <AdminSubButton {...level("22")}><Index>22</Index><Title>be</Title></AdminSubButton>
              <AdminSubButton {...level("23")}><Index>23</Index><Title>bi</Title></AdminSubButton>
              <AdminSubButton {...level("24")}><Index>24</Index><Title>bo</Title></AdminSubButton>
              <AdminSubButton {...level("25")}><Index>25</Index><Title>bu</Title></AdminSubButton>
            </AdminSubGroup>
          </AdminRowButton>
          <AdminRowButton {...level("27")}>
            <Title>Lesson c</Title>
            <AdminSubGroup small>
              <AdminSubButton {...level("27")}><Index>27</Index><Title>ca</Title></AdminSubButton>
              <AdminSubButton {...level("28")}><Index>28</Index><Title>co</Title></AdminSubButton>
              <AdminSubButton {...level("29")}><Index>29</Index><Title>cu</Title></AdminSubButton>
            </AdminSubGroup>
          </AdminRowButton>
          <AdminRowButton {...level("31")}>
            <Title>Lesson d</Title>
            <AdminSubGroup small>
              <AdminSubButton {...level("31")}><Index>31</Index><Title>da</Title></AdminSubButton>
              <AdminSubButton {...level("32")}><Index>32</Index><Title>de</Title></AdminSubButton>
              <AdminSubButton {...level("33")}><Index>33</Index><Title>di</Title></AdminSubButton>
              <AdminSubButton {...level("34")}><Index>34</Index><Title>do</Title></AdminSubButton>
              <AdminSubButton {...level("35")}><Index>35</Index><Title>du</Title></AdminSubButton>
            </AdminSubGroup>
          </AdminRowButton>
          <AdminRowButton {...level("37")}>
            <Title>Lesson f</Title>
            <AdminSubGroup small>
              <AdminSubButton {...level("37")}><Index>37</Index><Title>fa</Title></AdminSubButton>
              <AdminSubButton {...level("38")}><Index>38</Index><Title>fe</Title></AdminSubButton>
              <AdminSubButton {...level("39")}><Index>39</Index><Title>fi</Title></AdminSubButton>
              <AdminSubButton {...level("40")}><Index>40</Index><Title>fo</Title></AdminSubButton>
              <AdminSubButton {...level("41")}><Index>41</Index><Title>fu</Title></AdminSubButton>
            </AdminSubGroup>
          </AdminRowButton>
        </AdminSectionColumn>

        <AdminSectionColumn>
          <AdminSectionRow>
            <AdminShortButton {...level("26")}>
              <Index>26</Index>
              <Title>
                <Underlined>Review</Underlined><br/>
                Consonant "b" With Short Vowels
              </Title>
            </AdminShortButton>
          </AdminSectionRow>
          <AdminSectionRow>
            <AdminShortButton {...level("30")}>
              <Index>30</Index>
              <Title>
                <Underlined>Review</Underlined><br/>
                Consonant "c" With Short Vowels
              </Title>
            </AdminShortButton>
          </AdminSectionRow>
          <AdminSectionRow>
            <AdminShortButton {...level("36")}>
              <Index>36</Index>
              <Title>
                <Underlined>Review</Underlined><br/>
                Consonant "d" With Short Vowels
              </Title>
            </AdminShortButton>
          </AdminSectionRow>
          <AdminSectionRow>
            <AdminShortButton {...level("42")}>
              <Index>42</Index>
              <Title>
                <Underlined>Review</Underlined><br/>
                Consonant "f" With Short Vowels
              </Title>
            </AdminShortButton>
          </AdminSectionRow>
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
