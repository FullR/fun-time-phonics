import consonantVowel from "components/levels/consonant-vowel";

export default consonantVowel({
  number: 105,
  letter: "t",
  vowel: "o",
  lessonWords: ["top", "tot", "tonic"],
  activityData: [
    {words: ["tub", "top", "tap"], correct: "top"},
    {words: ["Tim", "team", "Tom"], correct: "Top", wordsOnly: true},
    {words: ["toxic", "taxi", "tuxedo"], correct: "toxic", wordsOnly: true},
    {words: ["tickle", "tackle", "toddler"], correct: "toddler", wordsOnly: true},
    {words: ["tennis", "tonsil", "tunnel"], correct: "tonsil", wordsOnly: true},
    {words: ["topping", "temple", "tummy"], correct: "topping", wordsOnly: true},
    {words: ["telescope", "tomahawk", "tentacle"], correct: "tomahawk", wordsOnly: true}
  ]
});
