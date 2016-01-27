export default function hasLesson(ParentClass) {
  return class LessonContainer extends ParentClass {
    showLesson() {
      this.setState({showingLesson: true});
    }

    hideLesson() {
      this.setState({showingLesson: false});
    }

    toggleLesson() {
      this.setState({showingLesson: !this.state.showingLesson});
    }

    reviewLesson() {
      this.setState({showingLesson: true, reviewingLesson: true});
    }
  }
}
