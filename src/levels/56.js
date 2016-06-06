import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "56",
  consonant: "j",
  vowel: "i",
  lessonWords: ["jib", "jigsaw", "Jimmy"],
  activities: [
    {words: ["jump", "jam", "Jim"], correctWord: "Jim"},
    {words: ["jug", "jig", "jet"], correctWord: "jig", shortInstructions: true},
    {words: ["Jill", "jail", "jewel"], correctWord: "Jill", shortInstructions: true},
    {words: ["jester", "jittery", "jetty"], correctWord: "jittery", shortInstructions: true},
    {words: ["jackal", "juggle", "jiggle"], correctWord: "jiggle", shortInstructions: true}
  ]
});
