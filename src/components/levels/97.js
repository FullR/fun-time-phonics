import consonantVowel from "components/levels/consonant-vowel";

export default consonantVowel({
  number: 97,
  letter: "s",
  vowel: "e",
  lessonWords: ["semi", "separate", "sesame"],
  activityData: [
    {words: ["sit", "set", "suit"], correct: "set"},
    {words: ["send", "sand", "sled"], correct: "send", wordsOnly: true},
    {words: ["sieve", "seven", "safe"], correct: "seven", wordsOnly: true},
    {words: ["sickle", "second", "socket"], correct: "second", wordsOnly: true},
    {words: ["sucker", "soccer", "secretary"], correct: "secretary", wordsOnly: true},
    {words: ["sixteen", "submarine", "seventeen"], correct: "seventeen", wordsOnly: true},
    {words: ["semicircle", "salamander", "sunflower"], correct: "semicircle", wordsOnly: true}
  ]
});
