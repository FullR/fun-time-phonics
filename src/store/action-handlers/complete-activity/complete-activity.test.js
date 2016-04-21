import {expect} from "chai";
import completeActivity from "./index";

describe("completeActivity", function() {
  it("should increment the current activity index", () => {
    const state = {
      levels: [
        {id: "test", activityIndex: 0}
      ]
    };

    const newState = completeActivity(state, {levelId: "test"});

    expect(newState.levels[0].activityIndex).to.be.equal(1);
  });

  it("should set the current answer to null", () => {
    const state = {
      levels: [
        {id: "test", activityIndex: 0, currentAnswer: {some: "answer"}}
      ]
    };

    const newState = completeActivity(state, {levelId: "test"});

    expect(newState.levels[0].currentAnswer).to.be.equal(null);
  });
});
