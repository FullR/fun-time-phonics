import {expect} from "chai";
import changeRoute from "./index";

describe("changeRoute", function() {
  it("should set the route to the passed route", () => {
    expect(changeRoute({route: "a"}, {route: "b"}).route).to.be.equal("b");
  });
});
