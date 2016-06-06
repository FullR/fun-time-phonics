import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "97",
  consonant: "s",
  vowel: "e",
  lessonWords: ["semi", "separate", "sesame"],
  activities: [
    {words: ["sit", "set", "suit"], correctWord: "set"},
    {words: ["send", "sand", "sled"], correctWord: "send", shortInstructions: true},
    {words: ["sieve", "seven", "safe"], correctWord: "seven", shortInstructions: true},
    {words: ["sickle", "second", "socket"], correctWord: "second", shortInstructions: true},
    {words: ["sucker", "soccer", "secretary"], correctWord: "secretary", shortInstructions: true},
    {words: ["sixteen", "submarine", "seventeen"], correctWord: "seventeen", shortInstructions: true},
    {words: ["semicircle", "salamander", "sunflower"], correctWord: "semicircle", shortInstructions: true}
  ]
});
