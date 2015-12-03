import consonantVowel from "components/levels/consonant-vowel";

export default consonantVowel({
  number: 79,
  letter: "n",
  vowel: "o",
  lessonWords: ["nod", "notch", "nozzle"],
  activityData: [
    {words: ["knife", "notch", "nest"], correct: "notch"},
    {words: ["nozzle", "nuzzle", "needle"], correct: "nozzle", wordsOnly: true},
    {words: ["nostril", "nestling", "nectar"], correct: "nostril", wordsOnly: true},
    {words: ["napkin", "nugget", "noggin"], correct: "noggin", wordsOnly: true},
    {words: ["nectarine", "nocturnal", "necklace"], correct: "nocturnal", wordsOnly: true}
  ]
});
