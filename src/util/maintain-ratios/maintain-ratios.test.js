import {expect} from "chai";
import maintainRatios from "./index";

describe("maintainRatios", function() {
  it("should fill in missing width with a proportioned value", () => {
    const input = {height: 50};
    const reference = {width: 50, height: 100};
    const expected = {width: 25, height: 50};

    expect(maintainRatios(reference, input)).to.deep.equal(expected);
  });

  it("should fill in missing height with a proportioned value", () => {
    const input = {width: 100};
    const reference = {width: 50, height: 100};
    const expected = {width: 100, height: 200};

    expect(maintainRatios(reference, input)).to.deep.equal(expected);
  });

  it("should use input dimensions if both width and height are passed", () => {
    const input = {width: 1000, height: 5};
    const reference = {width: 50, height: 100};
    const expected = {width: 1000, height: 5};

    expect(maintainRatios(reference, input)).to.deep.equal(expected);
  });

  it("should use reference dimensions if neither width or height are passed", () => {
    const input = {};
    const reference = {width: 50, height: 100};
    const expected = {width: 50, height: 100};

    expect(maintainRatios(reference, input)).to.deep.equal(expected);
  });
});
