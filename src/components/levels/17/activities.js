import React from "react";
import Activity from "components/activity";
import Question from "./question";
import Response from "./response";
import soundContext from "decorators/sound-context";

export default [
  {words: ["in", "on", "end"], correct: "in"},                  // 1
  {words: ["bug", "beg", "big"], correct: "big"},
  {words: ["fin", "fan", "fun"], correct: "fin"},
  {words: ["pin", "pen", "pan"], correct: "pin"},
  {words: ["lap", "lip", "loop"], correct: "lip"}, // 5
  {words: ["sip", "sap", "soup"], correct: "sip"},
  {words: ["boot", "beet", "bit"], correct: "bit"},
  {words: ["spin", "spoon", "spray"], correct: "spin"},
  {words: ["peg", "pig", "pug"], correct: "pig"},
  {words: ["punch", "pitch", "bench"], correct: "pitch"}, // 10
  {words: ["Ben", "Bob", "Bill"], correct: "Bill"},
  {words: ["bed", "bad", "bid"], correct: "bid"},
  {words: ["sleep", "sled", "slip"], correct: "slip"},
  {words: ["pit", "pet", "putt"], correct: "pit"},
  {words: ["pal", "pill", "pool"], correct: "pill"}, // 15
  {words: ["chess", "chips", "cheese"], correct: "chips"},
  {words: ["ships", "shapes", "shops"], correct: "ships"},
  {words: ["eagle", "igloo", "ugly"], correct: "igloo"},
  {words: ["injured", "enter", "under"], correct: "injured"}
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
          number={17}
          activityCount={activities.length}
          title={"Short Sounds - The Letter \"i\""}
          Question={Question}
          Response={Response}
        />
      );
    }
  }

  return ActivityInstance;
});
