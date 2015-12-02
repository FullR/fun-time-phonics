import consonantVowel from "components/levels/consonant-vowel";

export default consonantVowel({
  number: 56,
  letter: "j",
  vowel: "i",
  lessonWords: ["jib", "jigsaw", "Jimmy"],
  activityData: [
    {words: ["jump", "jam", "Jim"], correct: "Jim"},
    {words: ["jug", "jig", "jet"], correct: "jig", wordsOnly: true},
    {words: ["Jill", "jail", "jewel"], correct: "Jill", wordsOnly: true},
    {words: ["jester", "jittery", "jetty"], correct: "jittery", wordsOnly: true},
    {words: ["jackal", "juggle", "jiggle"], correct: "jiggle", wordsOnly: true}
  ]
});
