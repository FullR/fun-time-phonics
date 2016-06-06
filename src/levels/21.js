import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "21",
  consonant: "b",
  vowel: "a",
  letterIntroWords: ["bat", "bed", "big", "box", "bug"],
  lessonWords: ["back", "bath", "baboon"],
  activities: [
    {words: ["bat", "bun", "cat"], correctWord: "bat"},
    {words: ["rag", "bag", "big"], correctWord: "bag", shortInstructions: true},
    {words: ["dad", "bed", "bad"], correctWord: "bad", shortInstructions: true},
    {words: ["badge", "bridge", "bend"], correctWord: "badge", shortInstructions: true},
    {words: ["biscuit", "bucket", "basket"], correctWord: "basket", shortInstructions: true},
    {words: ["butter", "batter", "boxer"], correctWord: "batter", shortInstructions: true},
    {words: ["black", "battle", "bottle"], correctWord: "battle", shortInstructions: true},
    {words: ["best", "bath", "Beth"], correctWord: "bath", shortInstructions: true},
    {words: ["bench", "bush", "bandage"], correctWord: "bandage", shortInstructions: true},
    {words: ["bikini", "buckle", "backpack"], correctWord: "backpack", shortInstructions: true},
    {words: ["baboon", "bubble", "bedroom"], correctWord: "baboon", shortInstructions: true}
  ]
});
