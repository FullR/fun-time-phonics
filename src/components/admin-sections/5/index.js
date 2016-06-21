import React from "react";
import Dash from "components/dash";
import AdminSection from "components/admin-section";
import Column from "components/admin-section-column";
import Row from "components/admin-section-row";
import RowButton from "components/admin-row-button";
import ShortButton from "components/admin-short-button";
import SubGroup from "components/admin-sub-group";
import SubButton from "components/admin-sub-button";
import Title from "components/admin-button-title";
import Index from "components/admin-button-index";
import Score from "components/admin-button-score";
import Letter from "components/admin-button-letter";

import RowTitle from "components/admin-row-title";

require("./style.scss");

export default class AdminSection5 extends React.Component {
  static title = "Consonant-Vowel Coarticulation";
  static levelRange = [64, 88];
  static Description = () => (
    <div>These lessons teach children the influence that the short vowel sound has on the consonants l-p.&nbsp; Children also learn that these consonant-vowel coarticulations are the beginning sounds used to form words.</div>
  );
  render() {
    const {level} = this.props;
    return (
      <AdminSection className="Admin-section-5">
        <Column>
          <Row>
            <RowTitle>Consonant <Letter>l</Letter> With Short Vowels</RowTitle>
            <ShortButton {...level("64")}>
              <Index>64</Index>
              <Title size="large">la</Title>
              <Score levelId="64"/>
            </ShortButton>
            <ShortButton {...level("65")}>
              <Index>65</Index>
              <Title size="large">le</Title>
              <Score levelId="65"/>
            </ShortButton>
            <ShortButton {...level("66")}>
              <Index>66</Index>
              <Title size="large">li</Title>
              <Score levelId="66"/>
            </ShortButton>
            <ShortButton {...level("67")}>
              <Index>67</Index>
              <Title size="large">lo</Title>
              <Score levelId="67"/>
            </ShortButton>
            <ShortButton {...level("68")}>
              <Index>68</Index>
              <Title size="large">lu</Title>
              <Score levelId="68"/>
            </ShortButton>
            <ShortButton {...level("69")} review>
              <Index>69</Index>
              <Title size="medium">Review<br/><Letter size="large">l</Letter></Title>
              <Score levelId="69"/>
            </ShortButton>
          </Row>
          <Row>
            <RowTitle>Consonant <Letter>m</Letter> With Short Vowels</RowTitle>
            <ShortButton {...level("70")}>
              <Index>70</Index>
              <Title size="large">ma</Title>
              <Score levelId="70"/>
            </ShortButton>
            <ShortButton {...level("71")}>
              <Index>71</Index>
              <Title size="large">me</Title>
              <Score levelId="71"/>
            </ShortButton>
            <ShortButton {...level("72")}>
              <Index>72</Index>
              <Title size="large">mi</Title>
              <Score levelId="72"/>
            </ShortButton>
            <ShortButton {...level("73")}>
              <Index>73</Index>
              <Title size="large">mo</Title>
              <Score levelId="73"/>
            </ShortButton>
            <ShortButton {...level("74")}>
              <Index>74</Index>
              <Title size="large">mu</Title>
              <Score levelId="74"/>
            </ShortButton>
            <ShortButton {...level("75")} review>
              <Index>75</Index>
              <Title size="medium">Review<br/><Letter size="large">m</Letter></Title>
              <Score levelId="75"/>
            </ShortButton>
          </Row>
          <Row>
            <RowTitle>Consonant <Letter>n</Letter> With Short Vowels</RowTitle>
            <ShortButton {...level("76")}>
              <Index>76</Index>
              <Title size="large">na</Title>
              <Score levelId="76"/>
            </ShortButton>
            <ShortButton {...level("77")}>
              <Index>77</Index>
              <Title size="large">ne</Title>
              <Score levelId="77"/>
            </ShortButton>
            <ShortButton {...level("78")}>
              <Index>78</Index>
              <Title size="large">ni</Title>
              <Score levelId="78"/>
            </ShortButton>
            <ShortButton {...level("79")}>
              <Index>79</Index>
              <Title size="large">no</Title>
              <Score levelId="79"/>
            </ShortButton>
            <ShortButton {...level("80")}>
              <Index>80</Index>
              <Title size="large">nu</Title>
              <Score levelId="80"/>
            </ShortButton>
            <ShortButton {...level("81")} review>
              <Index>81</Index>
              <Title size="medium">Review<br/><Letter size="large">n</Letter></Title>
              <Score levelId="81"/>
            </ShortButton>
          </Row>
          <Row>
            <RowTitle>Consonant <Letter>p</Letter> With Short Vowels</RowTitle>
            <ShortButton {...level("82")}>
              <Index>82</Index>
              <Title size="large">pa</Title>
              <Score levelId="82"/>
            </ShortButton>
            <ShortButton {...level("83")}>
              <Index>83</Index>
              <Title size="large">pe</Title>
              <Score levelId="83"/>
            </ShortButton>
            <ShortButton {...level("84")}>
              <Index>84</Index>
              <Title size="large">pi</Title>
              <Score levelId="84"/>
            </ShortButton>
            <ShortButton {...level("85")}>
              <Index>85</Index>
              <Title size="large">po</Title>
              <Score levelId="85"/>
            </ShortButton>
            <ShortButton {...level("86")}>
              <Index>86</Index>
              <Title size="large">pu</Title>
              <Score levelId="86"/>
            </ShortButton>
            <ShortButton {...level("87")} review>
              <Index>87</Index>
              <Title size="medium">Review<br/><Letter size="large">p</Letter></Title>
              <Score levelId="87"/>
            </ShortButton>
          </Row>
        </Column>

        <Column>
          <ShortButton {...level("88")} assessment>
            <Index>88</Index>
            <Title size="medium">Review<br/><Letter size="large">b<Dash/>p</Letter></Title>
            <Score levelId="88"/>
          </ShortButton>
        </Column>
      </AdminSection>
    );
  }
}
