import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "84",
  consonant: "p",
  vowel: "i",
  lessonWords: ["pig", "pit", "pilgrims"],
  activities: [
    {words: ["pan", "pin", "spin"], correctWord: "pin"},
    {words: ["pal", "pole", "pill"], correctWord: "pill", shortInstructions: true},
    {words: ["pickle", "petal", "pocket"], correctWord: "pickle", shortInstructions: true},
    {words: ["punch", "peach", "pitch"], correctWord: "pitch", shortInstructions: true},
    {words: ["pillow", "palace", "pelican"], correctWord: "pillow", shortInstructions: true},
    {words: ["putt", "pit", "pet"], correctWord: "pit", shortInstructions: true},
    {words: ["pancake", "popcorn", "picnic"], correctWord: "picnic", shortInstructions: true},
    {words: ["pigeon", "poncho", "penguin"], correctWord: "pigeon", shortInstructions: true},
    {words: ["pompom", "pimple", "pumpkin"], correctWord: "pimple", shortInstructions: true}
  ]
});
