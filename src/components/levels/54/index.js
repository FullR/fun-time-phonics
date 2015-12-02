import consonantVowel from "components/levels/consonant-vowel";

export default consonantVowel({
  number: 54,
  letterIntro: true,
  letter: "j",
  vowel: "a",
  exampleWords: ["jacket", "jet", "jim", "joeckey", "juggle"],
  lessonWords: ["jack", "jazz", "jagged"],
  activityData: [
    {words: ["jacks", "Josh", "judge"], correct: "jacks"},
    {words: ["jogger", "jaguar", "junkyard"], correct: "jaguar", wordsOnly: true},
    {words: ["Jesse", "jockey", "jacket"], correct: "jacket", wordsOnly: true},
    {words: ["jackal", "juggle", "jiggle"], correct: "jackal", wordsOnly: true},
    {words: ["jump", "gym", "jam"], correct: "jam", wordsOnly: true},
    {words: ["jester", "janitor", "Jennifer"], correct: "janitor", wordsOnly: true},
    {words: ["Jonathan", "javelin", "jellyfish"], correct: "javelin", wordsOnly: true}
  ]
});
