import {expect} from "chai";
import maybeCall from "./index";

describe("maybeCall", function() {
  it("should invoke its first argument (and pass its remaining arguments) if the first argument is a function", () => {
    const add = (a, b) => a + b;
    expect(maybeCall(add, 5, 7)).to.be.equal(12);
  });

  it("should return its first argument if it's not a function", () => {
    expect(maybeCall("test", 3, 2, 1)).to.be.equal("test");
  });
});
