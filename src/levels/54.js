import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "54",
  consonant: "j",
  vowel: "a",
  letterIntroWords: ["jacket", "jet", "Jim", "jockey", "juggle"],
  lessonWords: ["Jack", "jazz", "jagged"],
  activities: [
    {words: ["jacks", "Josh", "judge"], correctWord: "jacks"},
    {words: ["jogger", "jaguar", "junkyard"], correctWord: "jaguar", shortInstructions: true},
    {words: ["Jesse", "jockey", "jacket"], correctWord: "jacket", shortInstructions: true},
    {words: ["jackal", "juggle", "jiggle"], correctWord: "jackal", shortInstructions: true},
    {words: ["jump", "gym", "jam"], correctWord: "jam", shortInstructions: true},
    {words: ["jester", "janitor", "Jennifer"], correctWord: "janitor", shortInstructions: true},
    {words: ["Jonathan", "javelin", "jellyfish"], correctWord: "javelin", shortInstructions: true}
  ]
});
