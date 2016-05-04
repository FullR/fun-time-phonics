import multiConsonantReviewLevel from "levels/multi-consonant-review-level";
import Lesson from "./lesson";

export default multiConsonantReviewLevel({
  Lesson,
  id: "121",
  title: "Review: Consonants \"y\" and \"z\" With Short Vowels",
  letter: "z",
  activities: [
    {word: "yuck", letters: ["yi", "ye", "yu"], correctLetters: "yu"},
    {word: "yellow", letters: ["yi", "ye", "yo"], correctLetters: "ye", wordsOnly: true},
    {word: "yak", letters: ["ya", "ye", "yo"], correctLetters: "ya", wordsOnly: true},
    {word: "zombie", letters: ["za", "ze", "zo"], correctLetters: "zo", wordsOnly: true},
    {word: "zit", letters: ["zi", "ze", "zo"], correctLetters: "zi", wordsOnly: true},
    {word: "zest", letters: ["zi", "ze", "za"], correctLetters: "ze", wordsOnly: true}
  ]
});
