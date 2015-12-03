import consonantVowel from "components/levels/consonant-vowel";

export default consonantVowel({
  number: 111,
  letter: "v",
  vowel: "i",
  lessonWords: ["village", "victory", "Vivian"],
  activityData: [
    {words: ["velcro", "vanity", "video"], correct: "video"},
    {words: ["victim", "vacuum", "venom"], correct: "victim", wordsOnly: true},
    {words: ["vigil", "vulture", "vegetables"], correct: "vigil", wordsOnly: true},
    {words: ["volume", "villain", "valley"], correct: "villain", wordsOnly: true},
    {words: ["vampire", "visitor", "vest"], correct: "visitor", wordsOnly: true}
  ]
});
