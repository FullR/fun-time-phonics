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
        <Header>About Fun-Time Phonics!™</Header>
        <Content>
          <p>Finally, a fun, systematic phonics program that is comprehension centered! Fun-Time Phonics!™ is a fun, easy-to-use program based on the scientific findings of the National Reading Commission. This program emphasizes sound/spelling patterns, vocabulary, and comprehension, not memorization. The colorful, game-like activities engage students through listening, thinking, speaking, and reading.</p>
          <p>Fun-Time Phonics!™ teaches students that spoken words are composed of individual sounds (phonemes), and those sounds are written with letters.  Armed with this understanding of how print works as a code, reading becomes much easier than other more complicated approaches.  This program ensures complete phonemic awareness mastery by focusing on vowel isolation, which is often the most challenging and important part of learning to read.  Once students grasp how vowels influence the sound of the consonants and control the meaning of the words, they are only a step away from fluency.</p>

          <div className="About-screen__job-desc">Written by</div>
          <div className="About-screen__names">Robert Femiano</div>

          <div className="About-screen__job-desc">Programming by</div>
          <div className="About-screen__names">James Meyers</div>

          <div className="About-screen__job-desc">Software Design by</div>
          <div className="About-screen__names">Robert Femiano, Michael Baker, Chip Dombrowski, Patricia Gray, Terry McDonald, Sarah Rigney, James Meyers, Abbey J. Hunt</div>

          <div className="About-screen__job-desc">Graphic Design by</div>
          <div className="About-screen__names">Chip Dombrowski, Terry McDonald, Scott Slyter, Mary O’Dell</div>

          <div className="About-screen__job-desc">Edited by</div>
          <div className="About-screen__names">Patricia Gray, Michael Baker, Chip Dombrowski, Terry McDonald, Sarah Rigney, James Meyers, Robert Femiano, J. Abbey Hunt</div>

          <div className="About-screen__job-desc">Audio by</div>
          <div className="About-screen__names">Dave DeAndrea, Jacqueline Examilotis, Terry McDonald</div>

          <div className="About-screen__isbn">ISBN 978-1-60144-660-2</div>
        </Content>
        <Footer onBack={onBack}/>
      </InfoScreen>
    );
  }
}
