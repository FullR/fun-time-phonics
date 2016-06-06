import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "52",
  consonant: "h",
  vowel: "u",
  lessonWords: ["hump", "hush", "husband"],
  activities: [
    {words: ["hat", "hot", "hut"], correctWord: "hut"},
    {words: ["hen", "hand", "hunt"], correctWord: "hunt", shortInstructions: true},
    {words: ["hug", "hog", "hook"], correctWord: "hug", shortInstructions: true},
    {words: ["huddle", "hidden", "hotdog"], correctWord: "huddle", shortInstructions: true},
    {words: ["ham", "hump", "hoop"], correctWord: "hump", shortInstructions: true},
    {words: ["handle", "hundred", "headband"], correctWord: "hundred", shortInstructions: true},
    {words: ["handcuffs", "hopscotch", "hubcap"], correctWord: "hubcap", shortInstructions: true}
  ]
});
