import React from "react";
import hasher from "hasher";
import Lesson1 from "./lesson";
import persists from "decorators/persists";
const log = debug("tctc:level-1");

const activities = [
  require("./activities/1"),
  require("./activities/2"),
  require("./activities/3")
];

@persists("level-1", true)
export default class Level1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.load({
      activityIndex: 0,
      showingLesson: true,
      score: 0,
      highscore: -1
    });
  }

  toggleLesson() {
    this.setState({
      showingLesson: !this.state.showingLesson
    });
  }

  onActivityComplete(correct) {
    const {activityIndex} = this.state;
    log(`Activity completed: ${correct ? "correct" : "incorrect"}`);
    this.setState({
      activityIndex: activityIndex + 1,
      score: correct ? this.state.score + 1 : this.state.score
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.activityIndex > 2) {
      hasher.setHash("splash");
    }
  }

  render() {
    const {activityIndex, showingLesson} = this.state;
    const completed = (activityIndex >= activities.length);

    if(showingLesson) {
      return (
        <Lesson1 
          arrowLabel={`Activity ${activityIndex + 1}`} 
          onComplete={::this.toggleLesson}
        />
      );
    } else {
      const Activity = activities[activityIndex];
      return Activity ? (
        <Activity
          index={activityIndex}
          onComplete={::this.onActivityComplete}
        />
      ) : null;
    }
  }
}
