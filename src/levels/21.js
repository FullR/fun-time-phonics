import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "21",
  consonant: "b",
  vowel: "a",
  letterIntroWords: ["bat", "bed", "big", "box", "bug"],
  lessonWords: ["back", "bath", "baboon"],
  activities: [
    {words: ["bat", "bun", "cat"], correctWord: "bat"},
    {words: ["rag", "bag", "big"], correctWord: "bag", wordsOnly: true},
    {words: ["dad", "bed", "bad"], correctWord: "bad", wordsOnly: true},
    {words: ["badge", "bridge", "bend"], correctWord: "badge", wordsOnly: true},
    {words: ["biscuit", "bucket", "basket"], correctWord: "basket", wordsOnly: true},
    {words: ["butter", "batter", "boxer"], correctWord: "batter", wordsOnly: true},
    {words: ["black", "battle", "bottle"], correctWord: "battle", wordsOnly: true},
    {words: ["best", "bath", "Beth"], correctWord: "bath", wordsOnly: true},
    {words: ["bench", "bush", "bandage"], correctWord: "bandage", wordsOnly: true},
    {words: ["bikini", "buckle", "backpack"], correctWord: "backpack", wordsOnly: true},
    {words: ["baboon", "bubble", "bedroom"], correctWord: "baboon", wordsOnly: true}
  ]
});
