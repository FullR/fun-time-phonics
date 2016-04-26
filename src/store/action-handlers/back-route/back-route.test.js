import {expect} from "chai";
import changeRoute from "./index";

describe("backRoute", function() {
  it("should set the route to lastRoute", () => {
    expect(changeRoute({route: "current", lastRoute: "last"}).route).to.be.equal("last");
  });

  it("should set the route to splash if lastRoute doesn't exist", () => {
    expect(changeRoute({route: "current"}).route).to.be.equal("splash");
  });
});
