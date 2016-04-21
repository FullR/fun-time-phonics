import {expect} from "chai";
import completeLevel from "./index";

describe("completeLevel", function() {
  it("should set the level's complete flag to true", () => {
    const state = {
      currentLevelId: "test",
      levels: [
        {id: "test", complete: false}
      ]
    };

    const newState = completeLevel(state, {levelId: "test"});

    expect(newState.levels[0].complete).to.be.equal(true);
  });

  it("should set currentLevelId to the next level's id", () => {
    const state = {
      currentLevelId: "3",
      levels: [
        {id: "3", complete: false}
      ]
    };

    const newState = completeLevel(state, {levelId: "3"});

    expect(newState.currentLevelId).to.be.equal("4");
  });
});
