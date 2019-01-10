import React, { Component } from "react";
import "./App.sass";
import "./assets/sinkin-sans/SinkinSans-200XLight.woff";
import Display from "./Display";
import "./Display.sass";
import makeCalculation from "./makeCalculation";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currStr: "",
      inputCalc: [],
      priorityCalc: [],
      currDisplay: "",
      entireInput: "",
      result: ""
    };
    this.genericHandler = this.genericHandler.bind(this);
    this.numberHandler = this.numberHandler.bind(this);
    this.operatorHandler = this.operatorHandler.bind(this);
    this.deletionHandler = this.deletionHandler.bind(this);
    this.sumHandler = this.sumHandler.bind(this);
  }
  genericHandler(event) {
    // console.log(this.state.currDisplay);
    let curDis = this.state.currDisplay;
    if (
      curDis[curDis.length - 1] === "-" ||
      curDis[curDis.length - 1] === "+" ||
      curDis[curDis.length - 1] === "x" ||
      curDis[curDis.length - 1] === "÷"
    ) {
      return this.setState({ currDisplay: event.currentTarget.id });
    }
    let val = event.currentTarget.id,
      newInput = this.state.currDisplay.concat(val);
    this.setState({
      currDisplay: newInput,
      entireInput: newInput
    });

    if (this.state.currDisplay.length > 8) this.setState({ currDisplay: "" });

    if (this.state.entireInput.length > 20) this.setState({ entireInput: "" });
  }
  numberHandler(event) {
    this.setState({
      currStr: this.state.currStr.concat(event.currentTarget.id)
    });
  }
  operatorHandler(event) {
    if (this.state.currDisplay.length <= 1)
      return this.setState({ currDisplay: event.currentTarget.id });
    console.log(this.state.inputCalc);
    let curDis = this.state.currDisplay,
      popOne,
      operatorType = event.currentTarget.id;
    //
    if (
      curDis[curDis.length - 1] !== "-" &&
      curDis[curDis.length - 1] !== "+" &&
      curDis[curDis.length - 1] !== "x" &&
      curDis[curDis.length - 1] !== "÷"
    ) {
      if (operatorType === "x" || operatorType === "÷") {
        this.prioritySumHandler(operatorType);
      } else {
        this.state.inputCalc.push(this.state.currDisplay);
        this.state.inputCalc.push(event.currentTarget.id);
        return this.setState({ currDisplay: event.currentTarget.id });
      }
    } else {
      this.state.inputCalc.pop();
      this.state.inputCalc.push(event.currentTarget.id);
      popOne = this.state.currDisplay.slice().split("");
      popOne.pop();
      popOne = popOne.join("");
      this.setState({
        currDisplay: popOne + event.currentTarget.id
      });
    }
  }
  deletionHandler(event) {
    let val = event.currentTarget.id,
      popOne,
      currStr;
    if (val === "AC") {
      return this.setState({
        currDisplay: "",
        entireInput: "",
        inputCalc: [],
        priorityCalc: [],
        result: ""
      });
    }
    if (val === "Del") {
      popOne = this.state.currDisplay.slice().split("");
      popOne.pop();
      popOne = popOne.join("");
      return this.setState({ currDisplay: popOne, entireInput: popOne });
    }
    if (val === "±") {
      console.log(this.state.currDisplay[0]);
      if (this.state.currDisplay[0] !== "-") {
        currStr = `-${this.state.currDisplay}`;
        console.log(currStr);
        return this.setState({ currDisplay: currStr, entireInput: currStr });
      } else {
        popOne = this.state.currDisplay.slice().split("");
        popOne.shift();
        popOne = popOne.join("");
        console.log(popOne);
        return this.setState({ currDisplay: popOne, entireInput: popOne });
      }
    }
  }
  prioritySumHandler(operator, latestVal) {
    this.state.priorityCalc.push(this.inputCalc.pop());
    this.state.priorityCalc.push(operator);
    this.state.priorityCalc.push(latestVal);
    this.state.inputCalc.push(makeCalculation(this.state.priorityCalc));
    if (this.state.inputCalc.length === 1) {
      let sum = this.state.inputCalc[0];
      this.setState({ inputCalc: [], currDisplay: sum });
    }
  }
  sumHandler() {
    if (this.state.currDisplay.length)
      this.state.inputCalc.push(this.state.currDisplay);
    if (this.state.inputCalc.length >= 3) {
      const sum = makeCalculation(this.state.inputCalc);
      this.setState({ inputCalc: [], currDisplay: sum });
    }
  }
  render() {
    return (
      <main className="app">
        <div className="js-calc">
          <Display
            primaryDisplay={this.state.currDisplay}
            secondaryDisplay={this.state.entireInput}
          />

          <div className="keyboard">
            {/* ----------------------------------------------- */}
            {/* ----------------------------------------------- */}
            <div className="keyboard__keyboard-row-key">
              <div
                id="AC"
                className="keyboard__keyboard-row-key__key-btn keyboard__keyboard-row-key__key-btn--deletion-btn"
                onClick={this.deletionHandler}
              >
                <span className="keyboard__keyboard-row-key__key-btn__symbol">
                  AC
                </span>
              </div>
              <div
                id="±"
                className="keyboard__keyboard-row-key__key-btn keyboard__keyboard-row-key__key-btn--deletion-btn"
                onClick={this.deletionHandler}
              >
                <span className="keyboard__keyboard-row-key__key-btn__symbol">
                  ±
                </span>
              </div>
              <div
                id="Del"
                className="keyboard__keyboard-row-key__key-btn keyboard__keyboard-row-key__key-btn--deletion-btn"
                onClick={this.deletionHandler}
              >
                <span className="keyboard__keyboard-row-key__key-btn__symbol">
                  Del
                </span>
              </div>
              <div
                id="÷"
                className="keyboard__keyboard-row-key__key-btn  keyboard__keyboard-row-key__key-btn--operation-btn"
                onClick={this.operatorHandler}
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
                id="7"
                className="keyboard__keyboard-row-key__key-btn keyboard__keyboard-row-key__key-btn--number-btn"
                onClick={this.genericHandler}
              >
                <span className="keyboard__keyboard-row-key__key-btn__symbol">
                  7
                </span>
              </div>
              <div
                id="8"
                className="keyboard__keyboard-row-key__key-btn keyboard__keyboard-row-key__key-btn--number-btn"
                onClick={this.genericHandler}
              >
                <span className="keyboard__keyboard-row-key__key-btn__symbol">
                  8
                </span>
              </div>
              <div
                id="9"
                className="keyboard__keyboard-row-key__key-btn keyboard__keyboard-row-key__key-btn--number-btn"
                onClick={this.genericHandler}
              >
                <span className="keyboard__keyboard-row-key__key-btn__symbol">
                  9
                </span>
              </div>
              <div
                id="x"
                className="keyboard__keyboard-row-key__key-btn keyboard__keyboard-row-key__key-btn--operation-btn"
                onClick={this.operatorHandler}
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
                id="4"
                className="keyboard__keyboard-row-key__key-btn keyboard__keyboard-row-key__key-btn--number-btn"
                onClick={this.genericHandler}
              >
                <span className="keyboard__keyboard-row-key__key-btn__symbol">
                  4
                </span>
              </div>
              <div
                id="5"
                className="keyboard__keyboard-row-key__key-btn keyboard__keyboard-row-key__key-btn--number-btn"
                onClick={this.genericHandler}
              >
                <span className="keyboard__keyboard-row-key__key-btn__symbol">
                  5
                </span>
              </div>
              <div
                id="6"
                className="keyboard__keyboard-row-key__key-btn keyboard__keyboard-row-key__key-btn--number-btn"
                onClick={this.genericHandler}
              >
                <span className="keyboard__keyboard-row-key__key-btn__symbol">
                  6
                </span>
              </div>
              <div
                id="-"
                className="keyboard__keyboard-row-key__key-btn keyboard__keyboard-row-key__key-btn--operation-btn"
                onClick={this.operatorHandler}
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
                id="1"
                className="keyboard__keyboard-row-key__key-btn keyboard__keyboard-row-key__key-btn--number-btn"
                onClick={this.genericHandler}
              >
                <span className="keyboard__keyboard-row-key__key-btn__symbol">
                  1
                </span>
              </div>
              <div
                id="2"
                className="keyboard__keyboard-row-key__key-btn keyboard__keyboard-row-key__key-btn--number-btn"
                onClick={this.genericHandler}
              >
                <span className="keyboard__keyboard-row-key__key-btn__symbol">
                  2
                </span>
              </div>
              <div
                id="3"
                className="keyboard__keyboard-row-key__key-btn keyboard__keyboard-row-key__key-btn--number-btn"
                onClick={this.genericHandler}
              >
                <span className="keyboard__keyboard-row-key__key-btn__symbol">
                  3
                </span>
              </div>
              <div
                id="+"
                className="keyboard__keyboard-row-key__key-btn keyboard__keyboard-row-key__key-btn--operation-btn"
                onClick={this.operatorHandler}
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
                id="0"
                className="keyboard__keyboard-row-key__key-btn keyboard__keyboard-row-key__key-btn--double keyboard__keyboard-row-key__key-btn--number-btn"
                onClick={this.genericHandler}
              >
                <span className="keyboard__keyboard-row-key__key-btn__symbol">
                  0
                </span>
              </div>
              <div
                id="."
                className="keyboard__keyboard-row-key__key-btn keyboard__keyboard-row-key__key-btn--number-btn"
                onClick={this.numberHandler}
              >
                <span className="keyboard__keyboard-row-key__key-btn__symbol">
                  .
                </span>
              </div>
              <div
                id="="
                className="keyboard__keyboard-row-key__key-btn keyboard__keyboard-row-key__key-btn--operation-btn"
                onClick={this.sumHandler}
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
