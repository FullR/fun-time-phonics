import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "77",
  consonant: "n",
  vowel: "e",
  lessonWords: ["net", "next", "necklace"],
  activities: [
    {words: ["Nick", "knock", "neck"], correctWord: "neck"},
    {words: ["knit", "net", "knot"], correctWord: "net", wordsOnly: true},
    {words: ["nest", "nose", "notch"], correctWord: "nest", wordsOnly: true},
    {words: ["nickel", "nugget", "necklace"], correctWord: "necklace", wordsOnly: true},
    {words: ["nostril", "nectar", "knight"], correctWord: "nectar", wordsOnly: true},
    {words: ["nozzle", "nuzzle", "nestling"], correctWord: "nestling", wordsOnly: true},
    {words: ["nectarine", "nocturnal", "nutcracker"], correctWord: "nectarine", wordsOnly: true}
  ]
});
