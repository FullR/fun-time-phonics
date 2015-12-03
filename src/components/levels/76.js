import consonantVowel from "components/levels/consonant-vowel";

export default consonantVowel({
  letterIntro: true,
  exampleWords: ["nap", "net", "nickel", "nozzle", "numbers"],
  number: 76,
  letter: "n",
  vowel: "a",
  lessonWords: ["nab", "nasty", "napkin"],
  activityData: [
    {words: ["nap", "net", "knob"], correct: "nap"},
    {words: ["nun", "nanny", "ninja"], correct: "nanny", wordsOnly: true},
    {words: ["nipple", "napkin", "noggin"], correct: "napkin", wordsOnly: true}
  ]
});
