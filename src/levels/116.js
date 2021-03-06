import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "116",
  consonant: "w",
  vowel: "i",
  lessonWords: ["winter", "willow", "wizard"],
  activities: [
    {words: ["wig", "wag", "rig"], correctWord: "wig"},
    {words: ["web", "van", "win"], correctWord: "win", shortInstructions: true},
    {words: ["watch", "witch", "rich"], correctWord: "witch", shortInstructions: true},
    {words: ["walk", "wick", "rock"], correctWord: "wick", shortInstructions: true},
    {words: ["wind", "wand", "wood"], correctWord: "wind", shortInstructions: true},
    {words: ["wedding", "wagon", "window"], correctWord: "window", shortInstructions: true},
    {words: ["weapon", "woman", "wishbone"], correctWord: "wishbone", shortInstructions: true}
  ]
});
