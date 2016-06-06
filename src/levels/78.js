import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "78",
  consonant: "n",
  vowel: "i",
  lessonWords: ["nibble", "nickel", "ninja"],
  activities: [
    {words: ["Nick", "knock", "neck"], correctWord: "Nick"},
    {words: ["nickel", "nugget", "necklace"], correctWord: "nickel", shortInstructions: true},
    {words: ["nutshell", "nipple", "napkin"], correctWord: "nipple", shortInstructions: true},
    {words: ["nun", "nanny", "ninja"], correctWord: "ninja", shortInstructions: true},
    {words: ["needle", "nibble", "numbers"], correctWord: "nibble", shortInstructions: true}
  ]
});
