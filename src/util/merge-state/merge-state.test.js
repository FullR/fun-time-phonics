import {expect} from "chai";
import mergeState from "./index";

describe("mergeState", function() {
  it("should deeply merge the passed objects over the state without mutations", () => {
    let state = {
      a: {
        b: {
          c: {
            d: "e",
            f: "g"
          }
        }
      }
    };
    const originalState = state;

    const fakeComponent = {
      state,
      setState(newState) {
        state = newState;
      }
    };

    mergeState(fakeComponent, {
      a: {
        test1: "1",
        b: {
          test2: "2",
          test3: "3"
        }
      }
    }, {z: "x"});

    expect(state).to.deep.equal({
      z: "x",
      a: {
        test1: "1",
        b: {
          test2: "2",
          test3: "3",
          c: {
            d: "e",
            f: "g"
          }
        }
      }
    });

    expect(originalState).to.deep.equal({
      a: {
        b: {
          c: {
            d: "e",
            f: "g"
          }
        }
      }
    });
  });
});
