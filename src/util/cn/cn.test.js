import {expect} from "chai";
import cn from "./index";

describe("cn", () => {
  it("should combine all truthy classNames into a single className string", () => {
    const input = ["foo", null, "bar", false, undefined, 0, "buzz", false];
    const expected = "foo bar buzz";
    expect(cn(...input)).to.equal(expected);
  });
});
