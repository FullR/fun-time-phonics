import {expect} from "chai";
import toggleArrayValue from "./index";

describe("toggleArrayValue", function() {
  it("should concat the value if it's not in the passed array", () => {
    const arr = ["a", "b"];

    expect(toggleArrayValue(arr, "c")).to.deep.equal(["a", "b", "c"]);
  });

  it("should filter the value if it's in the passed array", () => {
    const arr = ["a", "b", "c"];

    expect(toggleArrayValue(arr, "b")).to.deep.equal(["a", "c"]);
  });
});
