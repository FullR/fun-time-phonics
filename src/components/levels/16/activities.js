import React from "react";
import Activity from "components/activity";
import Question from "./question";
import Response from "./response";
import soundContext from "decorators/sound-context";

export default [
  {words: ["red", "pink", "bath"], correct: "red"},                  // 1
  {words: ["ball", "bell", "bull"], correct: "bell"},
  {words: ["knit", "knot", "net"], correct: "net"},
  {words: ["pet", "pot", "putt"], correct: "pet"},
  {words: ["wood", "wait", "wet"], correct: "wet"}, // 5
  {words: ["pin", "pen", "pan"], correct: "pen"},
  {words: ["egg", "igloo", "ugly"], correct: "egg"},
  {words: ["duck", "dock", "deck"], correct: "deck"},
  {words: ["bug", "beg", "bag"], correct: "beg"},
  {words: ["bud", "bed", "bit"], correct: "bed"}, // 10
  {words: ["ten", "tin", "tan"], correct: "ten"},
  {words: ["men", "man", "mom"], correct: "men"},
  {words: ["drip", "drop", "dress"], correct: "dress"},
  {words: ["dust", "desk", "dish"], correct: "desk"},
  {words: ["bench", "punch", "pitch"], correct: "bench"}, // 15
  {words: ["chimp", "chest", "chain"], correct: "chest"},
  {words: ["stitch", "scratch", "stretch"], correct: "stretch"},
  {words: ["guests", "gifts", "gas"], correct: "guests"},
  {words: ["stop", "step", "stool"], correct: "step"}
].map((activityProps, i, activities) => {
  const sounds = activityProps.words.reduce((sounds, word) => {
    sounds[`teacher/${word}`] = `teacher/words/${word}`;
    return sounds;
  }, {});

  @soundContext(sounds)
  class ActivityInstance extends React.Component {
    render() {
      return (
        <Activity {...this.props} {...activityProps}
          number={16}
          title={"Short Sounds - The Letter \"e\""}
          activityCount={activities.length}
          Question={Question}
          Response={Response}
        />
      );
    }
  }

  return ActivityInstance;
});
