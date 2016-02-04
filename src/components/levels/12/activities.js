import React from "react";
import Activity from "components/activity";
import Question from "components/levels/8/question";
import Response from "components/levels/8/response";
import soundContext from "decorators/sound-context";

export default [
  {words: ["up", "in", "on"], correct: "up"},
  {words: ["igloo", "ugly", "eagle"], correct: "ugly"},
  {words: ["enter", "otter", "under"], correct: "under"},
  {words: ["cup", "cop", "cap"], correct: "cup"},
  {words: ["beg", "bag", "bug"], correct: "bug"},
  {words: ["rug", "rag", "rig"], correct: "rug"},
  {words: ["run", "ring", "rain"], correct: "run"},
  {words: ["top", "tape", "tub"], correct: "tub"},
  {words: ["fin", "fan", "fun"], correct: "fun"},
  {words: ["hat", "hut", "hot"], correct: "hut"},
  {words: ["boys", "bees", "bus"], correct: "bus"},
  {words: ["nut", "net", "knot"], correct: "nut"},
  {words: ["trick", "truck", "track"], correct: "truck"},
  {words: ["lunch", "launch", "blond"], correct: "lunch"},
  {words: ["batter", "boater", "butter"], correct: "butter"},
  {words: ["rest", "rush", "wrench"], correct: "rush"},
  {words: ["stomp", "stamp", "stump"], correct: "stump"},
  {words: ["mud", "mad", "mitt"], correct: "mud"},
  {words: ["bench", "punch", "pitch"], correct: "punch"},
  {words: ["duck", "dock", "deck"], correct: "duck"}
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
          teacher={{centered: !this.props.wordsOnly, text: "Instructions"}}
          number={12}
          activityCount={activities.length}
          title="Find the Sound - Short u"
          Question={Question}
          Response={Response}
        />
      );
    }
  }

  return ActivityInstance;
});
