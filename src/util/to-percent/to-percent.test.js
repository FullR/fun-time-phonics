import {expect} from "chai";
import toPercent from "./index";

describe("toPercent", function() {
  it("should turn a ratio into a percentage", () => {
    expect(toPercent(7.5, 10)).to.be.equal(75);
    expect(toPercent(0, 10)).to.be.equal(0);
    expect(toPercent(50, 100)).to.be.equal(50);
  });

  it("should return 0 if the max value is 0", () => {
    expect(toPercent(10, 0)).to.be.equal(0);
  });
});
