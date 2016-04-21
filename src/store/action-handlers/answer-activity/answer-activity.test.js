import {expect} from "chai";
import answerActivity from "./index";
import reducer from "../../reducer";

describe("answerActivity", function() {
  it("should set the current answer of an activity with the passed answer", () => {
    const state = {
      levels: [
        {id: "test", currentAnswer: null}
      ]
    };
    const testAnswer = {correct: false};
    const newState = answerActivity(state, {answer: testAnswer, levelId: "test"});

    expect(newState.levels[0].currentAnswer).to.be.equal(testAnswer);
  });

  it("should increment the level's score if the answer is correct", () => {
    let state = {
      levels: [
        {id: "test", currentAnswer: null, score: 0}
      ]
    };

    state = answerActivity(state, {answer: {correct: true}, levelId: "test"});
    state = answerActivity(state, {answer: {correct: false}, levelId: "test"});

    expect(state.levels[0].score).to.be.equal(1);

  });
});
