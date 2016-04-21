import {expect} from "chai";
import resetLevel from "./index";
import initialState from "../../initial-state";

describe("resetLevel", function() {
  it("should replace the level data with its initial state", () => {
    const state = {
      levels: [
        {id: "1"}
      ]
    };
    const expectedResult = {
      levels: [
        initialState.levels.find((level) => level.id === "1")
      ]
    };

    const newState = resetLevel(state, {levelId: "1"});

    expect(newState).to.deep.equal(expectedResult);
  });
});
