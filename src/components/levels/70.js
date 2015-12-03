import consonantVowel from "components/levels/consonant-vowel";

export default consonantVowel({
  letterIntro: true,
  exampleWords: ["map", "medal", "mitt", "model", "mummy"],
  number: 70,
  letter: "m",
  vowel: "a",
  lessonWords: ["map", "match", "Max"],
  activityData: [
    {words: ["mud", "mad", "mob"], correct: "mad"},
    {words: ["mat", "mitt", "meat"], correct: "mat", wordsOnly: true},
    {words: ["mug", "milk", "mask"], correct: "mask", wordsOnly: true},
    {words: ["magnet", "mongoose", "monkey"], correct: "magnet", wordsOnly: true},
    {words: ["mushroom", "meadow", "magic"], correct: "magic", wordsOnly: true},
    {words: ["mustache", "mascot", "miniskirt"], correct: "mascot", wordsOnly: true},
    {words: ["megaphone", "magazine", "medicine"], correct: "magazine", wordsOnly: true}
  ]
});
