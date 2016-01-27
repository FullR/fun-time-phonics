export default function hasActivities(activityComponents) {
  const activityCount = activityComponents.length;

  return (ParentClass) => class ActivityContainer extends ParentClass {
    componentWillMount() {
      if(this.state.activitiesComplete) {
        this.resetActivities({
          showingLesson: true
        });
      }
      if(super.componentWillMount) {
        super.componentWillMount();
      }
    }

    completeActivity(correct) {
      const {score, activityIndex, highscore} = this.state;
      const activitiesComplete = (activityIndex + 1 === activityCount);
      const newScore = correct ? ((score || 0) + 1) : (score || 0);
      const newHighscore = (activitiesComplete && newScore > highscore) ? newScore : highscore;

      this.setState({
        activitiesComplete,
        total: activityCount,
        highscore: newHighscore,
        score: newScore,
        activityIndex: (activityIndex || 0) + 1,
        currentAnswer: null,
        reviewingLesson: false
      });
    }

    setCurrentAnswer(currentAnswer) {
      this.setState({currentAnswer});
    }

    resetActivities(stateObj) {
      this.setState({
        ...stateObj,
        activitiesComplete: false,
        currentAnswer: null,
        score: 0,
        activityIndex: 0
      });
    }

    getActivity() {
      return activityComponents[this.state.activityIndex || 0];
    }
  };
}
