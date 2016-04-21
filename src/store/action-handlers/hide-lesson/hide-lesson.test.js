import {expect} from "chai";
import hideLesson from "./index";

describe("hideLesson", function() {
  it("should set a level's complete flag to true", () => {
    const state = {
      levels: [
        {id: "test", showingLesson: true}
      ]
    };

    const newState = hideLesson(state, {levelId: "test"});
    expect(newState.levels[0].showingLesson).to.be.equal(false);
  });
});
