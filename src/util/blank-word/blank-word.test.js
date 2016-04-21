import {expect} from "chai";
import blankWord from "./index";

describe("blankWord", () => {
  it("should replace all occurances of a word in a string with underscores", () => {
    const replaceWord = "foo";
    const sentence = "this is a foo test fOo bar fizz FOO buzz foo";
    const expected = "this is a ___ test ___ bar fizz ___ buzz ___";

    expect(blankWord(sentence, replaceWord)).to.equal(expected);
  });
});
