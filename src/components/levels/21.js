import consonantVowel from "components/levels/consonant-vowel";

export default consonantVowel({
  number: 21,
  letterIntro: true,
  letter: "b",
  vowel: "a",
  exampleWords: ["bat", "bed", "big", "box", "bug"],
  lessonWords: ["back", "bath", "baboon"],
  activityData: [
    {words: ["bat", "bun", "cat"], correct: "bat"},
    {words: ["rag", "bag", "big"], correct: "bag", wordsOnly: true},
    {words: ["dad", "bed", "bad"], correct: "bad", wordsOnly: true},
    {words: ["badge", "bridge", "bend"], correct: "badge", wordsOnly: true},
    {words: ["biscuit", "bucket", "basket"], correct: "basket", wordsOnly: true},
    {words: ["butter", "batter", "boxer"], correct: "batter", wordsOnly: true},
    {words: ["black", "battle", "bottle"], correct: "battle", wordsOnly: true},
    {words: ["best", "bath", "Beth"], correct: "bath", wordsOnly: true},
    {words: ["bench", "bush", "bandage"], correct: "bandage", wordsOnly: true},
    {words: ["bikini", "buckle", "backpack"], correct: "backpack", wordsOnly: true},
    {words: ["baboon", "bubble", "bedroom"], correct: "baboon", wordsOnly: true}
  ]
});
