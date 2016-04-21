import {expect} from "chai";
import stoppableCo from "./index";
import wait from "../wait";

describe("stoppableCo", function() {
  it("should return a promise that resolves when the co-routine finishes", (done) => {
    let finished = false;
    const {promise} = stoppableCo(function*() {
      yield wait(5);
      yield wait(5);
      finished = true;
    })();

    promise.then(() => {
      if(finished) {
        done();
      } else {
        done(new Error("Promise resolved before finished flag was set"));
      }
    }, done);
  });

  it("should resolve early when its returned stop function is called", (done) => {
    let finished = false;
    const {promise, stop} = stoppableCo(function*() {
      yield wait(5);
      yield wait(5);
      finished = true;
    })();

    setTimeout(stop, 3);

    promise.then(() => {
      if(finished) {
        done(new Error("Finished flag was flipped despite stop being called"));
      } else {
        done();
      }
    }, done);
  });
});
