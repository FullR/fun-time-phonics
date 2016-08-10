import React from "react";
import ReactDOM from "react-dom";
import Waypoint from "react-waypoint";
import classNames from "classnames";
import Dash from "components/dash";
import sections from "./sections";
import infoScreens from "./info-screens";
import DSpace from "components/dspace";
import createScrollLoop from "util/create-scroll-loop";
require("./style.scss");

const makeStateful = (componentFn) => class extends React.Component {
  render() {
    return componentFn(this.props);
  }
};
const Tray = classComponent("div", ({open}) => [
  "Mobile-admin__tray",
  {"Mobile-admin__tray--open": open}
]);
const TrayDrawer = classComponent("div", "Mobile-admin__tray-drawer");
const LevelListColumn = classComponent("div", "Mobile-admin__level-list-column");
const LevelListColumnHeading = classComponent("div", "Mobile-admin__level-list-column-heading");
const LevelListItem = classComponent("div", ({noBorder}) => [
  "Mobile-admin__level-list-item",
  {"Mobile-admin__level-list-item--no-border": noBorder}
]);
const SectionHeading = classComponent("div", "Mobile-admin__section-heading");
const LevelRange = classComponent("div", "Mobile-admin__level-range");
const LevelButton = classComponent("div", "Mobile-admin__level-button");
const LevelButtonIndex = classComponent("div", "Mobile-admin__level-button-index");
const LevelButtonTitle = classComponent("div", "Mobile-admin__level-button-title");
const LevelButtonScore = classComponent("div", ({passing, visible}) => [
  "Mobile-admin__level-button-score",
  "Mobile-admin__level-button-score--" + (passing ? "passing" : "failing")
]);
const InfoColumn = classComponent("div", "Mobile-admin__info-column");
const InfoColumnHeading = classComponent("div", "Mobile-admin__info-column-heading");
const LevelDescription = classComponent("div", "Mobile-admin__level-description");
const ArrowContainer = classComponent("div", "Mobile-admin__arrow-container");
const Arrow = classComponent("div", "Mobile-admin__arrow");
const ArrowText = classComponent("div", "Mobile-admin__arrow-text");
const ScrollAnchor = classComponent("div", "Mobile-admin__scroll-anchor");
const SectionArrowContainer = classComponent("div", "Mobile-admin__section-arrow-container");
const SectionArrowImage = classComponent("div", ({flipped}) => [
  "Mobile-admin__section-arrow-image",
  {"Mobile-admin__section-arrow-image--flipped": flipped}
]);
const GearIcon = classComponent("div", "Mobile-admin__gear-icon");
const XIcon = classComponent("div", "Mobile-admin__x-icon");
const InfoScreenContainer = classComponent("div", ({open}) => [
  "Mobile-admin__info-screen",
  {"Mobile-admin__info-screen--open": open}
]);
const SectionArrow = ({onClick, flipped, children}) => (
  <div className="Mobile-admin__section-arrow" onClick={onClick}>
    <SectionArrowImage flipped={flipped}/>
    <div className="Mobile-admin__section-arrow-text">{children}</div>
  </div>
);

const LevelButtonItem = makeStateful((props) => {
  const {children, index, showingScore, passing, score} = props;
  const Index = index ? (<span>{index}.<DSpace/></span>) : null;
  const Score = showingScore ? (<LevelButtonScore passing={passing}>{score}</LevelButtonScore>) : null;

  return (
    <LevelListItem>
      <LevelButton {...props}>
        <LevelButtonTitle>{Index}{children}</LevelButtonTitle>
        {Score}
      </LevelButton>
    </LevelListItem>
  );
});

const ListSectionHeader = ({size, noBorder, children, ...rest}) => (
  <LevelListItem {...rest} noBorder={noBorder}>
    <SectionHeading size={size}>{children}</SectionHeading>
  </LevelListItem>
);

class LevelList extends React.Component {
  render() {
    const className = classNames("Mobile-admin__level-list", this.props.className);
    return (<div {...this.props} className={className}/>);
  }
}

export default class MobileAdmin extends React.Component {
  state = {
    section: 1,
    trayOpen: false,
    currentInfoScreen: null,
    showingClearDataModal: false,
    showingPercentModal: false
  };

  handleSectionScrollChange = (section) => {
    if(!this.cancelScrollLoop) { // ignore if scrolling is done programmatically
      setTimeout(() => this.setState({section}), 0);
    }
  };

  showNextSection = () => {
    const {section} = this.state;
    if(section < 3) {
      this.scrollToSection(section + 1);
    }
  };

  showPreviousSection = () => {
    const {section} = this.state;
    if(section > 0) {
      this.scrollToSection(section - 1);
    }
  };

