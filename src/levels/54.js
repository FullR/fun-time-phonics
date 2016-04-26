import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "54",
  consonant: "j",
  vowel: "a",
  letterIntroWords: ["jacket", "jet", "Jim", "jockey", "juggle"],
  lessonWords: ["Jack", "jazz", "jagged"],
  activities: [
    {words: ["jacks", "Josh", "judge"], correctWord: "jacks"},
    {words: ["jogger", "jaguar", "junkyard"], correctWord: "jaguar", wordsOnly: true},
    {words: ["Jesse", "jockey", "jacket"], correctWord: "jacket", wordsOnly: true},
    {words: ["jackal", "juggle", "jiggle"], correctWord: "jackal", wordsOnly: true},
    {words: ["jump", "gym", "jam"], correctWord: "jam", wordsOnly: true},
    {words: ["jester", "janitor", "Jennifer"], correctWord: "janitor", wordsOnly: true},
    {words: ["Jonathan", "javelin", "jellyfish"], correctWord: "javelin", wordsOnly: true}
  ]
});
