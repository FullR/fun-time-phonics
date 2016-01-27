import React from "react";
import {soundExists, imageExists} from "assets";
import {defaults, uniq, flatten, pluck} from "lodash";
import soundContext from "decorators/sound-context";
import hasActivities from "decorators/has-activities";
import hasLesson from "decorators/has-lesson";
import persists from "decorators/persists";

import Lesson from "./lesson";
import Question from "./question";
import Response from "./response";
import LetterIntro from "./letter-intro";

import Activity from "components/activity";
import Feedback from "components/feedback";

const wordSounds = (words, actor="owl") => words.reduce((sounds, word) => {
  sounds[`${actor}/${word}`] = `${actor}/words/${word}`;
  return sounds;
}, {});

export default (info) => {
  const {
    title,
    number,
    activityCount,
    letter,
    vowel,
    letterIntro,
    exampleWords,
    lessonWords,
    activityData
  } = defaults(info, {
    title: `Consonant '${info.letter}' Short Vowel Sound '${info.vowel}'`,
    activityCount: info.activityData.length
  });

  // Check activity words. Warn about missing audio/images
  if(window.DEBUG) {
    uniq(flatten(pluck(activityData, "words"))).forEach((word) => {
      if(!soundExists(`teacher/words/${word}`)) {
        console.error(`Missing teacher sound for ${word}`);
      }
      if(!imageExists(`words/${word}`)) {
        console.error(`Missing image for ${word}`);
      }
    });
  }

  const Activities = activityData.map((activity) => {
    @soundContext(wordSounds(activity.words, "teacher"))
    class ActivityInstance extends React.Component {
      render() {
        return (<Activity {...this.props} {...activity} {...info} Question={Question} Response={Response}/>);
      }
    }

    return ActivityInstance;
  });

  const letterIntroSounds = letterIntro ? {
    ...wordSounds(exampleWords),
    "owl/the-letter": "owl/common/the-letter",
    "owl/letter": `owl/common/letters/${letter}`,
    "owl/looks-like-this": "owl/common/looks-like-this",
    "owl/makes-the-beginning-sound-of": "owl/common/makes-the-beginning-sound-of"
  } : null;

  @soundContext({
    applause: "applause",

    ...letterIntroSounds,
    ...wordSounds(lessonWords),

    "owl/letters": `owl/common/letters/${letter}${vowel}`,
    "owl/phonic": `owl/common/phonics/_${letter}${vowel}h_`,

    // Lesson
    "owl/words-like": "owl/common/words-such-as",
    "owl/all-begin-with-the": "owl/common/all-begin-with-the",
    "owl/sound": "owl/common/sound",
    "owl/we-use-the-letters": "owl/common/we-use-the-letters",
    "owl/to-write-the": "owl/common/to-write-the",
    "owl/when-we-read-the-letters": "owl/common/when-we-read-the-letters",
    "owl/they-tell-us-to-say": "owl/common/they-tell-us-to-say",
    "owl/touch-the": "owl/common/touch-the-green-arrow-to-begin",

    // Activity
    "teacher/letters": `teacher/common/letters/${letter}${vowel}`,
    "teacher/phonic": `teacher/common/phonics/_${letter}${vowel}h_`,

    // Question
    "teacher/drag-the-letters": "teacher/common/drag-the-letters",
    "teacher/to-the-word-that-begins-with-that-sound": "teacher/common/to-the-word-that-begins-with-that-sound",

    // Response
    // Incorrect
      "teacher/does-not-begin-with-the": "teacher/common/does-not-begin-with-the",
      "teacher/sound-so-it-does-not-begin-with": "teacher/common/sound-so-it-does-not-begin-with",
    // Correct
      "teacher/correct": "teacher/common/correct",
      "teacher/makes-the": "teacher/common/makes-the",
      "teacher/sound-in": "teacher/common/sound-in"
  })
  @persists(`level-${number}`, true)
  @hasActivities(activities)
  @hasLesson
  class Level extends React.Component {
    constructor(props) {
      super(props);
      this.state = this.load({
        activityIndex: 0,
        showingLesson: true,
        score: 0,
        highscore: -1,
        activitiesComplete: false,
        total: activities.length
      });
    }

    componentDidMount() {
      this.saveGlobal({
        lastLevel: number.toString()
      });
    }

    reset() {
      this.setState({
        activityIndex: 0,
        showingLesson: true,
        score: 0,
        activitiesComplete: false
      });
    }

    render() {
      const {showingLetterIntro, showingLesson, activityIndex, activitiesComplete, currentAnswer, reviewingLesson} = this.state;
      const Activity = this.getActivity();

      if(activitiesComplete) {
        return (<Feedback {...this.props} {...info} onBack={::this.reset}/>);
      } else if(showingLesson) {
        return (<Lesson {...this.props} {...info} arrowLabel={`Activity ${activityIndex + 1}`} onComplete={::this.hideLesson}/>);
      } else if(Activity) {
        return (
          <Activity {...this.props} {...info}
            index={activityIndex}
            answer={currentAnswer}
            onAnswer={::this.setCurrentAnswer}
            onComplete={::this.completeActivity}
            onOwlClick={::this.reviewLesson}
            fullInstructions={reviewingLesson}
          />
        );
      } else {
        return null;
      }
    }
  }

  return Level;
};
