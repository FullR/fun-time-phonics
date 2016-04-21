import {expect} from "chai";
import visitLevel from "./index";

describe("visitLevel", function() {
  it("should replace the last level", () => {
    const state = {
      lastLevel: "1",
      levels: []
    };
    const newState = visitLevel(state, {levelId: "2"});

    expect(newState.lastLevel).to.be.equal("2");
  });

  it("should mark the level as started", () => {
    const state = {
      lastLevel: "1",
      levels: [
        {id: "1"},
        {id: "2", started: false}
      ]
    };

    const newState = visitLevel(state, {levelId: "2"});

    expect(newState.levels[1].started).to.be.equal(true);
  });
});
