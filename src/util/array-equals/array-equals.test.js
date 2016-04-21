import {expect} from "chai";
import arrayEquals from "./index";

describe("arrayEquals", function() {
  it("should return true if both arrays have the same values", () => {
    const a = ["a", "b", "c"];
    const b = ["b", "c", "a"];

    expect(arrayEquals(a, b)).to.be.equal(true);
  });

  it("should return true if both arrays are empty", () => {
    const a = [];
    const b = [];

    expect(arrayEquals(a, b)).to.be.equal(true);
  });

  it("should return false if the arrays have different values", () => {
    const a = ["a", "d", "f"];
    const b = ["a", "b", "c"];

    expect(arrayEquals(a, b)).to.be.equal(false);
  });

  it("should return false if the arrays have different lengths", () => {
    const a = ["a", "b"];
    const b = ["a", "b", "c"];

    expect(arrayEquals(a, b)).to.be.equal(false);
  });
});
