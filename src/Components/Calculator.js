import React from "react";
import NumberButtons from "./NumberButtons";
import Operations from "./Operations";
import InputField from "./InputField";
import Reset from "./Reset";
import * as math from "mathjs";
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
    };
    this.numberHandler = this.numberHandler.bind(this);
    this.operationHandler = this.operationHandler.bind(this);
    this.resetHandler = this.resetHandler.bind(this);
    this.equalHandler = this.equalHandler.bind(this);
  }

  numberHandler(e) {
    this.setState((state) => ({
      inputValue: state.inputValue + e.target.value,
    }));
  }
  resetHandler() {
    this.setState({
      inputValue: "",
    });
  }
  operationHandler(e) {
    const lastValue = this.state.inputValue[this.state.inputValue.length - 1];

    if (this.state.inputValue && lastValue !== " " && lastValue !== ".") {
      this.setState((state) => ({
        inputValue: state.inputValue + e.target.value,
      }));
    }
  }
  equalHandler() {
    const lastValue = this.state.inputValue[this.state.inputValue.length - 1];
    if (lastValue === " " || lastValue === ".") return;
    if (this.state.inputValue) {
      this.setState((state) => ({
        inputValue: math.evaluate(state.inputValue),
      }));
    }
  }
  render() {
    return (
      <div className="calculator">
        <InputField value={this.state.inputValue} />
        <NumberButtons clicked={this.numberHandler} />
        <Operations
          clicked={this.operationHandler}
          equals={this.equalHandler}
        />
        <Reset clicked={this.resetHandler} />
      </div>
    );
  }
}

export default Calculator;
