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

import RowTitle from "components/admin-row-title";

require("./style.scss");

export default class AdminSection5 extends React.Component {
  static title = "Consonant-Vowel Coarticulation";
  static levelRange = [64, 88];
  static Description = () => (
    <div>These lessons teach children the influence the consonants l-p have on the short vowel sounds.&nbsp; Children also learn that these consonant-vowel combinations are used to form words.</div>
  );
  render() {
    const {level} = this.props;
    return (
      <AdminSection className="Admin-section-5">
        <Column>
          <Row>
            <RowTitle>Consonant "l" With Short Vowels</RowTitle>
            <ShortButton {...level("64")}><Index>64</Index><Title>la</Title></ShortButton>
            <ShortButton {...level("65")}><Index>65</Index><Title>le</Title></ShortButton>
            <ShortButton {...level("66")}><Index>66</Index><Title>li</Title></ShortButton>
            <ShortButton {...level("67")}><Index>67</Index><Title>lo</Title></ShortButton>
            <ShortButton {...level("68")}><Index>68</Index><Title>lu</Title></ShortButton>
            <ShortButton {...level("69")}><Index>69</Index><Title><Underlined>Review</Underlined><br/>Consonant "l" With Short Vowels</Title></ShortButton>
          </Row>
          <Row>
            <RowTitle>Consonant "m" With Short Vowels</RowTitle>
            <ShortButton {...level("70")}><Index>70</Index><Title>ma</Title></ShortButton>
            <ShortButton {...level("71")}><Index>71</Index><Title>me</Title></ShortButton>
            <ShortButton {...level("72")}><Index>72</Index><Title>mi</Title></ShortButton>
            <ShortButton {...level("73")}><Index>73</Index><Title>mo</Title></ShortButton>
            <ShortButton {...level("74")}><Index>74</Index><Title>mu</Title></ShortButton>
            <ShortButton {...level("75")}><Index>75</Index><Title><Underlined>Review</Underlined><br/>Consonant "m" With Short Vowels</Title></ShortButton>
          </Row>
          <Row>
            <RowTitle>Consonant "n" With Short Vowels</RowTitle>
            <ShortButton {...level("76")}><Index>76</Index><Title>na</Title></ShortButton>
            <ShortButton {...level("77")}><Index>77</Index><Title>ne</Title></ShortButton>
            <ShortButton {...level("78")}><Index>78</Index><Title>ni</Title></ShortButton>
            <ShortButton {...level("79")}><Index>79</Index><Title>no</Title></ShortButton>
            <ShortButton {...level("80")}><Index>80</Index><Title>nu</Title></ShortButton>
            <ShortButton {...level("81")}><Index>81</Index><Title><Underlined>Review</Underlined><br/>Consonant "n" With Short Vowels</Title></ShortButton>
          </Row>
          <Row>
            <RowTitle>Consonant "p" With Short Vowels</RowTitle>
            <ShortButton {...level("82")}><Index>82</Index><Title>pa</Title></ShortButton>
            <ShortButton {...level("83")}><Index>83</Index><Title>pe</Title></ShortButton>
            <ShortButton {...level("84")}><Index>84</Index><Title>pi</Title></ShortButton>
            <ShortButton {...level("85")}><Index>85</Index><Title>po</Title></ShortButton>
            <ShortButton {...level("86")}><Index>86</Index><Title>pu</Title></ShortButton>
            <ShortButton {...level("87")}><Index>87</Index><Title><Underlined>Review</Underlined><br/>Consonant "p" With Short Vowels</Title></ShortButton>
          </Row>
        </Column>

        <Column>
          <ShortButton {...level("88")}><Index>88</Index><Title><Underlined>Review</Underlined><br/>Consonants "b"<Dash/>"p" With Short Vowels<br/></Title></ShortButton>
        </Column>
      </AdminSection>
    );
  }
}
