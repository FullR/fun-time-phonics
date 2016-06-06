
// used to insure timeouts and intervals are cleared when their spawning component unmounts
export default function timerContainer(Parent) {
  return class TimerContainer extends Parent {
    constructor(props) {
      super(props);
      this._timeouts = [];
      this._intervals = [];
    }

    setTimeout(...args) {
      const timeout = setTimeout(...args);
      this._timeouts.push(timeout);
      return timeout;
    }

    setInterval(...args) {
      const interval = setInterval(...args);
      this._intervals.push(interval);
      return interval;
    }

    wait(ms) {
      return new Promise((resolve) => this.setTimeout(resolve, ms));
    }

    componentWillUnmount() {
      this._timeouts.forEach((timeout) => clearTimeout(timeout));
      this._intervals.forEach((interval) => clearInterval(interval));
    }
  }
}
