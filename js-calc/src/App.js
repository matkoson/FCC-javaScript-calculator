import React, { Component } from "react";
import "./App.sass";
import "./assets/sinkin-sans/SinkinSans-200XLight.woff";
import Display from "./Display";
import "./Display.sass";
import makeCalculation from "./makeCalculation";

const nonNums = ["+", "-", "x", "/", "=", "±"];
const operators = ["+", "-", "*", "/"];
const priorityOps = ["*", "/"];
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputCalc: "", //3.
      potentialVal: "", //2.
      currDisplay: "0" //1.
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
    if (currDisplay === "0") {
      return this.setState({ currDisplay: payload, potentialVal: payload });
    }
    if (!priorityOps.includes(prevToken)) {
      if (!operators.includes(prevToken)) {
        return this.setState(state => {
          return {
            currDisplay: state.currDisplay + payload,
            potentialVal: state.potentialVal + payload
          };
        });
      } else {
        return this.setState(state => {
          return {
            currDisplay: payload,
            potentialVal: state.potentialVal + payload
          };
        });
      }
    } else {
      const toEval = eval(`${inputCalc.slice(inputCalc.length - 2)}${payload}`);
      return this.setState(state => {
        return {
          potentialVal: String(toEval),
          currDisplay: state.currDisplay + payload
        };
      });
    }
  }
  handleOperatorClick(e) {
    const { currDisplay } = this.state;
    const payload = e.currentTarget.dataset.calcdata;
    const prevToken = currDisplay[currDisplay.length - 1];
    if (operators.includes(prevToken)) {
      return;
    }
    return this.setState(state => {
      return {
        inputCalc: state.inputCalc + state.potentialVal + payload,
        potentialVal: "",
        currDisplay: payload
      };
    });
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
                onClick={this.deletionHandler}
              >
                <span className="keyboard__keyboard-row-key__key-btn__symbol">
                  AC
                </span>
              </div>
              <div
                data-calcdata="±"
                className="keyboard__keyboard-row-key__key-btn keyboard__keyboard-row-key__key-btn--deletion-btn"
                // onClick={()=>}
              >
                <span className="keyboard__keyboard-row-key__key-btn__symbol">
                  ±
                </span>
              </div>
              <div
                data-calcdata="Del"
                className="keyboard__keyboard-row-key__key-btn keyboard__keyboard-row-key__key-btn--deletion-btn"
                onClick={() =>
                  this.setState({
                    inputCalc: "0",
                    currDisplay: "0"
                  })
                }
              >
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
                  ÷
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
                  x
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
                onClick={this.handleNumKeyClick}
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
                  console.log(this.state.inputCalc);
                  const { inputCalc } = this.state;
                  const toEval = operators.includes(
                    inputCalc[inputCalc.length - 1]
                  )
                    ? inputCalc.slice(0, inputCalc.length - 1)
                    : inputCalc;
                  this.setState({
                    inputCalc: eval(String(toEval))
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
