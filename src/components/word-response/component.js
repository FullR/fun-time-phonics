import React from "react";
import cn from "util/cn";
import Response from "components/response";
import Word from "components/word";

const {Answer} = Response;

export default class WordResponse extends React.Component {
  static propTypes = {
    word: React.PropTypes.string,
    answer: React.PropTypes.object.isRequired
  };

  static Title = Response.Title;

  render() {
    const {answer, isCorrect, children, className} = this.props;
    const classNames = cn("Word-response", className);

    return (
      <Response {...this.props} className={classNames} word={null}>
        {children}
        <Answer isCorrect={isCorrect}>
          <Word word={answer.word}/>
        </Answer>
      </Response>
    );
  }
}
