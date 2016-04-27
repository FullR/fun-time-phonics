import React from "react";
import {mount} from "enzyme";
import {expect} from "chai";
import bindProps from "./index";

describe("bindProps", function() {
  it("should overwrite passed props with bound props", () => {
    class TestComponent extends React.Component {
      render() {
        expect(props.testProp).to.be.equal("value");
        return null;
      }
    }
    const BoundTestComponent = bindProps({testProp: "value"})(TestComponent);

    mount(<BoundTestComponent/>);
  });
});
