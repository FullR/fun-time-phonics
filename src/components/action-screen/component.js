import React from "react";
import robotContainer from "decorators/robot-container";
import choiceContainer from "decorators/choice-container";
import coContainer from "decorators/co-container";

@robotContainer
@choiceContainer
@coContainer
export default class ActionScreen extends React.Component {}
