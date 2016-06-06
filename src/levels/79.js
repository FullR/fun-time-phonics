import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "79",
  consonant: "n",
  vowel: "o",
  lessonWords: ["nod", "notch", "nozzle"],
  activities: [
    {words: ["knife", "notch", "nest"], correctWord: "notch"},
    {words: ["nozzle", "nuzzle", "needle"], correctWord: "nozzle", shortInstructions: true},
    {words: ["nostril", "nestling", "nectar"], correctWord: "nostril", shortInstructions: true},
    {words: ["napkin", "nugget", "noggin"], correctWord: "noggin", shortInstructions: true},
    {words: ["nectarine", "nocturnal", "necklace"], correctWord: "nocturnal", shortInstructions: true}
  ]
});
