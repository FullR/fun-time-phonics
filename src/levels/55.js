import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "55",
  consonant: "j",
  vowel: "e",
  lessonWords: ["jelly", "jetty", "Jessica"],
  activities: [
    {words: ["jug", "jog", "jet"], correctWord: "jet"},
    {words: ["Jill", "jail", "jelly"], correctWord: "jelly", wordsOnly: true},
    {words: ["jester", "jumper", "Jimmy"], correctWord: "jester", wordsOnly: true},
    {words: ["Josh", "Jesse", "juice"], correctWord: "Jesse", wordsOnly: true},
    {words: ["jockey", "jetty", "jittery"], correctWord: "jetty", wordsOnly: true},
    {words: ["Jennifer", "janitor", "jungle"], correctWord: "Jennifer", wordsOnly: true},
    {words: ["Jonathan", "javelin", "jellyfish"], correctWord: "jellyfish", wordsOnly: true}
  ]
});
