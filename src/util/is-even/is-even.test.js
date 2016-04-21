import {expect} from "chai";
import isEven from "./index";

describe("isEven", function() {
  it("should return true when passed an even number", () => {
    expect(isEven(6)).to.equal(true);
  });

  it("should return false when passed an even number", () => {
    expect(isEven(5)).to.equal(false);
  });
});
