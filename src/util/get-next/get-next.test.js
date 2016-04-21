import {expect} from "chai";
import getNext from "./index";

describe("getNext", function() {
  it("should return the value in the passed array after the first instance of the passed value", () => {
    expect(getNext([3, 5, 2, 7], 5)).to.be.equal(2);
  });

  it("should return null if the next value doesn't exist", () => {
    expect(getNext([3, 5, 2, 7], 10)).to.be.equal(null);
    expect(getNext([3, 5, 2, 7], 7)).to.be.equal(null);
  });
});
