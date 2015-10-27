export default function hasActivities(activityComponents) {
  const activityCount = typeof activityComponents === "number" ?
    activityComponents : 
    activityComponents.length;

  return (ClassFn) => {
    Object.assign(ClassFn.prototype, {
      completeActivity(correct) {
        const {score, activityIndex, highscore} = this.state;
        const activitiesComplete = (activityIndex + 1 === activityCount);
        const newScore = (score || 0) + 1;
        const newHighscore = (activitiesComplete && newScore > highscore) ? newScore : highscore;
        this.setState({
          activitiesComplete,
          highscore: newHighscore,
          score: newScore,
          activityIndex: (activityIndex || 0) + 1
        });
      },

      resetActivities(stateObj) {
        this.setState({
          ...stateObj,
          activitiesComplete: false,
          score: 0,
          activityIndex: 0
        });
      },

      getActivity() {
        return activityComponents[this.state.activityIndex || 0];
      }
    });

    return ClassFn;
  };
}
