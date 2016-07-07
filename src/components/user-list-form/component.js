import React from "react";
import Button from "../button";
import bembam from "bembam";

export default class UserListForm extends React.Component {
  static propTypes = {
    onSubmit: React.PropTypes.func,
    onChange: React.PropTypes.func,
    value: React.PropTypes.string,
    autofocus: React.PropTypes.bool,
    maxLength: React.PropTypes.number
  };

  static defaultProps = {
    value: "",
    maxLength: 25
  };

  submit(event) {
    const {onSubmit} = this.props;
    event.preventDefault();
    if(onSubmit) {
      onSubmit(event);
    }
  }

  blur() {
    this.refs.input.blur();
  }

  focus() {
    this.refs.input.focus();
  }

  componentDidMount() {
    if(this.props.autofocus) {
      this.focus();
    }
  }

  render() {
    const {value, onChange, maxLength, className} = this.props;
    const cn = bembam("User-list-form", className);

    return (
      <form {...this.props} className={cn} onSubmit={this.submit.bind(this)}>
        <input value={value} onChange={onChange} ref="input" maxLength={maxLength}/>
        <Button disabled={!value || !value.trim().length}>Create</Button>
      </form>
    );
  }
}
