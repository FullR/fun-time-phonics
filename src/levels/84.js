import consonantVowelLevel from "levels/consonant-vowel-level";

export default consonantVowelLevel({
  id: "84",
  consonant: "p",
  vowel: "i",
  lessonWords: ["pig", "pit", "pilgrims"],
  activities: [
    {words: ["pan", "pin", "spin"], correctWord: "pin"},
    {words: ["pal", "pole", "pill"], correctWord: "pill", wordsOnly: true},
    {words: ["pickle", "petal", "pocket"], correctWord: "pickle", wordsOnly: true},
    {words: ["punch", "peach", "pitch"], correctWord: "pitch", wordsOnly: true},
    {words: ["pillow", "palace", "pelican"], correctWord: "pillow", wordsOnly: true},
    {words: ["putt", "pit", "pet"], correctWord: "pit", wordsOnly: true},
    {words: ["pancake", "popcorn", "picnic"], correctWord: "picnic", wordsOnly: true},
    {words: ["pigeon", "poncho", "penguin"], correctWord: "pigeon", wordsOnly: true},
    {words: ["pompom", "pimple", "pumpkin"], correctWord: "pimple", wordsOnly: true}
  ]
});
