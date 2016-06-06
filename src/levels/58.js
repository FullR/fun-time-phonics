import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "58",
  consonant: "j",
  vowel: "u",
  lessonWords: ["junk", "jumper", "jungle"],
  activities: [
    {words: ["jug", "jig", "jog"], correctWord: "jug"},
    {words: ["jump", "gym", "jam"], correctWord: "jump", shortInstructions: true},
    {words: ["jacks", "Josh", "judge"], correctWord: "judge", shortInstructions: true},
    {words: ["jackal", "juggle", "jiggle"], correctWord: "juggle", shortInstructions: true},
    {words: ["Jennifer", "janitor", "jumper"], correctWord: "jumper", shortInstructions: true},
    {words: ["jagged", "jungle", "jewel"], correctWord: "jungle", shortInstructions: true},
    {words: ["jogger", "jaguar", "junkyard"], correctWord: "junkyard", shortInstructions: true}
  ]
});
