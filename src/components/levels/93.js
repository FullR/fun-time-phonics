import consonantVowel from "components/levels/consonant-vowel";

export default consonantVowel({
  number: 93,
  letter: "r",
  vowel: "o",
  lessonWords: ["rod", "Rocco", "rotten"],
  activityData: [
    {words: ["rack", "wreck", "rock"], correct: "rock"},
    {words: ["rod", "red", "read"], correct: "rod", wordsOnly: true},
    {words: ["rib", "ref", "rob"], correct: "rob", wordsOnly: true},
    {words: ["ribbon", "robin", "rabbit"], correct: "robin", wordsOnly: true},
    {words: ["rocket", "racket", "rung"], correct: "rocket", wordsOnly: true},
    {words: ["robber", "river", "rudder"], correct: "robber", wordsOnly: true},
    {words: ["rescue", "rocking", "raccoon"], correct: "rocking", wordsOnly: true}
  ]
});
