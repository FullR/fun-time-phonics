import toPairs from "../to-pairs";

export default function wordSounds(actorName, words) {
  return toPairs(words, (word) => [word, `${actorName}/words/${word}`]);
}
