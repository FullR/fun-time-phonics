import React from "react";
import inspector from "decorators/inspector";
import Series from "components/series";

@inspector(({n}, s) => console.log(n, s))
class Step extends React.Component {
  render() {
    const {n, name, onClick} = this.props;
    return (
      <button onClick={onClick}>{n} {name}</button>
    );
  }
}

const steps = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten"
];

export default class TestPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {index: 0};
  }

  onIndexChange(index) {
    this.setState({index});
  }

  onNext() {
    this.setState({index: this.state.index + 1});
  }

  onPrevious() {
    this.setState({index: this.state.index - 1});
  }

  render() {
    const {index} = this.state;
    return (
      <div>
        <Series index={index}>
          {steps.map((n) => <Step n={n} key={n}/>)}
          <div>
            You're the best!
            <span>You did it!</span>
          </div>
        </Series>
        <span onClick={::this.onPrevious}>-</span>
        <input value={index + 1} onChange={(event) => this.onIndexChange((+event.target.value) - 1)}/>
        <span onClick={::this.onNext}>+</span>
      </div>
    );
  }
}
