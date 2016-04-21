import {expect} from "chai";
import matcher from "./index";

describe("matcher", function() {
  it("should match literals", () => {
    const result = matcher("input",
      "a", "b",
      "c", "d",
      "e", "f",
      "input", "output",
      "g", "h"
    );
    expect(result).to.be.equal("output");
  });

  it("should invoke a result if its a function", () => {
    const result = matcher("input",
      "a", "b",
      "c", "d",
      "e", "f",
      "input", () => "output",
      "g", "h"
    );
    expect(result).to.be.equal("output");
  });

  it("should invoke keys if they're functions", () => {
    const result = matcher("input",
      "a", "b",
      "c", "d",
      () => false, "f",
      (input) => {
        expect(input).to.be.equal("input");
        return true;
      }, () => "output",
      "g", "h"
    );
    expect(result).to.be.equal("output");
  });

  it("should return the last argument if no handlers are matched and a default value is passed", () => {
    const result = matcher("input",
      "a", "b",
      "c", "d",
      "e", "f",
      "z", "x",
      "g", "h",
      "output"
    );
    expect(result).to.be.equal("output");
  });

  it("should return the result of the last argument if no handlers are matched and a default function is passed", () => {
    const result = matcher("input",
      "a", "b",
      "c", "d",
      "e", "f",
      "z", "x",
      "g", "h",
      () => "output"
    );
    expect(result).to.be.equal("output");
  });
});
