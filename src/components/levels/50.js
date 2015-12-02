import consonantVowel from "components/levels/consonant-vowel";

export default consonantVowel({
  number: 50,
  letter: "h",
  vowel: "i",
  lessonWords: ["hiss", "hilly", "hidden"],
  activityData: [
    {words: ["hit", "hat", "hut"], correct: "hit"},
    {words: ["hop", "hip", "hoop"], correct: "hip", wordsOnly: true},
    {words: ["hole", "hall", "hill"], correct: "hill", wordsOnly: true},
    {words: ["hatch", "hitch", "hot"], correct: "hitch", wordsOnly: true},
    {words: ["hospital", "hippo", "happy"], correct: "hippo", wordsOnly: true},
    {words: ["hinge", "hedge", "hand"], correct: "hinge", wordsOnly: true},
    {words: ["handle", "huddle", "hidden"], correct: "hidden", wordsOnly: true}
  ]
});
