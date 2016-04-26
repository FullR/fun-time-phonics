import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  
  letterIntroWords: ["nap", "net", "nickel", "nozzle", "numbers"],
  id: "76",
  consonant: "n",
  vowel: "a",
  lessonWords: ["nab", "nasty", "napkin"],
  activities: [
    {words: ["nap", "net", "knob"], correctWord: "nap"},
    {words: ["nun", "nanny", "ninja"], correctWord: "nanny", wordsOnly: true},
    {words: ["nipple", "napkin", "noggin"], correctWord: "napkin", wordsOnly: true}
  ]
});
