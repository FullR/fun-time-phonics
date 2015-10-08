export default function hasLesson(ClassFn) {
  Object.assign(ClassFn.prototype, {
    showLesson() {
      this.setState({showingLesson: true});
    },

    hideLesson() {
      this.setState({showingLesson: false});
    },

    toggleLesson() {
      this.setState({showingLesson: !this.state.showingLesson});
    }
  });
}
