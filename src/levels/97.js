import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "97",
  consonant: "s",
  vowel: "e",
  lessonWords: ["semi", "separate", "sesame"],
  activities: [
    {words: ["sit", "set", "suit"], correctWord: "set"},
    {words: ["send", "sand", "sled"], correctWord: "send", wordsOnly: true},
    {words: ["sieve", "seven", "safe"], correctWord: "seven", wordsOnly: true},
    {words: ["sickle", "second", "socket"], correctWord: "second", wordsOnly: true},
    {words: ["sucker", "soccer", "secretary"], correctWord: "secretary", wordsOnly: true},
    {words: ["sixteen", "submarine", "seventeen"], correctWord: "seventeen", wordsOnly: true},
    {words: ["semicircle", "salamander", "sunflower"], correctWord: "semicircle", wordsOnly: true}
  ]
});
