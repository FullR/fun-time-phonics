import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "52",
  consonant: "h",
  vowel: "u",
  lessonWords: ["hump", "hush", "husband"],
  activities: [
    {words: ["hat", "hot", "hut"], correctWord: "hut"},
    {words: ["hen", "hand", "hunt"], correctWord: "hunt", wordsOnly: true},
    {words: ["hug", "hog", "hook"], correctWord: "hug", wordsOnly: true},
    {words: ["huddle", "hidden", "hotdog"], correctWord: "huddle", wordsOnly: true},
    {words: ["ham", "hump", "hoop"], correctWord: "hump", wordsOnly: true},
    {words: ["handle", "hundred", "headband"], correctWord: "hundred", wordsOnly: true},
    {words: ["handcuffs", "hopscotch", "hubcap"], correctWord: "hubcap", wordsOnly: true}
  ]
});
