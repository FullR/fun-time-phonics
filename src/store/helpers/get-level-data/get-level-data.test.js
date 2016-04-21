import {expect} from "chai";
import getLevelData from "./index";

describe("getLevelData", function() {
  const state = {
    levels: [
      {id: "1"},
      {id: "2"},
      {id: "3"}
    ]
  };

  expect(getLevelData(state, "2")).to.be.equal(state.levels[1]);
});
