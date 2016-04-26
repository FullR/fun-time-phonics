import React from "react";
import Dash from "components/dash";
import Underlined from "components/underlined";
import AdminSection from "components/admin-section";
import Column from "components/admin-section-column";
import Row from "components/admin-section-row";
import RowButton from "components/admin-row-button";
import ShortButton from "components/admin-short-button";
import SubGroup from "components/admin-sub-group";
import SubButton from "components/admin-sub-button";
import Title from "components/admin-button-title";
import Index from "components/admin-button-index";

require("./style.scss");

export default class AdminSection6 extends React.Component {
  static title = "Co-Articulation";
  static lessons = "64-88";
  render() {
    const {level} = this.props;
    return (
      <AdminSection className="Admin-section-6">
        <Column>
          <RowButton {...level("64")}>
            <Title>Lesson L</Title>
            <SubGroup small>
              <SubButton {...level("64")}><Index>64</Index><Title>la</Title></SubButton>
              <SubButton {...level("65")}><Index>65</Index><Title>le</Title></SubButton>
              <SubButton {...level("66")}><Index>66</Index><Title>li</Title></SubButton>
              <SubButton {...level("67")}><Index>67</Index><Title>lo</Title></SubButton>
              <SubButton {...level("68")}><Index>68</Index><Title>lu</Title></SubButton>
            </SubGroup>
          </RowButton>
          <RowButton {...level("70")}>
            <Title>Lesson M</Title>
            <SubGroup small>
              <SubButton {...level("70")}><Index>70</Index><Title>ma</Title></SubButton>
              <SubButton {...level("71")}><Index>71</Index><Title>me</Title></SubButton>
              <SubButton {...level("72")}><Index>72</Index><Title>mi</Title></SubButton>
              <SubButton {...level("73")}><Index>73</Index><Title>mo</Title></SubButton>
              <SubButton {...level("74")}><Index>74</Index><Title>mu</Title></SubButton>
            </SubGroup>
          </RowButton>
          <RowButton {...level("76")}>
            <Title>Lesson N</Title>
            <SubGroup small>
              <SubButton {...level("76")}><Index>76</Index><Title>na</Title></SubButton>
              <SubButton {...level("77")}><Index>77</Index><Title>ne</Title></SubButton>
              <SubButton {...level("78")}><Index>78</Index><Title>ni</Title></SubButton>
              <SubButton {...level("79")}><Index>79</Index><Title>no</Title></SubButton>
              <SubButton {...level("80")}><Index>80</Index><Title>nu</Title></SubButton>
            </SubGroup>
          </RowButton>
          <RowButton {...level("82")}>
            <Title>Lesson P</Title>
            <SubGroup small>
              <SubButton {...level("82")}><Index>82</Index><Title>pa</Title></SubButton>
              <SubButton {...level("83")}><Index>83</Index><Title>pe</Title></SubButton>
              <SubButton {...level("84")}><Index>84</Index><Title>pi</Title></SubButton>
              <SubButton {...level("85")}><Index>85</Index><Title>po</Title></SubButton>
              <SubButton {...level("86")}><Index>86</Index><Title>pu</Title></SubButton>
            </SubGroup>
          </RowButton>
        </Column>
        <Column>
          <Row>
            <ShortButton {...level("69")}>
              <Index>69</Index>
              <Title>
                <Underlined>Review</Underlined><br/>
                Consonant "l" With Short Vowels
              </Title>
            </ShortButton>
          </Row>
          <Row>
            <ShortButton {...level("75")}>
              <Index>75</Index>
              <Title>
                <Underlined>Review</Underlined><br/>
                Consonant "m" With Short Vowels
              </Title>
            </ShortButton>
          </Row>
          <Row>
            <ShortButton {...level("81")}>
              <Index>81</Index>
              <Title>
                <Underlined>Review</Underlined><br/>
                Consonant "n" With Short Vowels
              </Title>
            </ShortButton>
          </Row>
          <Row>
            <ShortButton {...level("87")}>
              <Index>87</Index>
              <Title>
                <Underlined>Review</Underlined><br/>
                Consonant "p" With Short Vowels
              </Title>
            </ShortButton>
          </Row>
        </Column>

        <Column>
          <ShortButton {...level("88")}>
            <Index>88</Index>
            <Title>
              <Underlined>Review</Underlined><br/>
              Consonants "b"<Dash/>"p" With Short Vowels<br/>
            </Title>
          </ShortButton>
        </Column>
      </AdminSection>
    );
  }
}
