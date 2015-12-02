import consonantVowel from "components/levels/consonant-vowel";

export default consonantVowel({
  number: 33,
  letter: "d",
  vowel: "i",
  lessonWords: ["dig", "ditch", "disco"],
  activityData: [
    {words: ["dash", "dodge", "dish"], correct: "dish"},
    {words: ["dip", "drip", "deep"], correct: "dip", wordsOnly: true},
    {words: ["dancer", "dizzy", "daisy"], correct: "dizzy", wordsOnly: true},
    {words: ["disc", "desk", "dusk"], correct: "disc", wordsOnly: true},
    {words: ["dollar", "dinner", "dentist"], correct: "dinner", wordsOnly: true},
    {words: ["deli", "doll", "dimple"], correct: "dimple", wordsOnly: true},
    {words: ["desert", "disguise", "dungeon"], correct: "disguise", wordsOnly: true}
  ]
});
