import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "78",
  consonant: "n",
  vowel: "i",
  lessonWords: ["nit", "nickel", "ninja"],
  activities: [
    {words: ["Nick", "knock", "neck"], correctWord: "Nick"},
    {words: ["nickel", "nugget", "necklace"], correctWord: "nickel", wordsOnly: true},
    {words: ["nutshell", "nipple", "napkin"], correctWord: "nipple", wordsOnly: true},
    {words: ["nun", "nanny", "ninja"], correctWord: "ninja", wordsOnly: true},
    {words: ["needle", "nibble", "numbers"], correctWord: "nibble", wordsOnly: true}
  ]
});
