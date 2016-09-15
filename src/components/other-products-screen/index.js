import React from "react";
import bembam from "bembam";
import InfoScreen from "components/info-screen";
import OtherProduct from "components/other-product";
import Punc from "components/punc";
import otherProducts from "./other-products";
import pureUpdate from "pure-update";
require("./style.scss");

const {Header, Content, Footer} = InfoScreen;

export default class OtherProductsScreen extends React.Component {
  shouldComponentUpdate = pureUpdate;
  render() {
    const {onBack, className} = this.props;
    const cn = bembam("Other-products-screen", className);

    return (
      <InfoScreen {...this.props} className={cn}>
        <Header>Other Products</Header>
        <Content className={cn.el("content")}>
          <div className={cn.el("banner-container")}>
            <div className={cn.el("banner")}/>
          </div>

          <div className={cn.el("main-text")}>
            The Critical Thinking Co.™ is recommended by <em>Learning® Magazine</em>, <em>The Well-Trained Mind</em>, <em>College Prep Genius</em>, <em>Creative Child Magazine</em>, Dr. Toy, and used by Sylvan Learning® Centers, Club Z In-Home Tutoring, leading U.S. public schools, and gifted and talented programs in 57 countries throughout the world.
          </div>

          <OtherProduct {...otherProducts.alphabetSongGame}>
            <strong className={cn.el("op-title")}>Alphabet Song Game™</strong> (Toddler–Grade 1) <strong>FREE!</strong><br/>
            <strong>16 Games That Teach Letter Names, Letter Shapes, and Letter Writing!</strong><br/>
            The easy, fun way to teach the alphabet<Punc>!</Punc> Students learn uppercase and lowercase letter names and shapes, how to write them, and how to distinguish similar, mirrored, and reversed letters.
          </OtherProduct>

          <OtherProduct {...otherProducts.letterSoundSongAndGame}>
            <strong className={cn.el("op-title")}>Letter Sounds Song and Game™</strong> (PreK–Grade 1)<br/>
            Students learn letter sounds by singing the <em>Letter Sounds Song</em>™ and playing fun, simple games<Punc>.</Punc> The fast, fun, and effective way to learn phonics!
          </OtherProduct>

          <OtherProduct {...otherProducts.vowelSoundSongAndGame}>
            <strong className={cn.el("op-title")}>Vowel Sounds Song and Game™</strong> (PreK–Grade 2)<br/>
            The fun, easy way to teach long and short vowel sounds<Punc>!</Punc> Students sing the <em>Vowel Sounds Song</em>™ and play games to master short and long vowels.
          </OtherProduct>

          <OtherProduct {...otherProducts.funTimePhonics}>
            <strong className={cn.el("op-title")}>Fun-Time Phonics!™</strong> (PreK–Grade 2)<br/>
            <strong>The Simplest, Most Effective Way to Learn to Read!</strong><br/>
            These colorful, fun lessons and games use phonemic awareness and phonics to teach early learners to read<Punc>.</Punc> Students listen, think, and speak to master the basics of reading.
          </OtherProduct>

          <OtherProduct {...otherProducts.smartAbacus}>
            <strong className={cn.el("op-title")}>Smart Abacus™</strong> (PreK–Grade 1)<br/>
            Teaches addition, subtraction, and how to write numerals<Punc>.</Punc> This app is revolutionary in its simplicity<Punc>!</Punc> It teaches addition and subtraction with colorful, fun, step-by-step, hands-on lessons<Punc>.</Punc> It is available for most large phones, tablets, and computers<Punc>.</Punc> For even more mathematical learning and practice, use <em>Smart Abacus</em>™ with our award-winning Preschool&nbsp;–&nbsp;Grade 1 <em>Mathematical Reasoning</em>™ books.
          </OtherProduct>

          <OtherProduct {...otherProducts.riddleRabbit}>
            <strong className={cn.el("op-title")}>Riddle Rabbit™</strong> (PreK or Grades K–1)<br/>
            This fun, mind-building collection of short, colorful riddles teaches math, logic, letter sounds, and science<Punc>.</Punc> Each colorful riddle requires identification of two or more clues to deduce the answer.
          </OtherProduct>

          <OtherProduct {...otherProducts.mindBenders}>
            <strong className={cn.el("op-title")}>Mind Benders®</strong> (6 levels:  Grades PreK–12+)<br/>
            Students analyze each story and its clues, identifying logical associations between people, places, and things, and using their powers of deduction to solve the puzzles.
          </OtherProduct>

          <OtherProduct {...otherProducts.editorInChiefBeg}>
            <strong className={cn.el("op-title")}>Editor in Chief® Beginning</strong> (2 levels:  Grades 2–4)<br/>
            Students learn grammar, punctuation, spelling, capitalization, and critical reading using a standards-based thinking approach rather than drill and practice<Punc>.</Punc> After a concise lesson, students carefully analyze and edit stories, letters, and articles<Punc>.</Punc> This approach helps students master concepts that are necessary to become skilled writers.
          </OtherProduct>

          <OtherProduct {...otherProducts.editorInChiefA1}>
            <strong className={cn.el("op-title")}>Editor in Chief®</strong> (6 levels:  Grades 4–12+)<br/>
            Students learn grammar, punctuation, spelling, capitalization, and critical reading using a standards-based thinking approach rather than drill and practice<Punc>.</Punc> After a concise lesson, students carefully analyze and edit stories, letters, and articles<Punc>.</Punc> This approach helps students master concepts that are necessary to become skilled writers.
          </OtherProduct>

          <OtherProduct {...otherProducts.scienceDetective}>
            <strong className={cn.el("op-title")}>Science Detective®</strong> (2 levels:  Grades 3–6)<br/>
            Students analyze and synthesize the information from the text and the charts, tables, and graphs to answer critical thinking questions to improve their understanding of physical, life, and Earth science concepts<Punc>.</Punc> Students also practice reading comprehension and inferential and deductive thinking skills.
          </OtherProduct>

          <OtherProduct {...otherProducts.readingDetective}>
            <strong className={cn.el("op-title")}>Reading Detective®</strong> (3 levels:  Grades 3–8)<br/>
            Students read and analyze literature passages and use analysis, synthesis, and vocabulary skills to answer the reading comprehension questions<Punc>.</Punc> The activities help students understand reading concepts such as drawing inferences, making conclusions, determining cause-and-effect, and using context clues.
          </OtherProduct>

          <OtherProduct {...otherProducts.mathDetective}>
            <strong className={cn.el("op-title")}>Math Detective®</strong> (3 levels:  Grades 3–8)<br/>
            Students analyze and synthesize the information from the text and the charts, tables, and graphs to answer critical thinking questions to improve their understanding of the math concepts and develop reading comprehension.
          </OtherProduct>

          <OtherProduct {...otherProducts.wordRootsFlashcards}>
            <strong className={cn.el("op-title")}>Word Roots Flashcards™</strong> (4 levels:  Grades 3–12+)<br/>
            These can be used to supplement our <em>Word Roots</em> books/software or as an independent teaching tool<Punc>.</Punc> Students learn the meanings of word parts (prefixes, roots, suffixes) to decode the meaning and spelling of new vocabulary.
          </OtherProduct>

          <OtherProduct {...otherProducts.wordRoots}>
            <strong className={cn.el("op-title")}>Word Roots™</strong> (3 levels:  Grades 5–12+)<br/>
            Students learn Greek and/or Latin word parts (prefixes, roots, suffixes), assemble words from parts, and apply words in context<Punc>.</Punc> These activities will add words to their vocabulary and greater depth to their thinking and writing.
          </OtherProduct>
        </Content>
        <Footer onBack={onBack}/>
      </InfoScreen>
    );
  }
}
