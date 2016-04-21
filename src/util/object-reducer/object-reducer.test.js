import {expect} from "chai";
import objectReducer from "./index";

describe("objectReducer", function() {
  it("should produce a reducer function that takes actions with types that match it's handlers", () => {
    const reduceFn = objectReducer({count: 0}, {
      TEST_ACTION({count}, {change}) {
        return {count: count + change};
      }
    });

    expect(reduceFn(undefined, {type: "TEST_ACTION", change: 3})).to.deep.equal({count: 3});
  });

  it("should return the initial state if the passed action type has no handler", () => {
    const initialState = {foo: "bar"};
    const reduceFn = objectReducer(initialState);
    expect(reduceFn(undefined, {type: "foobar"})).to.deep.equal(initialState);
  });
});
