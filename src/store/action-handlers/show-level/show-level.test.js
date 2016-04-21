import {expect} from "chai";
import showLevel from "./index";

describe("showLevel", function() {
  it("should set the value of currentLevelId", () => {
    expect(showLevel({currentLevelId: null}, {levelId: "test"}).currentLevelId).to.be.equal("test");
  });

  it("should set route to current-level", () => {
    expect(showLevel({currentLevelId: null, route: "foo"}, {levelId: "test"}).route).to.be.equal("current-level");
  });
});
