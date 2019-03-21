import React, { Component } from "react";
import "./App.sass";
import "./assets/sinkin-sans/SinkinSans-200XLight.woff";
import Display from "./Display";
import "./Display.sass";
import makeCalculation from "./makeCalculation";

const nonNums = ["+", "-", "x", "/", "=", "±"];
const operators = ["+", "-", "*", "/"];
const basicOps = ["+", "-"];
const priorityOps = ["*", "/"];
const customEval = string => {
  const len = string.length;
  console.log("PRE", string);
  string = string[0] === "0" ? string.slice(1) : string;
  string =
    operators.includes(string[len - 1]) || string[len - 1] === "."
      ? string.slice(0, len - 1)
      : string;
  console.log("POST", string);
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
  }
  //
  //
  handleNumKeyClick(e) {
    const { inputCalc, potentialVal, currDisplay } = this.state;
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
    const { currDisplay, potentialVal, inputCalc } = this.state;
    const payload = e.currentTarget.dataset.calcdata;
    const prevToken = currDisplay[currDisplay.length - 1];
    const prevPotentialToken = potentialVal[potentialVal.length - 1];
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

          <div className="keyboard">
            <div className="keyboard__keyboard-row-key">
              <div
                id="clear"
                data-calcdata="AC"
                className="keyboard__keyboard-row-key__key-btn keyboard__keyboard-row-key__key-btn--deletion-btn"
                onClick={() =>
                  this.setState({
                    inputCalc: "",
                    currDisplay: "0",
                    potentialVal: "",
                    previousVal: ""
                  })
                }
              >
                <span className="keyboard__keyboard-row-key__key-btn__symbol">
                  AC
                </span>
              </div>
              <div
                data-calcdata="±"
                className="keyboard__keyboard-row-key__key-btn keyboard__keyboard-row-key__key-btn--deletion-btn"
              >
                <span className="keyboard__keyboard-row-key__key-btn__symbol">
                  ±
                </span>
              </div>
              <div
                data-calcdata="Del"
                className="keyboard__keyboard-row-key__key-btn keyboard__keyboard-row-key__key-btn--deletion-btn"
              >
                {/* // onClick={() =></div>
                //   this.setState({
                //     inputCalc: "0",
                //     currDisplay: "0"
                //   })
                // } */}
                <span className="keyboard__keyboard-row-key__key-btn__symbol">
                  Del
                </span>
              </div>
              <div
                id="divide"
                data-calcdata="/"
                className="keyboard__keyboard-row-key__key-btn  keyboard__keyboard-row-key__key-btn--operation-btn"
                onClick={this.handleOperatorClick}
              >
                <span className="keyboard__keyboard-row-key__key-btn__symbol">
                  /
                </span>
              </div>
            </div>
            {/* ----------------------------------------------- */}
            {/* ----------------------------------------------- */}
            <div className="keyboard__keyboard-row-key">
              <div
                id="seven"
                data-calcdata="7"
                className="keyboard__keyboard-row-key__key-btn keyboard__keyboard-row-key__key-btn--number-btn"
                onClick={this.handleNumKeyClick}
              >
                <span className="keyboard__keyboard-row-key__key-btn__symbol">
                  7
                </span>
              </div>
              <div
                id="eight"
                data-calcdata="8"
                className="keyboard__keyboard-row-key__key-btn keyboard__keyboard-row-key__key-btn--number-btn"
                onClick={this.handleNumKeyClick}
              >
                <span className="keyboard__keyboard-row-key__key-btn__symbol">
                  8
                </span>
              </div>
              <div
                id="nine"
                data-calcdata="9"
                className="keyboard__keyboard-row-key__key-btn keyboard__keyboard-row-key__key-btn--number-btn"
                onClick={this.handleNumKeyClick}
              >
                <span className="keyboard__keyboard-row-key__key-btn__symbol">
                  9
                </span>
              </div>
              <div
                id="multiply"
                data-calcdata="*"
                className="keyboard__keyboard-row-key__key-btn keyboard__keyboard-row-key__key-btn--operation-btn"
                onClick={this.handleOperatorClick}
              >
                <span className="keyboard__keyboard-row-key__key-btn__symbol">
                  *
                </span>
              </div>
            </div>
            {/* ----------------------------------------------- */}
            {/* ----------------------------------------------- */}
            <div className="keyboard__keyboard-row-key">
              <div
                id="four"
                data-calcdata="4"
                className="keyboard__keyboard-row-key__key-btn keyboard__keyboard-row-key__key-btn--number-btn"
                onClick={this.handleNumKeyClick}
              >
                <span className="keyboard__keyboard-row-key__key-btn__symbol">
                  4
                </span>
              </div>
              <div
                id="five"
                data-calcdata="5"
                className="keyboard__keyboard-row-key__key-btn keyboard__keyboard-row-key__key-btn--number-btn"
                onClick={this.handleNumKeyClick}
              >
                <span className="keyboard__keyboard-row-key__key-btn__symbol">
                  5
                </span>
              </div>
              <div
                id="six"
                data-calcdata="6"
                className="keyboard__keyboard-row-key__key-btn keyboard__keyboard-row-key__key-btn--number-btn"
                onClick={this.handleNumKeyClick}
              >
                <span className="keyboard__keyboard-row-key__key-btn__symbol">
                  6
                </span>
              </div>
              <div
                id="subtract"
                data-calcdata="-"
                className="keyboard__keyboard-row-key__key-btn keyboard__keyboard-row-key__key-btn--operation-btn"
                onClick={this.handleOperatorClick}
              >
                <span className="keyboard__keyboard-row-key__key-btn__symbol">
                  -
                </span>
              </div>
            </div>
            {/* ----------------------------------------------- */}
            {/* ----------------------------------------------- */}
            <div className="keyboard__keyboard-row-key">
              <div
                id="one"
                data-calcdata="1"
                className="keyboard__keyboard-row-key__key-btn keyboard__keyboard-row-key__key-btn--number-btn"
                onClick={this.handleNumKeyClick}
              >
                <span className="keyboard__keyboard-row-key__key-btn__symbol">
                  1
                </span>
              </div>
              <div
                id="two"
                data-calcdata="2"
                className="keyboard__keyboard-row-key__key-btn keyboard__keyboard-row-key__key-btn--number-btn"
                onClick={this.handleNumKeyClick}
              >
                <span className="keyboard__keyboard-row-key__key-btn__symbol">
                  2
                </span>
              </div>
              <div
                id="three"
                data-calcdata="3"
                className="keyboard__keyboard-row-key__key-btn keyboard__keyboard-row-key__key-btn--number-btn"
                onClick={this.handleNumKeyClick}
              >
                <span className="keyboard__keyboard-row-key__key-btn__symbol">
                  3
                </span>
              </div>
              <div
                id="add"
                data-calcdata="+"
                className="keyboard__keyboard-row-key__key-btn keyboard__keyboard-row-key__key-btn--operation-btn"
                onClick={this.handleOperatorClick}
              >
                <span className="keyboard__keyboard-row-key__key-btn__symbol">
                  +
                </span>
              </div>
            </div>
            {/* ----------------------------------------------- */}
            {/* ----------------------------------------------- */}
            <div className="keyboard__keyboard-row-key">
              <div
                id="zero"
                data-calcdata="0"
                className="keyboard__keyboard-row-key__key-btn keyboard__keyboard-row-key__key-btn--double keyboard__keyboard-row-key__key-btn--number-btn"
                onClick={this.handleNumKeyClick}
              >
                <span className="keyboard__keyboard-row-key__key-btn__symbol">
                  0
                </span>
              </div>
              <div
                id="decimal"
                data-calcdata="."
                className="keyboard__keyboard-row-key__key-btn keyboard__keyboard-row-key__key-btn--number-btn"
                onClick={e => {
                  if (!this.state.currDisplay.includes("."))
                    this.handleNumKeyClick(e);
                }}
              >
                <span className="keyboard__keyboard-row-key__key-btn__symbol">
                  .
                </span>
              </div>
              <div
                data-calcdata="="
                id="equals"
                className="keyboard__keyboard-row-key__key-btn keyboard__keyboard-row-key__key-btn--operation-btn"
                onClick={() => {
                  let { inputCalc, potentialVal, previousVal } = this.state;
                  potentialVal = potentialVal ? customEval(potentialVal) : null;
                  console.log("ALERT", inputCalc);
                  const result = potentialVal
                    ? customEval(
                        String(inputCalc).slice(
                          0,
                          inputCalc.length - previousVal.length
                        ) + potentialVal
                      )
                    : customEval(inputCalc);
                  this.setState(state => {
                    return {
                      inputCalc: result,
                      currDisplay: result,
                      previousVal: result
                    };
                  });
                }}
              >
                <span className="keyboard__keyboard-row-key__key-btn__symbol">
                  =
                </span>
              </div>
            </div>
            {/* ----------------------------------------------- */}
            {/* ----------------------------------------------- */}{" "}
          </div>
        </div>
      </main>
    );
  }
}

export default App;
