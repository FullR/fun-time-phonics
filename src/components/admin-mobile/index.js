import React from "react";
import ReactDOM from "react-dom";
import classNames from "classnames";
import Authscreen from "components/authscreen";
import Dash from "components/dash";
import sections from "./sections";
import infoScreens from "./info-screens";
import DSpace from "components/dspace";
import ChangeScoreModal from "components/change-score-modal";
import ConfirmModal from "components/confirm-modal";
import createScrollLoop from "util/create-scroll-loop";
import demoLevels from "demo-levels";
import store from "store";
import actions from "store/actions";
import getLevelData from "store/helpers/get-level-data";
import getLevelMax from "store/helpers/get-level-max";
import getRequiredScore from "store/helpers/get-required-score";
import toPercent from "util/to-percent";
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
const TrayOverlay = classComponent("div", "Mobile-admin__tray-overlay");
const TrayDrawer = classComponent("div", "Mobile-admin__tray-drawer");
const LevelListColumn = classComponent("div", "Mobile-admin__level-list-column");
const LevelListColumnHeading = classComponent("div", "Mobile-admin__level-list-column-heading");
const LevelListItem = classComponent("div", ({noBorder}) => [
  "Mobile-admin__level-list-item",
  {"Mobile-admin__level-list-item--no-border": noBorder}
]);
const SectionHeading = classComponent("div", "Mobile-admin__section-heading");
const LevelRange = classComponent("div", "Mobile-admin__level-range");
const LevelButton = classComponent("div", ({selected}) => [
  "Mobile-admin__level-button",
  {"Mobile-admin__level-button--selected": selected}
]);
const LevelButtonIndex = classComponent("span", "Mobile-admin__level-button-index");
const LevelButtonTitle = classComponent("span", ({small}) => [
  "Mobile-admin__level-button-title",
  {"Mobile-admin__level-button-title--small": small}
]);
const LevelButtonHeader = classComponent("div", ({indented}) => [
  "Mobile-admin__level-button-header",
  {"Mobile-admin__level-button-header--indented": indented}
]);
const LevelButtonScore = classComponent("div", ({passing, visible}) => [
  "Mobile-admin__level-button-score",
  "Mobile-admin__level-button-score--" + (passing ? "passing" : "failing")
]);
const InfoColumn = classComponent("div", "Mobile-admin__info-column");
const InfoColumnHeading = classComponent("div", "Mobile-admin__info-column-heading");
const LevelDescription = classComponent("div", "Mobile-admin__level-description");
const LevelDescriptionHeader = classComponent("div", "Mobile-admin__level-description-header");
const LevelDescriptionRange = classComponent("div", "Mobile-admin__level-description-range");
const ArrowContainer = classComponent("div", "Mobile-admin__arrow-container");
const Arrow = classComponent("div", ({pulsing}) => [
  "Mobile-admin__arrow",
  {"Mobile-admin__arrow--pulsing": pulsing}
]);
const ArrowText = classComponent("div", "Mobile-admin__arrow-text");
const ScrollAnchor = classComponent("div", "Mobile-admin__scroll-anchor");
const GearIcon = classComponent("div", "Mobile-admin__gear-icon");
const XIcon = classComponent("div", "Mobile-admin__x-icon");
const InfoScreenContainer = classComponent("div", ({open}) => [
  "Mobile-admin__info-screen",
  {"Mobile-admin__info-screen--open": open}
]);

function formatScore(s) {
  return Math.floor(s);
}

