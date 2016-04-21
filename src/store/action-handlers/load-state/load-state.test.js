import {expect} from "chai";
import loadState from "./index";

describe("loadState", function() {
  it("should replace the current state", () => {
    const loadedState = {foo: "bar"};
    const newState = loadState({}, {state: loadedState});
    expect(newState).to.be.equal(loadedState);
  });
});
