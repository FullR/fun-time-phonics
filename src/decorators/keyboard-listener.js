import React from "react";

function getKeyChar(event) {
  return String.fromCharCode(event.keyCode || event.charCode);
}

export default function keyboardListener(Parent) {
  return class KeyboardListener extends Parent {
    constructor(props) {
      super(props);
      this._onKeyDown = this._onKeyDown.bind(this);
      this._onKeyUp = this._onKeyUp.bind(this);
      this._onKeyPress = this._onKeyPress.bind(this);

      window.addEventListener("keydown", this._onKeyDown);
      window.addEventListener("keyup", this._onKeyUp);
      window.addEventListener("keypress", this._onKeyPress);
    }

    componentDidMount() {
      if(this.onKeyDown) window.addEventListener("keydown", this._onKeyDown);
      if(this.onKeyUp) window.addEventListener("keyup", this._onKeyUp);
      if(this.onKeyPress) window.addEventListener("keypress", this._onKeyPress);
    }

    componentWillUnmount() {
      if(this.onKeyDown) window.removeEventListener("keydown", this._onKeyDown);
      if(this.onKeyUp) window.removeEventListener("keyup", this._onKeyUp);
      if(this.onKeyPress) window.removeEventListener("keypress", this._onKeyPress);
    }

    _onKeyDown(event) {
      this.onKeyDown(event);
    }

    _onKeyUp(event) {
      this.onKeyUp(event);
    }

    _onKeyPress(event) {
      this.onKeyPress(event);
    }
  };
}
