import {expect} from "chai";
import stringMirror from "./index";

describe("stringMirror", function() {
  it("should create an object with each of its inputs as keys/value pairs (result[key] === key)", () => {
    expect(stringMirror("a", "b", "c")).to.deep.equal({
      a: "a",
      b: "b",
      c: "c"
    });
  });

  it("should throw an error if a duplicate key is used", () => {
    expect(stringMirror.bind(null, "a", "b", "c", "a", "b")).to.throw(Error);
  });
});
