import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  
  letterIntroWords: ["map", "medal", "mitt", "model", "mummy"],
  id: "70",
  consonant: "m",
  vowel: "a",
  lessonWords: ["map", "match", "Max"],
  activities: [
    {words: ["mud", "mad", "mob"], correctWord: "mad"},
    {words: ["mat", "mitt", "meat"], correctWord: "mat", wordsOnly: true},
    {words: ["mug", "milk", "mask"], correctWord: "mask", wordsOnly: true},
    {words: ["magnet", "mongoose", "monkey"], correctWord: "magnet", wordsOnly: true},
    {words: ["mushroom", "meadow", "magic"], correctWord: "magic", wordsOnly: true},
    {words: ["mustache", "mascot", "miniskirt"], correctWord: "mascot", wordsOnly: true},
    {words: ["megaphone", "magazine", "medicine"], correctWord: "magazine", wordsOnly: true}
  ]
});
