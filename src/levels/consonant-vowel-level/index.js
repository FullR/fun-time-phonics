import level from "level";
import Lesson from "./lesson";
import Activity from "./activity";
import Response from "./response";
import Feedback from "./feedback";

export default ({id, activities, consonant, vowel, lessonWords, letterIntroWords}) => level({
  id,
  Lesson,
  Activity,
  Response,
  Feedback,
  activities,
  levelProps: {
    consonant,
    vowel,
    lessonWords,
    letterIntroWords,
    title: `Consonant "${consonant}" With Short Vowel "${vowel}"`,
    letterIntro: !!letterIntroWords
  }
});
