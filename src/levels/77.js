import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "77",
  consonant: "n",
  vowel: "e",
  lessonWords: ["net", "next", "necklace"],
  activities: [
    {words: ["Nick", "knock", "neck"], correctWord: "neck"},
    {words: ["knit", "net", "knot"], correctWord: "net", shortInstructions: true},
    {words: ["nest", "nose", "notch"], correctWord: "nest", shortInstructions: true},
    {words: ["nickel", "nugget", "necklace"], correctWord: "necklace", shortInstructions: true},
    {words: ["nostril", "nectar", "knight"], correctWord: "nectar", shortInstructions: true},
    {words: ["nozzle", "nuzzle", "nestling"], correctWord: "nestling", shortInstructions: true},
    {words: ["nectarine", "nocturnal", "nutcracker"], correctWord: "nectarine", shortInstructions: true}
  ]
});
