import React from "react";
import Activity from "components/activity";
import Question from "components/levels/8/question";
import Response from "components/levels/8/response";
import soundContext from "decorators/sound-context";

export default [
  {words: ["in", "on", "off"], correct: "in"},
  {words: ["bell", "ill", "tall"], correct: "ill"},
  {words: ["rug", "rag", "rig"], correct: "rig"},
  {words: ["bug", "beg", "big"], correct: "big"},
  {words: ["pin", "pen", "pan"], correct: "pin"},
  {words: ["lap", "lip", "loop"], correct: "lip"},
  {words: ["flip", "flap", "flop"], correct: "flip"},
  {words: ["boot", "beet", "bit"], correct: "bit"},
  {words: ["spine", "spoon", "spin"], correct: "spin"},
  {words: ["peg", "pig", "pug"], correct: "pig"},
  {words: ["punch", "pitch", "bench"], correct: "pitch"},
  {words: ["Bob", "Bill", "Ben"], correct: "Bill"},
  {words: ["bed", "bad", "bid"], correct: "bid"},
  {words: ["slide", "sled", "slip"], correct: "slip"},
  {words: ["pit", "pet", "putt"], correct: "pit"},
  {words: ["watch", "itch", "wrench"], correct: "itch"},
  {words: ["chess", "chips", "cheese"], correct: "chips"},
  {words: ["ships", "shapes", "shops"], correct: "ships"},
  {words: ["eagle", "igloo", "ugly"], correct: "igloo"},
  {words: ["injured", "elm", "under"], correct: "injured"}
].map((activityProps) => {
  const sounds = activityProps.words.reduce((sounds, word) => {
    sounds[`teacher/${word}`] = `teacher/words/${word}`;
    return sounds;
  }, {});

  @soundContext(sounds)
  class ActivityInstance extends React.Component {
    render() {
      return (
        <Activity {...this.props} {...activityProps}
          teacher={{centered: !this.props.wordsOnly}}
          number={10}
          title="Find the Sound - Short i"
          activityCount={20}
          Question={Question}
          Response={Response}
        />
      );
    }
  }

  return ActivityInstance;
});
