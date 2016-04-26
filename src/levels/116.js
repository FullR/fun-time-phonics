import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "116",
  consonant: "w",
  vowel: "i",
  lessonWords: ["winter", "willow", "wizard"],
  activities: [
    {words: ["wig", "wag", "rig"], correctWord: "wig"},
    {words: ["web", "van", "win"], correctWord: "win", wordsOnly: true},
    {words: ["watch", "witch", "rich"], correctWord: "witch", wordsOnly: true},
    {words: ["walk", "wick", "wok"], correctWord: "wick", wordsOnly: true},
    {words: ["wind", "want", "wood"], correctWord: "wind", wordsOnly: true},
    {words: ["wedding", "wagon", "window"], correctWord: "window", wordsOnly: true},
    {words: ["weapon", "woman", "wishbone"], correctWord: "wishbone", wordsOnly: true}
  ]
});