const LevelButtonItem = makeStateful((props) => {
  const {children, index, showingScore, passing, score, indented, smallTitle} = props;
  const Index = index ? (<LevelButtonIndex>{index}.<DSpace/></LevelButtonIndex>) : null;
  const Score = showingScore ? (<LevelButtonScore passing={passing}>{score}</LevelButtonScore>) : null;

  return (
    <LevelListItem>
      <LevelButton {...props}>
        <LevelButtonHeader indented={indented}>
          {Index}<LevelButtonTitle small={smallTitle}>{children}</LevelButtonTitle>
        </LevelButtonHeader>
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
  constructor(props) {
    super(props);
    const currentLevel = props.demo && !demoLevels.includes(props.user.currentLevelId) ? "26" : props.user.currentLevelId;

    this.state = {
      section: getSection(currentLevel),
      authenticated: !!props.noAuth,
      trayOpen: false,
      arrowPulse: false,
      currentInfoScreen: null,
      showingClearDataModal: false,
      showingPercentModal: false,
      showingClearModal: false,
      showingChangeScoreModal: false,
      currentLevel
    };
  }

  handleLogin = () => {
    this.setState({authenticated: true});
    if(this.props.onLogin) {
      this.props.onLogin();
    }
  };

  handleChangeInfoScreen = (infoScreen) => this.setState({currentInfoScreen: infoScreen, trayOpen: false});
  handleCloseInfoScreen = () => this.setState({currentInfoScreen: null});

  handleOpenTrayClick = () => this.setState({trayOpen: true});
  handleCloseTrayClick = () => this.setState({trayOpen: false});

  handleShowClearDataModal = () => this.setState({showingClearDataModal: true});
  handleShowPercentModal = () => this.setState({showingPercentModal: true});

  handleLogin = () => {
    this.setState({authenticated: true});
    if(this.props.onLogin) {
      this.props.onLogin();
    }
  };

  componentDidMount() {
    const {authenticated, currentLevel} = this.state;
    if(authenticated) {
      this.scrollToLevel(currentLevel);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.pulseTimeout);
    this.stopScrolling();
  }

  componentDidUpdate(prevProps, prevState) {
    if(!prevState.authenticated && this.state.authenticated) {
      const {currentLevel} = this.state;
      this.scrollToLevel(currentLevel);
    }
  }

  scrollToRef(refName, duration) {
    const {levelList} = this.refs;
    const targetRef = this.refs[refName];
    if(!targetRef) return;
    const levelListEl = ReactDOM.findDOMNode(levelList);
    const targetEl = ReactDOM.findDOMNode(targetRef);
    this.stopScrolling();

    this.cancelScrollLoop = createScrollLoop(levelListEl, targetEl, duration, () => {
      this.cancelScrollLoop = null;
    });
  }

  scrollToLevel(levelId, duration=0) {
    this.setState({section: getSection(levelId)});
    this.scrollToRef(`level-button-${levelId}`, duration);
  }

  stopScrolling() {
    if(this.cancelScrollLoop) {
      this.cancelScrollLoop();
      this.cancelScrollLoop = null;
    }
  }

  selectLevel(levelId) {
    clearTimeout(this.pulseTimeout);
    this.setState({arrowPulse: true, currentLevel: levelId, section: getSection(levelId)});
    this.pulseTimeout = setTimeout(() => this.setState({arrowPulse: false}), 3000);
  }

  showLevel() {
    const {currentLevel} = this.state;
    if(!currentLevel) return;
    const {complete} = getLevelData(this.props, currentLevel);
    const [parentLevelId] = currentLevel.split("-");

    if(complete) {
      if(parentLevelId === "1") {
        resetLevel("1");
        level1SubLessons.forEach((c) => resetLevel(`1-${c}`));
      } else if(parentLevelId === "2") {
        resetLevel("2");
        level2SubLessons.forEach((c) => resetLevel(`2-${c}`));
      } else {
        resetLevel(currentLevel);
      }
    }

    this.props.onShowLevel(currentLevel);
  }

  openChangeScoreModal() {
    this.setState({showingChangeScoreModal: true});
  }

  closeChangeScoreModal() {
    this.setState({showingChangeScoreModal: false});
  }

  setRequiredScore(requiredScore) {
    store.dispatch({type: actions.SET_REQUIRED_SCORE, requiredScore});
  }

  openClearModal() {
    this.setState({showingClearModal: true});
  }

  closeClearModal() {
    this.setState({showingClearModal: false});
  }

  clearStorage() {
    store.dispatch({type: actions.RESET_PROGRESS});
    this.setState({
      currentLevel: "1",
      sectionIndex: 0,
      trayOpen: false
    });
    this.closeClearModal();
  }

  print() {
    window.print();
  }

  exit() {
    if(isElectron()) {
      window.close();
    }
  }

  render() {
    const {props, state} = this;
    const {demo} = props;
    const {section, currentLevel, trayOpen, currentInfoScreen, showingChangeScoreModal, showingClearModal, arrowPulse, authenticated} = state;
    const {Title: SectionTitle, Text: SectionText, levelRange} = sections[section] || sections["1"];
    const className = classNames("Mobile-admin", props.className);
    const InfoScreen = currentInfoScreen ? infoScreens[currentInfoScreen] : null;
    const {requiredScore} = props.user;

    if(!authenticated) {
      return (
        <Authscreen
          onSuccess={this.handleLogin.bind(this)}
          onFail={() => store.dispatch({type: actions.BACK_ROUTE})}
          isMobile={props.isMobile}
        />
      );
    }

    const level = (levelId) => {
      const disabled = demo && !demoLevels.includes(levelId);
      const max = getLevelMax(levelId);
      const {started, score, activityIndex} = getLevelData(this.props, levelId);
      const complete = max === activityIndex;
      const percent = toPercent(score, max);
      const baseLevelId = levelId.split("-")[0];
      const index = baseLevelId === "1" || baseLevelId === "2" ? null : levelId;
      const ref = `level-button-${levelId}`;
      const isSubLevel = index === null;
      const indented = isSubLevel;

      if(disabled) {
        return {
          selected: false,
          onClick: null,
          indented,
          index,
          disabled,
          ref
        };
      } else {
        return {
          selected: levelId === currentLevel,
          onClick: this.selectLevel.bind(this, levelId),
          showingScore: complete || started,
          score: complete ? `${formatScore(percent)}%` : "Incomplete",
          passing: complete && started && percent >= getRequiredScore(),
          indented,
          index,
          disabled,
          ref
        };
      }
    };

    const levelData = getLevelData(this.props, currentLevel);
    let arrowText;
    let arrowStyle;

    if(levelData.complete) {
      arrowText = `Replay Lesson ${getLevelDisplayId(currentLevel)}`;
      arrowStyle = {fontSize: "91%"};
    } else if(levelData.started) {
      arrowText = `Return to Lesson ${getLevelDisplayId(currentLevel)}`;
      arrowStyle = {fontSize: "83%"};
    } else {
      arrowText = `Play Lesson ${getLevelDisplayId(currentLevel)}`;
      arrowStyle = {fontSize: "100%"};
    }

    return (
      <div className={className} {...props}>
        <Tray open={trayOpen}>
          <GearIcon onClick={this.handleOpenTrayClick}/>
          <TrayDrawer>
            <XIcon onClick={this.handleCloseTrayClick}/>
            <button onClick={this.handleChangeInfoScreen.bind(null, "about")}>About</button>
            <button onClick={this.handleChangeInfoScreen.bind(null, "other-products")}>Other Products</button>
            <button onClick={this.handleChangeInfoScreen.bind(null, "license")}>License Agreement</button>
            <button onClick={this.openClearModal.bind(this)}>Clear Data</button>
            <button onClick={this.openChangeScoreModal.bind(this)}>Success Percentage</button>
          </TrayDrawer>
        </Tray>
        <LevelListColumn>
          <LevelList ref="levelList">
            {/* Section 1 */}
            <ListSectionHeader noBorder>1.<DSpace/>Beginning Sounds</ListSectionHeader>
            <LevelButtonItem {...level("1")}>Beginning <strong>t</strong> Sound</LevelButtonItem>
            <LevelButtonItem {...level("1-m")}>Beginning <strong>m</strong> Sound</LevelButtonItem>
            <LevelButtonItem {...level("1-l")}>Beginning <strong>l</strong> Sound</LevelButtonItem>
            <LevelButtonItem {...level("1-n")}>Beginning <strong>n</strong> Sound</LevelButtonItem>
            <LevelButtonItem {...level("1-r")}>Beginning <strong>r</strong> Sound</LevelButtonItem>
            <LevelButtonItem {...level("1-g")}>Beginning <strong>g</strong> Sound</LevelButtonItem>
            <LevelButtonItem {...level("1-s")}>Beginning <strong>s</strong> Sound</LevelButtonItem>
            <ListSectionHeader>2.<DSpace/>Ending Sounds</ListSectionHeader>
            <LevelButtonItem {...level("2")}>Ending <strong>t</strong> Sound</LevelButtonItem>
            <LevelButtonItem {...level("2-d")}>Ending <strong>d</strong> Sound</LevelButtonItem>
            <LevelButtonItem {...level("2-p")}>Ending <strong>p</strong> Sound</LevelButtonItem>
            <LevelButtonItem {...level("2-k")}>Ending <strong>k</strong> Sound</LevelButtonItem>
            <LevelButtonItem {...level("2-f")}>Ending <strong>f</strong> Sound</LevelButtonItem>
            <LevelButtonItem {...level("2-m")}>Ending <strong>m</strong> Sound</LevelButtonItem>
            <LevelButtonItem {...level("2-b")}>Ending <strong>b</strong> Sound</LevelButtonItem>
            <LevelButtonItem {...level("3")}>Beginning & Ending Sounds</LevelButtonItem>
            <LevelButtonItem {...level("4")}>Rhyme Match</LevelButtonItem>
            <LevelButtonItem {...level("5")}>Rhyme Time</LevelButtonItem>
            <LevelButtonItem {...level("6")}>Say the Word</LevelButtonItem>
            <LevelButtonItem {...level("7")}>Echo the Word</LevelButtonItem>
            {/* Section 2 */}
            <LevelButtonItem {...level("8")}>Short Vowel <strong>a</strong> Sound</LevelButtonItem>
            <LevelButtonItem {...level("9")}>Short Vowel <strong>e</strong> Sound</LevelButtonItem>
            <LevelButtonItem {...level("10")}>Short Vowel <strong>i</strong> Sound</LevelButtonItem>
            <LevelButtonItem {...level("11")}>Short Vowel <strong>o</strong> Sound</LevelButtonItem>
            <LevelButtonItem {...level("12")}>Short Vowel <strong>u</strong> Sound</LevelButtonItem>
            <LevelButtonItem {...level("13")}>Short Vowel Sounds</LevelButtonItem>
            <LevelButtonItem {...level("14")}>Forming New Words</LevelButtonItem>
            <LevelButtonItem {...level("15")}>Short Vowel <strong>a</strong></LevelButtonItem>
            <LevelButtonItem {...level("16")}>Short Vowel <strong>e</strong></LevelButtonItem>
            <LevelButtonItem {...level("17")}>Short Vowel <strong>i</strong></LevelButtonItem>
            <LevelButtonItem {...level("18")}>Short Vowel <strong>o</strong></LevelButtonItem>
            <LevelButtonItem {...level("19")}>Short Vowel <strong>u</strong></LevelButtonItem>
            <LevelButtonItem {...level("20")}>Review Short Vowels</LevelButtonItem>
            {/* Section 3 */}
            <ListSectionHeader>Consonant <strong>b</strong> With Short Vowels</ListSectionHeader>
            <LevelButtonItem {...level("21")}>ba</LevelButtonItem>
            <LevelButtonItem {...level("22")}>be</LevelButtonItem>
            <LevelButtonItem {...level("23")}>bi</LevelButtonItem>
            <LevelButtonItem {...level("24")}>bo</LevelButtonItem>
            <LevelButtonItem {...level("25")}>bu</LevelButtonItem>
            <LevelButtonItem {...level("26")}>Review b</LevelButtonItem>
            <ListSectionHeader>Consonant <strong>c</strong> With Short Vowels</ListSectionHeader>
            <LevelButtonItem {...level("27")}>ca</LevelButtonItem>
            <LevelButtonItem {...level("28")}>co</LevelButtonItem>
            <LevelButtonItem {...level("29")}>cu</LevelButtonItem>
            <LevelButtonItem {...level("30")}>Review c</LevelButtonItem>
            <ListSectionHeader>Consonant <strong>d</strong> With Short Vowels</ListSectionHeader>
            <LevelButtonItem {...level("31")}>da</LevelButtonItem>
            <LevelButtonItem {...level("32")}>de</LevelButtonItem>
            <LevelButtonItem {...level("33")}>di</LevelButtonItem>
            <LevelButtonItem {...level("34")}>do</LevelButtonItem>
            <LevelButtonItem {...level("35")}>du</LevelButtonItem>
            <LevelButtonItem {...level("36")}>Review d</LevelButtonItem>
            <ListSectionHeader>Consonant <strong>f</strong> With Short Vowels</ListSectionHeader>
            <LevelButtonItem {...level("37")}>fa</LevelButtonItem>
            <LevelButtonItem {...level("38")}>fe</LevelButtonItem>
            <LevelButtonItem {...level("39")}>fi</LevelButtonItem>
            <LevelButtonItem {...level("40")}>fo</LevelButtonItem>
            <LevelButtonItem {...level("41")}>fu</LevelButtonItem>
            <LevelButtonItem {...level("42")}>Review f</LevelButtonItem>
            <LevelButtonItem {...level("43")}>Review b-f</LevelButtonItem>
            {/* Section 4 */}
            <ListSectionHeader>Consonant <strong>g</strong> With Short Vowels</ListSectionHeader>
            <LevelButtonItem {...level("44")}>ga</LevelButtonItem>
            <LevelButtonItem {...level("45")}>go</LevelButtonItem>
            <LevelButtonItem {...level("46")}>gu</LevelButtonItem>
            <LevelButtonItem {...level("47")}>Review g</LevelButtonItem>
            <ListSectionHeader>Consonant <strong>h</strong> With Short Vowels</ListSectionHeader>
            <LevelButtonItem {...level("48")}>ha</LevelButtonItem>
            <LevelButtonItem {...level("49")}>he</LevelButtonItem>
            <LevelButtonItem {...level("50")}>hi</LevelButtonItem>
            <LevelButtonItem {...level("51")}>ho</LevelButtonItem>
            <LevelButtonItem {...level("52")}>hu</LevelButtonItem>
            <LevelButtonItem {...level("53")}>Review h</LevelButtonItem>
            <ListSectionHeader>Consonant <strong>j</strong> With Short Vowels</ListSectionHeader>
            <LevelButtonItem {...level("54")}>ja</LevelButtonItem>
            <LevelButtonItem {...level("55")}>je</LevelButtonItem>
            <LevelButtonItem {...level("56")}>ji</LevelButtonItem>
            <LevelButtonItem {...level("57")}>jo</LevelButtonItem>
            <LevelButtonItem {...level("58")}>ju</LevelButtonItem>
            <LevelButtonItem {...level("59")}>Review j</LevelButtonItem>
            <ListSectionHeader>Consonant <strong>k</strong> With Short Vowels</ListSectionHeader>
            <LevelButtonItem {...level("60")}>ke</LevelButtonItem>
            <LevelButtonItem {...level("61")}>ki</LevelButtonItem>
            <LevelButtonItem {...level("62")}>Review k</LevelButtonItem>
            <LevelButtonItem {...level("63")}>Review b-k</LevelButtonItem>
            {/* Section 5 */}
            <ListSectionHeader>Consonant <strong>l</strong> With Short Vowels</ListSectionHeader>
            <LevelButtonItem {...level("64")}>la</LevelButtonItem>
            <LevelButtonItem {...level("65")}>le</LevelButtonItem>
            <LevelButtonItem {...level("66")}>li</LevelButtonItem>
            <LevelButtonItem {...level("67")}>lo</LevelButtonItem>
            <LevelButtonItem {...level("68")}>lu</LevelButtonItem>
            <LevelButtonItem {...level("69")}>Review l</LevelButtonItem>
            <ListSectionHeader>Consonant <strong>m</strong> With Short Vowels</ListSectionHeader>
            <LevelButtonItem {...level("70")}>ma</LevelButtonItem>
            <LevelButtonItem {...level("71")}>me</LevelButtonItem>
            <LevelButtonItem {...level("72")}>mi</LevelButtonItem>
            <LevelButtonItem {...level("73")}>mo</LevelButtonItem>
            <LevelButtonItem {...level("74")}>mu</LevelButtonItem>
            <LevelButtonItem {...level("75")}>Review m</LevelButtonItem>
            <ListSectionHeader>Consonant <strong>n</strong> With Short Vowels</ListSectionHeader>
            <LevelButtonItem {...level("76")}>na</LevelButtonItem>
            <LevelButtonItem {...level("77")}>ne</LevelButtonItem>
            <LevelButtonItem {...level("78")}>ni</LevelButtonItem>
            <LevelButtonItem {...level("79")}>no</LevelButtonItem>
            <LevelButtonItem {...level("80")}>nu</LevelButtonItem>
            <LevelButtonItem {...level("81")}>Review n</LevelButtonItem>
            <ListSectionHeader>Consonant <strong>p</strong> With Short Vowels</ListSectionHeader>
            <LevelButtonItem {...level("82")}>pa</LevelButtonItem>
            <LevelButtonItem {...level("83")}>pe</LevelButtonItem>
            <LevelButtonItem {...level("84")}>pi</LevelButtonItem>
            <LevelButtonItem {...level("85")}>po</LevelButtonItem>
            <LevelButtonItem {...level("86")}>pu</LevelButtonItem>
            <LevelButtonItem {...level("87")}>Review p</LevelButtonItem>
            <LevelButtonItem {...level("88")}>Review b-p</LevelButtonItem>
            {/* Section 6 */}
            <ListSectionHeader>Consonant <strong>q</strong> With Short Vowels</ListSectionHeader>
            <LevelButtonItem {...level("89")}>qu</LevelButtonItem>
            <ListSectionHeader>Consonant <strong>r</strong> With Short Vowels</ListSectionHeader>
            <LevelButtonItem {...level("90")}>ra</LevelButtonItem>
            <LevelButtonItem {...level("91")}>re</LevelButtonItem>
            <LevelButtonItem {...level("92")}>ri</LevelButtonItem>
            <LevelButtonItem {...level("93")}>ro</LevelButtonItem>
            <LevelButtonItem {...level("94")}>ru</LevelButtonItem>
            <LevelButtonItem {...level("95")}>Review r</LevelButtonItem>
            <ListSectionHeader>Consonant <strong>s</strong> With Short Vowels</ListSectionHeader>
            <LevelButtonItem {...level("96")}>sa</LevelButtonItem>
            <LevelButtonItem {...level("97")}>se</LevelButtonItem>
            <LevelButtonItem {...level("98")}>si</LevelButtonItem>
            <LevelButtonItem {...level("99")}>so</LevelButtonItem>
            <LevelButtonItem {...level("100")}>su</LevelButtonItem>
            <LevelButtonItem {...level("101")}>Review s</LevelButtonItem>
            <ListSectionHeader>Consonant <strong>t</strong> With Short Vowels</ListSectionHeader>
            <LevelButtonItem {...level("102")}>ta</LevelButtonItem>
            <LevelButtonItem {...level("103")}>te</LevelButtonItem>
            <LevelButtonItem {...level("104")}>ti</LevelButtonItem>
            <LevelButtonItem {...level("105")}>to</LevelButtonItem>
            <LevelButtonItem {...level("106")}>tu</LevelButtonItem>
            <LevelButtonItem {...level("107")}>Review t</LevelButtonItem>
            <LevelButtonItem {...level("108")}>Review b-t</LevelButtonItem>
            {/* Section 7 */}
            <ListSectionHeader>Consonant <strong>v</strong> With Short Vowels</ListSectionHeader>
            <LevelButtonItem {...level("109")}>va</LevelButtonItem>
            <LevelButtonItem {...level("110")}>ve</LevelButtonItem>
            <LevelButtonItem {...level("111")}>vi</LevelButtonItem>
            <LevelButtonItem {...level("112")}>vo</LevelButtonItem>
            <LevelButtonItem {...level("113")}>Review v</LevelButtonItem>
            <ListSectionHeader>Consonant <strong>w</strong> With Short Vowels</ListSectionHeader>
            <LevelButtonItem {...level("114")}>wa</LevelButtonItem>
            <LevelButtonItem {...level("115")}>we</LevelButtonItem>
            <LevelButtonItem {...level("116")}>wi</LevelButtonItem>
            <LevelButtonItem {...level("117")}>Review w</LevelButtonItem>
            <LevelButtonItem {...level("118")}>Consonant <strong>x</strong> Ending Sound</LevelButtonItem>
            <LevelButtonItem {...level("119")}>Consonant <strong>y</strong> With Short Vowels</LevelButtonItem>
            <LevelButtonItem {...level("120")}>Consonant <strong>z</strong> With Short Vowels</LevelButtonItem>
            <LevelButtonItem {...level("121")}>Review y-z</LevelButtonItem>
            <LevelButtonItem {...level("122")} smallTitle>Coarticulation Assessment b-z</LevelButtonItem>
            {/* Section 8 */}
            <LevelButtonItem {...level("123")}>Identify Ending Sounds</LevelButtonItem>
            <LevelButtonItem {...level("124")}>Identify Vowel Sounds</LevelButtonItem>
            <LevelButtonItem {...level("125")}>Read First Words</LevelButtonItem>
            <LevelButtonItem {...level("126")}>Reading for Meaining</LevelButtonItem>
          </LevelList>
        </LevelListColumn>
        <InfoColumn>
          <LevelDescription>
            <LevelDescriptionHeader><SectionTitle/></LevelDescriptionHeader>
            <LevelDescriptionRange>Lessons {levelRange[0]}-{levelRange[1]}</LevelDescriptionRange>
            <SectionText/>
          </LevelDescription>
          <ArrowContainer>
            <Arrow onClick={this.showLevel.bind(this)} style={arrowStyle} pulsing={arrowPulse}>
              <ArrowText>{arrowText}</ArrowText>
            </Arrow>
          </ArrowContainer>
        </InfoColumn>

        <InfoScreenContainer open={!!currentInfoScreen}>
          {InfoScreen ?
            <InfoScreen onBack={this.handleCloseInfoScreen}/> :
            null
          }
        </InfoScreenContainer>
        <ConfirmModal open={showingClearModal} onConfirm={this.clearStorage.bind(this)} onCancel={this.closeClearModal.bind(this)}>
          Are you sure you want to clear all data for this user?&nbsp; This action cannot be undone.
        </ConfirmModal>
        <ChangeScoreModal
          value={requiredScore}
          open={showingChangeScoreModal}
          onClose={this.closeChangeScoreModal.bind(this)}
          onChange={this.setRequiredScore.bind(this)}
        />
        {trayOpen ? <TrayOverlay onClick={this.handleCloseTrayClick}/> : null}
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

function getLevelDisplayId(levelId) {
  switch(levelId) {
    case "1": return "1-t";
    case "2": return "2-t";
    default: return levelId;
  }
}

function getSection(levelId) {
  if(levelId.includes("-")) return 1;
  const levelIdNum = parseInt(levelId);
  const sectionId =  Object.values(sections).find(({levelRange: r}) => levelIdNum >= r[0] && levelIdNum <= r[1]).id;
  return sectionId;
}
