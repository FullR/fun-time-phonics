import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  
  letterIntroWords: ["map", "medal", "mitt", "model", "mummy"],
  id: "70",
  consonant: "m",
  vowel: "a",
  lessonWords: ["map", "match", "Max"],
  activities: [
    {words: ["mud", "mad", "mob"], correctWord: "mad"},
    {words: ["mat", "mitt", "meat"], correctWord: "mat", shortInstructions: true},
    {words: ["mug", "milk", "mask"], correctWord: "mask", shortInstructions: true},
    {words: ["magnet", "mongoose", "monkey"], correctWord: "magnet", shortInstructions: true},
    {words: ["mushroom", "meadow", "magic"], correctWord: "magic", shortInstructions: true},
    {words: ["mustache", "mascot", "miniskirt"], correctWord: "mascot", shortInstructions: true},
    {words: ["megaphone", "magazine", "medicine"], correctWord: "magazine", shortInstructions: true}
  ]
});
