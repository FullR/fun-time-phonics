import React from "react";
import InfoScreen from "components/info-screen";
import cn from "util/cn";

const {Header, Content, Footer} = InfoScreen;

export default class CreditScreen extends React.Component {
  render() {
    const {onBack, className} = this.props;
    const classNames = cn("Credit-screen", className);

    return (
      <InfoScreen {...this.props} className={classNames}>
        <Header>Fun-Time Phonics Credits</Header>
        <Content>
          <div className="Credit-screen__job-desc">Written by</div>
          <div className="Credit-screen__names">Robert Femiano</div>

          <div className="Credit-screen__job-desc">Programming by</div>
          <div className="Credit-screen__names">James Meyers</div>

          <div className="Credit-screen__job-desc">Software Design by</div>
          <div className="Credit-screen__names">Robert Femiano, Michael Baker, Chip Dombrowski, Patricia Gray, Terry McDonald, Sarah Rigney, James Meyers, Abbey J. Hunt</div>

          <div className="Credit-screen__job-desc">Graphic Design by</div>
          <div className="Credit-screen__names">Chip Dombrowski, Terry McDonald, Scott Slyter, Mary O’Dell</div>

          <div className="Credit-screen__job-desc">Edited by</div>
          <div className="Credit-screen__names">Patricia Gray, Michael Baker, Chip Dombrowski, Terry McDonald, Sarah Rigney, James Meyers, Robert Femiano, J. Abbey Hunt</div>

          <div className="Credit-screen__job-desc">Audio by</div>
          <div className="Credit-screen__names">Dave DeAndrea, Jacqueline Examilotis, Terry McDonald</div>

          <div className="Credit-screen__isbn">ISBN 978-1-60144-660-2</div>
        </Content>
        <Footer onBack={onBack}/>
      </InfoScreen>
    );
  }
}
