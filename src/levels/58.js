import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "58",
  consonant: "j",
  vowel: "u",
  lessonWords: ["junk", "jumper", "jungle"],
  activities: [
    {words: ["jug", "jig", "jog"], correctWord: "jug"},
    {words: ["jump", "gym", "jam"], correctWord: "jump", wordsOnly: true},
    {words: ["jacks", "Josh", "judge"], correctWord: "judge", wordsOnly: true},
    {words: ["jackal", "juggle", "jiggle"], correctWord: "juggle", wordsOnly: true},
    {words: ["Jennifer", "janitor", "jumper"], correctWord: "jumper", wordsOnly: true},
    {words: ["jagged", "jungle", "jewel"], correctWord: "jungle", wordsOnly: true},
    {words: ["jogger", "jaguar", "junkyard"], correctWord: "junkyard", wordsOnly: true}
  ]
});
