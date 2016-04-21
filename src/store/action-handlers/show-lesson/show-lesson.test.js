import {expect} from "chai";
import showLesson from "./index";

describe("showLesson", function() {
  it("should set a level's complete flag to true", () => {
    const state = {
      levels: [
        {id: "test", showingLesson: false}
      ]
    };

    const newState = showLesson(state, {levelId: "test"});
    expect(newState.levels[0].showingLesson).to.be.equal(true);
  });
});
