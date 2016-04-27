import React from "react";
import InfoScreen from "components/info-screen";
import Punc from "components/punc";
import cn from "util/cn";

const {Header, Content, Footer} = InfoScreen;

export default class CreditScreen extends React.Component {
  render() {
    const {onBack, className} = this.props;
    const classNames = cn("Credit-screen", className);

    return (
      <InfoScreen {...this.props} className={classNames}>
        <Header>About Fun-Time Phonics!™</Header>
        <Content>
          <p>Finally, a fun, systematic phonics program that is comprehension centered<Punc>!</Punc> <em>Fun-Time Phonics!</em>™ is a fun, easy-to-use program based on the scientific findings of the National Reading Commission<Punc>.</Punc> This program emphasizes sound/spelling patterns, vocabulary, and comprehension, not memorization<Punc>.</Punc> The colorful, game-like activities engage students through listening, thinking, speaking, and reading.</p>
          <p><em>Fun-Time Phonics!</em>™ teaches students that spoken words are composed of individual sounds (phonemes), and those sounds are written with letters<Punc>.</Punc>  Armed with this understanding of how print works as a code, reading becomes much easier than other more complicated approaches<Punc>.</Punc>  This program ensures complete phonemic awareness mastery by focusing on vowel isolation, which is often the most challenging and important part of learning to read<Punc>.</Punc>  Once students grasp how vowels influence the sound of the consonants and control the meaning of the words, they are only a step away from fluency.</p>
          <p><em>Fun-Time Phonics!</em>™ is a classroom-proven program that:</p>

          <ul>
            <li>Builds from students' natural speaking abilities, developing their auditory awareness of vowel sounds</li>
            <li>Incorporates multisensory instruction for introducing the alphabet and short vowels</li>
            <li>Involves multiple regions of the brain–analytical as well as artistic and language–providing various pathways to long-term memory and automatic word recall</li>
            <li>Utilizes co-articulation to introduce consonant sounds, eliminating traditional stumbling blocks and ensuring a successful reading start</li>
          </ul>

          <h3>Credits</h3>

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
