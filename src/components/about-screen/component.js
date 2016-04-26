import React from "react";
import InfoScreen from "components/info-screen";
import cn from "util/cn";

const {Header, Content, Footer} = InfoScreen;

export default class AboutScreen extends React.Component {
  render() {
    const {onBack, className} = this.props;
    const classNames = cn("About-screen", className);

    return (
      <InfoScreen {...this.props} className={classNames}>
        <Header>Fun-Time Phonics Credits</Header>
        <Content>
          About content goes here
        </Content>
        <Footer onBack={onBack}/>
      </InfoScreen>
    );
  }
}
