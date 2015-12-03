import consonantVowel from "components/levels/consonant-vowel";

export default consonantVowel({
  number: 84,
  letter: "p",
  vowel: "i",
  lessonWords: ["pig", "pit", "pilgrims"],
  activityData: [
    {words: ["pan", "pin", "spin"], correct: "pin"},
    {words: ["pal", "pole", "pill"], correct: "pill", wordsOnly: true},
    {words: ["pickle", "petal", "pocket"], correct: "pickle", wordsOnly: true},
    {words: ["punch", "peach", "pitch"], correct: "pitch", wordsOnly: true},
    {words: ["pillow", "palace", "pelican"], correct: "pillow", wordsOnly: true},
    {words: ["putt", "pit", "pet"], correct: "pit", wordsOnly: true},
    {words: ["pancake", "popcorn", "picnic"], correct: "picnic", wordsOnly: true},
    {words: ["pigeon", "poncho", "penguin"], correct: "pigeon", wordsOnly: true},
    {words: ["pompom", "pimple", "pumpkin"], correct: "pimple", wordsOnly: true}
  ]
});
