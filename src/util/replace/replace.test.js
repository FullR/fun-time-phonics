import {expect} from "chai";
import replace from "./index";

describe("replace", function() {
  it("should replace an element in an array with a new value without modifying the original array", () => {
    const input = [1, 2, 3, 2, 1, 2, 3, 2, 1];
    const output = replace(input, 3, 9);
    const expected = [1, 2, 9, 2, 1, 2, 9, 2, 1];

    expect(output).to.deep.equal(expected);
  });
});
