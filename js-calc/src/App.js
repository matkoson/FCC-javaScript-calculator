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
      inputCalc: [], //the arr for keeping all the operators and numbers
      currDisplay: "", //the value currently displayed on the primary display
      entireInput: "" //the value displayed on the secondary display
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
      //if I'm currently in middle of operation =[val1, operator, null], the primary display should show the currently typed in number, which should be added to the entire equation at the secondary display
      return this.setState({
        currDisplay: event.currentTarget.id,
        entireInput: this.state.entireInput.concat(event.currentTarget.id)
      });
    }
    let val = event.currentTarget.id,
      newInput = this.state.currDisplay.concat(val);
    this.setState({
      currDisplay: newInput,
      entireInput: newInput
    }); //if it's only a beginning of an operation, add the next num to the current string on both primary and secondary

    if (this.state.currDisplay.length > 8) this.setState({ currDisplay: "" }); //controlling the max-length

    if (this.state.entireInput.length > 20) this.setState({ entireInput: "" });
  }
  operatorHandler(event) {
    let curDis = this.state.currDisplay,
      popOne,
      iC = this.state.inputCalc,
      len = iC.length,
      lastOperator = iC[len - 1],
      valBefore = iC[len - 2];
    //
    //
    if (iC[len - 1] === "x" || iC[len - 1] === "÷") {
      //if I'm in the middle of the multi/div operation
      return this.prioritySumHandler(
        valBefore,
        lastOperator,
        curDis,
        event.currentTarget.id
      );
      //pass to the priorityHandler the last three vals in the this.state.inputCalc, in order to make the calculation beforehand, so that the order of precedence could be sustained
    }
    if (
      curDis[curDis.length - 1] !== "-" &&
      curDis[curDis.length - 1] !== "+"
    ) {
      //if the last char in the currentDisp is NOT an operator of any kind(the other two operators are covered above) =add to inputCalc arr the currDisp val + the operator itself
      let newIc = [
        ...this.state.inputCalc, //spread, so that commas wouldn't be seen on the secondary
        this.state.currDisplay,
        event.currentTarget.id
      ];
      //adding the currently held val from the primary and the latest idVal to the this.state.inputCalc
      this.setState({
        currDisplay: event.currentTarget.id,
        inputCalc: newIc,
        entireInput: newIc
      });
    } else {
      //if what I have is another operator at the last input, I can't have two operators in a row, so I need to replace it with a new one
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
    //
    //
    //clearing all inputs and displays
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
      //removing the last char from both displays =no need for altering iC, as it's not updated with the new val yet
      if (this.state.currDisplay.length > 0) {
        popOne = this.state.currDisplay.slice().split("");
        popOne.pop();
        popOne = popOne.join("");
        return this.setState({ currDisplay: popOne, entireInput: popOne });
      }
    }
    //
    //
    //adding minus in front, or getting rid of it, which is equivalent to the positive value
    if (val === "±") {
      if (this.state.currDisplay[0] !== "-") {
        currStr = `-${this.state.currDisplay}`;
        return this.setState({ currDisplay: currStr, entireInput: currStr });
      } else {
        popOne = this.state.currDisplay.slice().split("");
        popOne.shift();
        popOne = popOne.join("");
        return this.setState({ currDisplay: popOne, entireInput: popOne });
      }
    }
  }
  sumHandler(event) {
    let iC = this.state.inputCalc,
      len = iC.length,
      lastMultiDiv,
      sum,
      lastOp;
    //
    //
    //
    if (iC[len - 1] === "x" || iC[len - 1] === "÷") {
      lastMultiDiv = makeCalculation([
        iC[len - 2],
        iC[len - 1],
        this.state.currDisplay
      ]);
    }
    //using calc algorithm to pre-calc all of the multi/div operations, in order to maintain precedence. That's the only case where it hasn't been handled earlier
    //
    lastOp = iC[len - 2];
    if (this.state.currDisplay.length && lastOp !== "÷" && lastOp !== "x")
      //if the last operator is of type add/sub, the num following it is still kept at the primary display, but still not moved to the this.state.inputCalc
      iC.push(this.state.currDisplay);
    if (len > 1) {
      //
      if (lastMultiDiv) {
        //if I had to take care of the last multi/div, I can't put it on state with this.setState, as it won't be avail immed, the result needs to be kept in a sep var, and passed this way to the calc algorithm
        sum = makeCalculation([...iC.slice(0, len - 2), lastMultiDiv]);
      } else {
        //if that's not the case, I proceed with passing the whole this.state.inputCalc into the calc algorithm
        sum = makeCalculation(iC);
      }
      //
      if (sum % 1 !== 0) sum = sum.toFixed(1);
      //if the division leaves some rest behind, I need to round it up
      this.setState({ inputCalc: [], currDisplay: sum });
    } else {
      //if there's only one num typed in, the result symbol will yield only it
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
    //retainin the latest operator, which has to be done her, coz it's omitted at the handleSum(), when execution pre-calc of multi/div
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
