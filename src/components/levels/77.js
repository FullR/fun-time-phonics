import consonantVowel from "components/levels/consonant-vowel";

export default consonantVowel({
  number: 77,
  letter: "n",
  vowel: "e",
  lessonWords: ["net", "next", "necklace"],
  activityData: [
    {words: ["Nick", "knock", "neck"], correct: "neck"},
    {words: ["knit", "net", "knot"], correct: "net", wordsOnly: true},
    {words: ["nest", "nose", "notch"], correct: "nest", wordsOnly: true},
    {words: ["nickel", "nugget", "necklace"], correct: "necklace", wordsOnly: true},
    {words: ["nostril", "nectar", "knight"], correct: "nectar", wordsOnly: true},
    {words: ["nozzle", "nuzzle", "nestling"], correct: "nestling", wordsOnly: true},
    {words: ["nectarine", "nocturnal", "nutcracker"], correct: "nectarine", wordsOnly: true}
  ]
});
