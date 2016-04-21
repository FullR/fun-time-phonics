import {expect} from "chai";
import getLevelScore from "./index";

describe("getLevelScore", function() {
  const state = {
    levels: [
      {id: "1"},
      {id: "2", score: 25},
      {id: "3"}
    ]
  };

  expect(getLevelScore(state, "2")).to.be.equal(state.levels[1].score);
});
