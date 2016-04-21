import {expect} from "chai";
import toPairs from "./index";

describe("toPairs", function() {
  it("should use the passed function to generate key/value pairs for its result object", () => {
    const result = toPairs(["a", "b", "c"], (value, index) => [
      `key-${index}`, `value-${value}`
    ]);

    expect(result).to.deep.equal({
      "key-0": "value-a",
      "key-1": "value-b",
      "key-2": "value-c"
    });
  });
});
