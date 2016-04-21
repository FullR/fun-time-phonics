import {expect} from "chai";
import replaceWhere from "./index";

describe("replaceWhere", function() {
  it("should transform elements in the passed array that pass the predicate function", () => {
    const data = [1, 2, 3, 4, 5];
    const predicate = (n) => n % 2 === 0;
    const transform = (n) => n * 10;
    const result = replaceWhere(data, predicate, transform);
    expect(result).to.deep.equal([1, 20, 3, 40, 5]);
  });

  it("should not mutate the passed array", () => {
    const data = [1, 2, 3];
    const predicate = () => true;
    const transform = (v) => v;

    expect(replaceWhere(data, predicate, transform)).to.not.equal(data);
  });
});
