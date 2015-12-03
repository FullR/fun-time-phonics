import consonantVowel from "components/levels/consonant-vowel";

export default consonantVowel({
  number: 78,
  letter: "n",
  vowel: "i",
  lessonWords: ["nit", "nickel", "ninja"],
  activityData: [
    {words: ["Nick", "knock", "neck"], correct: "Nick"},
    {words: ["nickel", "nugget", "necklace"], correct: "nickel", wordsOnly: true},
    {words: ["nutshell", "nipple", "napkin"], correct: "nipple", wordsOnly: true},
    {words: ["nun", "nanny", "ninja"], correct: "ninja", wordsOnly: true},
    {words: ["needle", "nibble", "numbers"], correct: "nibble", wordsOnly: true}
  ]
});
