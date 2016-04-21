import {expect} from "chai";
import repeatString from "./index";

describe("repeatString", () => {
  it("should repeat the given string n times", () => {
    const input = "foobar";
    const n = 5;
    const expected = "foobarfoobarfoobarfoobarfoobar";
    expect(repeatString(input, n)).to.equal(expected);
  });
});
