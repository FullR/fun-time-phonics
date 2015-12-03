import consonantVowel from "components/levels/consonant-vowel";

export default consonantVowel({
  number: 116,
  letter: "w",
  vowel: "i",
  lessonWords: ["winter", "willow", "wizard"],
  activityData: [
    {words: ["wig", "wag", "rig"], correct: "wig"},
    {words: ["web", "van", "win"], correct: "win", wordsOnly: true},
    {words: ["watch", "witch", "rich"], correct: "witch", wordsOnly: true},
    {words: ["walk", "wick", "wok"], correct: "wick", wordsOnly: true},
    {words: ["wind", "want", "wood"], correct: "wind", wordsOnly: true},
    {words: ["wedding", "wagon", "window"], correct: "window", wordsOnly: true},
    {words: ["weapon", "woman", "wishbone"], correct: "wishbone", wordsOnly: true}
  ]
});
