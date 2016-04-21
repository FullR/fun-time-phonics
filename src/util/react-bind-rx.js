import React from "react";

/*
  Curried function for creating higher components that depend asynchronously on an Rx.Observable
*/

const reactBindRx = (renderFn) => // Handles JSX, passing props and observable state to wrapped component
  (observable) => // The observable to subscribe to
  (Component) => // The component to wrap
    class ObserverComponent extends React.Component {
      constructor(props) {
        super(props);
        const state = {
          error: null,
          complete: false
        };
        if(typeof observable.getValue === "function") {
          // leave value undefined, so wrapped component's defaultProps work as expected
          state.value = observable.getValue();
        }
        this.state = state;
      }

      componentWillMount() {
        this.disposable = observable.subscribe(
          (value) => this.setState({error: null, value}),
          (error) => this.setState({error}),
          () => this.setState({completed: true})
        );
      }

      componentWillUnmount() {
        if(this.disposable) {
          this.disposable.dispose();
          this.disposable = null;
        }
      }

      render() {
        return renderFn(Component, this.props, this.state);
      }
    };

export default reactBindRx;
