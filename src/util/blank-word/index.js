import repeatString from "../repeat-string";

export default function blankWord(sentence, word) {
  const r = new RegExp(`(\\W|^)(${word})(\\W|$)`, "gi");
  return sentence.replace(r, "$1" + repeatString("_", word.length) + "$3");
}
