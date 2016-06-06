import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "55",
  consonant: "j",
  vowel: "e",
  lessonWords: ["jelly", "jetty", "Jessica"],
  activities: [
    {words: ["jug", "jog", "jet"], correctWord: "jet"},
    {words: ["Jill", "jail", "jelly"], correctWord: "jelly", shortInstructions: true},
    {words: ["jester", "jumper", "Jimmy"], correctWord: "jester", shortInstructions: true},
    {words: ["Josh", "Jesse", "juice"], correctWord: "Jesse", shortInstructions: true},
    {words: ["jockey", "jetty", "jittery"], correctWord: "jetty", shortInstructions: true},
    {words: ["Jennifer", "janitor", "jungle"], correctWord: "Jennifer", shortInstructions: true},
    {words: ["Jonathan", "javelin", "jellyfish"], correctWord: "jellyfish", shortInstructions: true}
  ]
});
