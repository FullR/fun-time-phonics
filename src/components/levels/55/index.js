import consonantVowel from "components/levels/consonant-vowel";

export default consonantVowel({
  number: 55,
  letter: "j",
  vowel: "e",
  lessonWords: ["jelly", "jetty", "Jessica"],
  activityData: [
    {words: ["jug", "jog", "jet"], correct: "jet"},
    {words: ["Jill", "jail", "jelly"], correct: "jelly", wordsOnly: true},
    {words: ["jester", "jumper", "Jimmy"], correct: "jester", wordsOnly: true},
    {words: ["Josh", "Jesse", "juice"], correct: "Jesse", wordsOnly: true},
    {words: ["jockey", "jetty", "jittery"], correct: "jetty", wordsOnly: true},
    {words: ["Jennifer", "janitor", "jungle"], correct: "Jennifer", wordsOnly: true},
    {words: ["Jonathan", "javelin", "jellyfish"], correct: "jellyfish", wordsOnly: true}
  ]
});
