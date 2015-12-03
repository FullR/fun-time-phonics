import consonantVowel from "components/levels/consonant-vowel";

export default consonantVowel({
  letterIntro: true,
  exampleWords: ["tattoo", "tent", "ticket", "top", "tugboat"],
  number: 102,
  letter: "t",
  vowel: "a",
  lessonWords: ["talon", "tablet", "tattoo"],
  activityData: [
    {words: ["tip", "top", "tap"], correct: "tap"},
    {words: ["tug", "tag", "tiger"], correct: "tag", wordsOnly: true},
    {words: ["tack", "tusk", "stack"], correct: "tack", wordsOnly: true},
    {words: ["toxic", "taxi", "tuxedo"], correct: "taxi", wordsOnly: true},
    {words: ["tickle", "tackle", "toddler"], correct: "tackle", wordsOnly: true},
    {words: ["tadpole", "tiptoe", "toadstool"], correct: "tadpole", wordsOnly: true},
    {words: ["tightrope", "telescope", "tapestry"], correct: "tapestry", wordsOnly: true}
  ]
});
