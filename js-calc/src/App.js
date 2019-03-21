import React, { Component } from "react";
import "./App.sass";
import "./assets/sinkin-sans/SinkinSans-200XLight.woff";
import Display from "./Components/Display";
import "./Display.sass";
import Keyboard from "./Components/Keyboard";

const operators = ["+", "-", "*", "/"];
const basicOps = ["+", "-"];
const priorityOps = ["*", "/"];
const customEval = string => {
  const len = string.length;
  string = string[0] === "0" ? string.slice(1) : string;
  string =
    operators.includes(string[len - 1]) || string[len - 1] === "."
      ? string.slice(0, len - 1)
      : string;
  return String(eval(String(string)));
};
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputCalc: "", //3.
      potentialVal: "", //2.
      currDisplay: "0", //1.
      previousVal: ""
    };
    this.handleNumKeyClick = this.handleNumKeyClick.bind(this);
    this.handleOperatorClick = this.handleOperatorClick.bind(this);
    this.handleResult = this.handleResult.bind(this);
    this.handleStateClearing = this.handleStateClearing.bind(this);
  }
  //
  //
  handleStateClearing() {
    return this.setState({
      inputCalc: "",
      currDisplay: "0",
      potentialVal: "",
      previousVal: ""
    });
  }
  handleResult() {
    let { inputCalc, potentialVal, previousVal } = this.state;
    potentialVal = potentialVal ? customEval(potentialVal) : null;
    const result = potentialVal
      ? customEval(
          String(inputCalc).slice(0, inputCalc.length - previousVal.length) +
            potentialVal
        )
      : customEval(inputCalc);
    this.setState(state => {
      return {
        inputCalc: result,
        currDisplay: result,
        previousVal: result
      };
    });
  }

  handleNumKeyClick(e) {
    const { potentialVal, currDisplay } = this.state;
    const payload = e.currentTarget.dataset.calcdata;
    const prevToken = currDisplay[currDisplay.length - 1];

    if (potentialVal.includes("*") || potentialVal.includes("/")) {
      return this.setState(state => {
        return {
          currDisplay: state.currDisplay + payload,
          potentialVal: state.potentialVal
            ? state.potentialVal + payload
            : state.previousVal + payload
        };
      });
    }
    if (basicOps.includes(prevToken) || priorityOps.includes(prevToken)) {
      return this.setState(state => {
        return {
          currDisplay: payload,
          inputCalc: state.inputCalc + payload,
          previousVal: payload
        };
      });
    }
    this.setState(state => {
      return {
        currDisplay:
          state.currDisplay === "0" ? payload : state.currDisplay + payload,
        inputCalc: state.inputCalc + payload,
        previousVal: state.previousVal + payload
      };
    });
  }
  handleOperatorClick(e) {
    const { inputCalc } = this.state;
    const payload = e.currentTarget.dataset.calcdata;
    const prevInputCalc = inputCalc[inputCalc.length - 1];
    if (operators.includes(prevInputCalc)) {
      return this.setState(state => {
        return {
          inputCalc:
            state.inputCalc.slice(0, state.inputCalc.length - 1) + payload,
          potentialVal: "",
          currDisplay: payload
        };
      });
    }
    if (priorityOps.includes(payload)) {
      return this.setState(state => {
        return {
          currDisplay: payload,
          inputCalc: state.potentialVal
            ? state.inputCalc + customEval(state.potentialVal)
            : state.inputCalc,
          potentialVal: state.previousVal + payload,
          previousVal: state.currDisplay
        };
      });
    }
    if (basicOps.includes(payload)) {
      return this.setState(state => {
        return {
          currDisplay: payload,
          inputCalc: state.potentialVal
            ? state.inputCalc.slice(
                0,
                state.inputCalc.length - state.previousVal.length
              ) +
              customEval(state.potentialVal) +
              payload
            : state.inputCalc + payload,
          potentialVal: "",
          previousVal: ""
        };
      });
    }
  }

  render() {
    return (
      <main className="app">
        <div className="js-calc">
          <Display
            primaryDisplay={this.state.currDisplay}
            secondaryDisplay={this.state.inputCalc}
          />
          <Keyboard
            currDisplay={this.state.currDisplay}
            handleStateClearing={this.handleStateClearing}
            handleNumKeyClick={this.handleNumKeyClick}
            handleOperatorClick={this.handleOperatorClick}
            handleResult={this.handleResult}
          />
        </div>
      </main>
    );
  }
}

export default App;