  handleChangeInfoScreen = (infoScreen) => this.setState({currentInfoScreen: infoScreen});
  handleCloseInfoScreen = () => this.setState({currentInfoScreen: null});

  handleOpenTrayClick = () => this.setState({trayOpen: true});
  handleCloseTrayClick = () => this.setState({trayOpen: false});

  handleShowClearDataModal = () => this.setState({showingClearDataModal: true});
  handleShowPercentModal = () => this.setState({showingPercentModal: true});

  componentDidMount() {
    this.scrollToRef("section2");
  }

  componentWillUnmount() {
    this.stopScrolling();
  }

  scrollToRef(refName) {
    const {levelList} = this.refs;
    const targetRef = this.refs[refName];
    if(!targetRef) return;
    const levelListEl = ReactDOM.findDOMNode(levelList);
    const targetEl = ReactDOM.findDOMNode(targetRef);
    this.stopScrolling();

    this.cancelScrollLoop = createScrollLoop(levelListEl, targetEl, 500, () => {
      this.cancelScrollLoop = null;
    });
  }

  scrollToSection(sectionId) {
    this.setState({section: sectionId});
    this.scrollToRef(`section-${sectionId}`);
  }

  stopScrolling() {
    if(this.cancelScrollLoop) {
      this.cancelScrollLoop();
      this.cancelScrollLoop = null;
    }
  }

