import {expect} from "chai";
import defer from "./index";

describe("defer", function() {
  this.timeout(500);
  it("should resolve it's promise when it's resolve property is called", (done) => {
    const deferred = defer();
    const expected = "EXPECTED";

    deferred.promise.then(
      (value) => value === expected ? done() : done(new Error("Incorrect value resolved")),
      (error) => done(error)
    );

    deferred.resolve(expected);
  });

  it("should reject it's promise when it's reject property is called", () => {
    const deferred = defer();
    const expected = "EXPECTED";

    deferred.promise.then(
      () => done(new Error("Promise should have rejected")),
      (error) => error === expected ? done() : done(new Error("Incorrect error rejected"))
    );

    deferred.reject(expected);
  });
});
