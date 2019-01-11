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
      currDisplay: "",
      entireInput: "",
      result: ""
    };
    this.genericHandler = this.genericHandler.bind(this);
    this.operatorHandler = this.operatorHandler.bind(this);
    this.deletionHandler = this.deletionHandler.bind(this);
    this.sumHandler = this.sumHandler.bind(this);
    this.prioritySumHandler = this.prioritySumHandler.bind(this);
    //
    //
  }
  genericHandler(event) {
    let curDis = this.state.currDisplay;
    //here
    if (
      curDis[curDis.length - 1] === "-" ||
      curDis[curDis.length - 1] === "+" ||
      curDis[curDis.length - 1] === "x" ||
      curDis[curDis.length - 1] === "÷"
    ) {
      return this.setState({
        currDisplay: event.currentTarget.id,
        entireInput: this.state.entireInput.concat(event.currentTarget.id)
      });
    }
    console.log(this.state.currDisplay);
    let val = event.currentTarget.id,
      newInput = this.state.currDisplay.concat(val);
    this.setState({
      currDisplay: newInput,
      entireInput: newInput
    });

    if (this.state.currDisplay.length > 8) this.setState({ currDisplay: "" });

    if (this.state.entireInput.length > 20) this.setState({ entireInput: "" });
  }
  operatorHandler(event) {
    let curDis = this.state.currDisplay,
      popOne;
    let iC = this.state.inputCalc,
      len = iC.length;

    let lastOperator = iC[len - 1],
      valBefore = iC[len - 2];
    //
    console.log("operator", iC[len - 1]);
    if (iC[len - 1] === "x" || iC[len - 1] === "÷") {
      return this.prioritySumHandler(
        valBefore,
        lastOperator,
        curDis,
        event.currentTarget.id
      );
    }
    //
    //
    // if (this.state.currDisplay.length <= 1)
    //   return this.setState({ currDisplay: event.currentTarget.id });
    if (
      curDis[curDis.length - 1] !== "-" &&
      curDis[curDis.length - 1] !== "+"
    ) {
      //if the last char in the currentDisp is NOT an operator of any kind =add to inputCalc arr the currDisp val + the operator itself
      let newIc = [
        ...this.state.inputCalc,
        this.state.currDisplay,
        event.currentTarget.id
      ];
      this.setState({
        currDisplay: event.currentTarget.id,
        inputCalc: newIc,
        entireInput: newIc
      });
      console.log(this.state.currDisplay);
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
    //
    let val = event.currentTarget.id,
      popOne,
      currStr;
    //
    //
    if (val === "AC") {
      return this.setState({
        currDisplay: "",
        entireInput: "",
        inputCalc: [],
        priorityCalc: [],
        result: ""
      });
    }
    //
    //
    if (val === "Del") {
      if (this.state.currDisplay.length > 0) {
        popOne = this.state.currDisplay.slice().split("");
        popOne.pop();
        popOne = popOne.join("");
        return this.setState({ currDisplay: popOne, entireInput: popOne });
      }
    }
    //
    //
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
    //
    //
  }
  sumHandler(event) {
    let iC = this.state.inputCalc,
      len = iC.length,
      lastMultiDiv,
      sum;
    console.log(iC[len - 1], "sum");
    if (iC[len - 1] === "x" || iC[len - 1] === "÷") {
      lastMultiDiv = makeCalculation([
        iC[len - 2],
        iC[len - 1],
        this.state.currDisplay
      ]);
    }
    //
    let lastOp = iC[len - 2];
    if (this.state.currDisplay.length && lastOp !== "÷" && lastOp !== "x")
      iC.push(this.state.currDisplay);
    if (len > 1) {
      console.log(lastMultiDiv);
      //
      if (lastMultiDiv) {
        sum = makeCalculation([...iC.slice(0, len - 2), lastMultiDiv]);
      } else {
        sum = makeCalculation(iC);
      }
      //
      if (sum % 1 !== 0) sum = sum.toFixed(1);
      this.setState({ inputCalc: [], currDisplay: sum });
    } else {
      // if()
      this.setState({
        inputCalc: [],
        currDisplay: iC[0]
      });
    }
  }
  prioritySumHandler(valBef, op, valAf, currOp) {
    let successorVal = makeCalculation([valBef, op, valAf]);
    if (successorVal % 1 !== 0) successorVal = successorVal.toFixed(1);
    //
    //
    return this.setState({
      inputCalc: [
        ...this.state.inputCalc.slice(0, this.state.inputCalc.length - 3),
        successorVal,
        currOp
      ],
      currDisplay: currOp
    });
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
                onClick={this.genericHandler}
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