  render() {
    const {props, state} = this;
    const {section, trayOpen, currentInfoScreen} = state;
    const {Title: SectionTitle, Text: SectionText, levelRange} = sections[section] || sections["1"];
    const className = classNames("Mobile-admin", props.className);
    const InfoScreen = currentInfoScreen ? infoScreens[currentInfoScreen] : null;

    return (
      <div className={className} {...props}>
        <Tray open={trayOpen}>
          <GearIcon onClick={this.handleOpenTrayClick}/>
          <TrayDrawer>
            <XIcon onClick={this.handleCloseTrayClick}/>
            <button onClick={this.handleChangeInfoScreen.bind(null, "about")}>About</button>
            <button onClick={this.handleChangeInfoScreen.bind(null, "other-products")}>Other Products</button>
            <button onClick={this.handleChangeInfoScreen.bind(null, "license")}>License Agreement</button>
            <button>Clear Data</button>
            <button>Success Percentage</button>
          </TrayDrawer>
        </Tray>
        <LevelListColumn>
          <LevelList ref="levelList">
            {/* Section 1 */}
            <ScrollAnchor ref="section-1"/>
            <ListSectionHeader noBorder>1.<DSpace/>Beginning Sounds</ListSectionHeader>
            <Waypoint onEnter={this.handleSectionScrollChange.bind(this, 1)}/>
            <LevelButtonItem score="100%" passing showingScore>t</LevelButtonItem>
            <LevelButtonItem score="37%" passing={false} showingScore>m</LevelButtonItem>
            <LevelButtonItem score="Incomplete" passing={false} showingScore>l</LevelButtonItem>
            <LevelButtonItem>Ln</LevelButtonItem>
            <LevelButtonItem>Lr</LevelButtonItem>
            <LevelButtonItem>Lg</LevelButtonItem>
            <LevelButtonItem>Ls</LevelButtonItem>
            <ListSectionHeader>2.<DSpace/>Ending Sounds</ListSectionHeader>
            <LevelButtonItem>Lt</LevelButtonItem>
            <LevelButtonItem>Ld</LevelButtonItem>
            <LevelButtonItem>Lp</LevelButtonItem>
            <LevelButtonItem>Lk</LevelButtonItem>
            <LevelButtonItem>Lf</LevelButtonItem>
            <LevelButtonItem>Lm</LevelButtonItem>
            <LevelButtonItem>Lb</LevelButtonItem>
            <LevelButtonItem index="3">Beginning & Ending Sounds</LevelButtonItem>
            <LevelButtonItem index="4">Rhyme Match</LevelButtonItem>
            <LevelButtonItem index="5">Rhyme Time</LevelButtonItem>
            <LevelButtonItem index="6">Say the Word</LevelButtonItem>
            <LevelButtonItem index="7">Echo the Word</LevelButtonItem>
            {/* Section 2 */}
            <ScrollAnchor ref="section-2"/>
            <LevelButtonItem index="8">Short Vowel <strong>a</strong> Sound</LevelButtonItem>
            <Waypoint onEnter={this.handleSectionScrollChange.bind(this, 2)}/>
            <LevelButtonItem index="9">Short Vowel <strong>e</strong> Sound</LevelButtonItem>
            <LevelButtonItem index="10">Short Vowel <strong>i</strong> Sound</LevelButtonItem>
            <LevelButtonItem index="11">Short Vowel <strong>o</strong> Sound</LevelButtonItem>
            <LevelButtonItem index="12">Short Vowel <strong>u</strong> Sound</LevelButtonItem>
            <LevelButtonItem index="13">Short Vowel Sounds</LevelButtonItem>
            <LevelButtonItem index="14">Forming New Words</LevelButtonItem>
            <LevelButtonItem index="15">Short Vowel <strong>a</strong></LevelButtonItem>
            <LevelButtonItem index="16">Short Vowel <strong>e</strong></LevelButtonItem>
            <LevelButtonItem index="17">Short Vowel <strong>i</strong></LevelButtonItem>
            <LevelButtonItem index="18">Short Vowel <strong>o</strong></LevelButtonItem>
            <LevelButtonItem index="19">Short Vowel <strong>u</strong></LevelButtonItem>
            <LevelButtonItem index="20">Review Short Vowels</LevelButtonItem>
            {/* Section 3 */}
            <ScrollAnchor ref="section-3"/>
            <ListSectionHeader>Consonant <strong>b</strong> With Short Vowels</ListSectionHeader>
            <Waypoint onEnter={this.handleSectionScrollChange.bind(this, 3)}/>
            <LevelButtonItem index="21">ba</LevelButtonItem>
            <LevelButtonItem index="22">be</LevelButtonItem>
            <LevelButtonItem index="23">bi</LevelButtonItem>
            <LevelButtonItem index="24">bo</LevelButtonItem>
            <LevelButtonItem index="25">bu</LevelButtonItem>
            <LevelButtonItem index="26">Review b</LevelButtonItem>
            <ListSectionHeader>Consonant <strong>c</strong> With Short Vowels</ListSectionHeader>
            <LevelButtonItem index="27">ca</LevelButtonItem>
            <LevelButtonItem index="28">co</LevelButtonItem>
            <LevelButtonItem index="29">cu</LevelButtonItem>
            <LevelButtonItem index="30">Review c</LevelButtonItem>
            <ListSectionHeader>Consonant <strong>d</strong> With Short Vowels</ListSectionHeader>
            <LevelButtonItem index="31">da</LevelButtonItem>
            <LevelButtonItem index="32">de</LevelButtonItem>
            <LevelButtonItem index="33">di</LevelButtonItem>
            <LevelButtonItem index="34">do</LevelButtonItem>
            <LevelButtonItem index="35">du</LevelButtonItem>
            <LevelButtonItem index="36">Review d</LevelButtonItem>
            <ListSectionHeader>Consonant <strong>f</strong> With Short Vowels</ListSectionHeader>
            <LevelButtonItem index="37">fa</LevelButtonItem>
            <LevelButtonItem index="38">fe</LevelButtonItem>
            <LevelButtonItem index="39">fi</LevelButtonItem>
            <LevelButtonItem index="40">fo</LevelButtonItem>
            <LevelButtonItem index="41">fu</LevelButtonItem>
            <LevelButtonItem index="42">Review f</LevelButtonItem>
            <LevelButtonItem index="43">Review b-f</LevelButtonItem>
          </LevelList>
        </LevelListColumn>
        <InfoColumn>
          <InfoColumnHeading>
            <SectionTitle/>
            <SectionArrowContainer>
              <SectionArrow onClick={this.showPreviousSection} flipped>Previous</SectionArrow>
              <LevelRange>Lessons {levelRange[0]}-{levelRange[1]}</LevelRange>
              <SectionArrow onClick={this.showNextSection}>Next</SectionArrow>
            </SectionArrowContainer>
          </InfoColumnHeading>
          <LevelDescription><SectionText/></LevelDescription>
          <ArrowContainer>
            <Arrow><ArrowText>Return to level 115</ArrowText></Arrow>
          </ArrowContainer>
        </InfoColumn>

        <InfoScreenContainer open={!!currentInfoScreen}>
          {InfoScreen ?
            <InfoScreen onBack={this.handleCloseInfoScreen}/> :
            null
          }
        </InfoScreenContainer>
      </div>
    );
  }
}

function classComponent(BaseComponent, ...names) {
  if(names.length === 1 && typeof names[0] === "function") {
    const [nameFn] = names;
    return class extends React.Component {
      render() {
        const {props} = this;
        const className = nameFn(props);
        return (
          <BaseComponent {...props}
            className={
              Array.isArray(className) ?
                classNames(...className, props.className) :
                classNames(className, props.className)
            }
          />
        );
      }
    }
  } else {
    return class extends React.Component {
      render() {
        const {props} = this;
        return (<BaseComponent {...props} className={classNames(...names, props.className)}/>);
      }
    }
  }
}
