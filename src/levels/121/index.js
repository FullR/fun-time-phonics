import React from "react";
import multiConsonantReviewLevel from "levels/multi-consonant-review-level";
import Lesson from "./lesson";

export default multiConsonantReviewLevel({
  Lesson,
  id: "121",
  Title: () => (<span>Review:&nbsp;&nbsp;y-z With Short Vowels</span>),
  letter: "z",
  activities: [
    {word: "yuck", letters: ["yi", "ye", "yu"], correctLetters: "yu"},
    {word: "yellow", letters: ["yi", "ye", "yo"], correctLetters: "ye", shortInstructions: true},
    {word: "yak", letters: ["ya", "ye", "yo"], correctLetters: "ya", shortInstructions: true},
    {word: "zombie", letters: ["za", "ze", "zo"], correctLetters: "zo", shortInstructions: true},
    {word: "zit", letters: ["zi", "ze", "zo"], correctLetters: "zi", shortInstructions: true},
    {word: "zest", letters: ["zi", "ze", "za"], correctLetters: "ze", shortInstructions: true}
  ]
});
