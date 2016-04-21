import {expect} from "chai";
import wordSounds from "./index";

describe("wordSounds", function() {
  it("should create a sound path map for the given actor and words", () => {
    const result = wordSounds("boy", ["a", "b", "c"]);
    expect(result).to.deep.equal({
      "a": "boy/words/a",
      "b": "boy/words/b",
      "c": "boy/words/c"
    });
  });
});
