import consonantVowel from "components/levels/consonant-vowel";

export default consonantVowel({
  number: 52,
  letter: "h",
  vowel: "u",
  lessonWords: ["hump", "hush", "husband"],
  activityData: [
    {words: ["hat", "hot", "hut"], correct: "hut"},
    {words: ["hen", "hand", "hunt"], correct: "hunt", wordsOnly: true},
    {words: ["hug", "hog", "hook"], correct: "hug", wordsOnly: true},
    {words: ["huddle", "hidden", "hotdog"], correct: "huddle", wordsOnly: true},
    {words: ["ham", "hump", "hoop"], correct: "hump", wordsOnly: true},
    {words: ["handle", "hundred", "headband"], correct: "hundred", wordsOnly: true},
    {words: ["handcuffs", "hopscotch", "hubcap"], correct: "hubcap", wordsOnly: true}
  ]
});
