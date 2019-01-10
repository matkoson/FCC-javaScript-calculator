import React, { Component } from "react";
import "./App.sass";
import "./assets/sinkin-sans/SinkinSans-200XLight.woff";
import Display from "./Display";
import "./Display.sass";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currStr: "",
      inputCalc: [],
      priorityCalc: [],
      currDisplay: "0",
      result: "",
      loaded: false
    };
    this.genericHandler = this.genericHandler.bind(this);
    this.numberHandler = this.numberHandler.bind(this);
    this.operatorHandler = this.operatorHandler.bind(this);
  }
  componentDidMount() {
    this.setState({ loaded: true });
  }
  genericHandler(event) {
    if (this.state.loaded) {
      if (Array.from(event.target.children).length)
        console.log(Array.from(event.target.children)[0]);
      this.setState({ currDisplay: event.target.value });
    }
  }
  numberHandler(event) {
    this.setState({ currStr: this.state.currStr.concat(event.target.value) });
  }
  operatorHandler(event) {
    this.setState({
      inputCalc: this.state.inputCalc.concat(this.state.currStr)
    });
    this.genericHandler(event);
  }
  render() {
    return (
      <main className="app">
        <div className="js-calc">
          <Display currDisplay={this.state.currDisplay} />

          <div className="keyboard">
            {/* ----------------------------------------------- */}
            {/* ----------------------------------------------- */}
            <div
              className="keyboard__keyboard-row-key"
              onClick={this.genericHandler}
            >
              <div className="keyboard__keyboard-row-key__key-btn keyboard__keyboard-row-key__key-btn--deletion-btn">
                <span className="keyboard__keyboard-row-key__key-btn__symbol">
                  AC
                </span>
              </div>
              <div className="keyboard__keyboard-row-key__key-btn keyboard__keyboard-row-key__key-btn--deletion-btn">
                <span className="keyboard__keyboard-row-key__key-btn__symbol">
                  ±
                </span>
              </div>
              <div className="keyboard__keyboard-row-key__key-btn keyboard__keyboard-row-key__key-btn--deletion-btn">
                <span className="keyboard__keyboard-row-key__key-btn__symbol">
                  Del
                </span>
              </div>
              <div className="keyboard__keyboard-row-key__key-btn  keyboard__keyboard-row-key__key-btn--operation-btn">
                <span className="keyboard__keyboard-row-key__key-btn__symbol">
                  ÷
                </span>
              </div>
            </div>
            {/* ----------------------------------------------- */}
            {/* ----------------------------------------------- */}
            <div className="keyboard__keyboard-row-key">
              <div
                className="keyboard__keyboard-row-key__key-btn keyboard__keyboard-row-key__key-btn--number-btn"
                onClick={this.genericHandler}
              >
                <span className="keyboard__keyboard-row-key__key-btn__symbol">
                  7
                </span>
              </div>
              <div className="keyboard__keyboard-row-key__key-btn keyboard__keyboard-row-key__key-btn--number-btn">
                <span className="keyboard__keyboard-row-key__key-btn__symbol">
                  8
                </span>
              </div>
              <div className="keyboard__keyboard-row-key__key-btn keyboard__keyboard-row-key__key-btn--number-btn">
                <span className="keyboard__keyboard-row-key__key-btn__symbol">
                  9
                </span>
              </div>
              <div className="keyboard__keyboard-row-key__key-btn keyboard__keyboard-row-key__key-btn--operation-btn">
                <span className="keyboard__keyboard-row-key__key-btn__symbol">
                  x
                </span>
              </div>
            </div>
            {/* ----------------------------------------------- */}
            {/* ----------------------------------------------- */}
            <div className="keyboard__keyboard-row-key">
              <div className="keyboard__keyboard-row-key__key-btn keyboard__keyboard-row-key__key-btn--number-btn">
                <span className="keyboard__keyboard-row-key__key-btn__symbol">
                  4
                </span>
              </div>
              <div className="keyboard__keyboard-row-key__key-btn keyboard__keyboard-row-key__key-btn--number-btn">
                <span className="keyboard__keyboard-row-key__key-btn__symbol">
                  5
                </span>
              </div>
              <div className="keyboard__keyboard-row-key__key-btn keyboard__keyboard-row-key__key-btn--number-btn">
                <span className="keyboard__keyboard-row-key__key-btn__symbol">
                  6
                </span>
              </div>
              <div className="keyboard__keyboard-row-key__key-btn keyboard__keyboard-row-key__key-btn--operation-btn">
                <span className="keyboard__keyboard-row-key__key-btn__symbol">
                  -
                </span>
              </div>
            </div>
            {/* ----------------------------------------------- */}
            {/* ----------------------------------------------- */}
            <div className="keyboard__keyboard-row-key">
              <div className="keyboard__keyboard-row-key__key-btn keyboard__keyboard-row-key__key-btn--number-btn">
                <span className="keyboard__keyboard-row-key__key-btn__symbol">
                  1
                </span>
              </div>
              <div className="keyboard__keyboard-row-key__key-btn keyboard__keyboard-row-key__key-btn--number-btn">
                <span className="keyboard__keyboard-row-key__key-btn__symbol">
                  2
                </span>
              </div>
              <div className="keyboard__keyboard-row-key__key-btn keyboard__keyboard-row-key__key-btn--number-btn">
                <span className="keyboard__keyboard-row-key__key-btn__symbol">
                  3
                </span>
              </div>
              <div className="keyboard__keyboard-row-key__key-btn keyboard__keyboard-row-key__key-btn--operation-btn">
                <span className="keyboard__keyboard-row-key__key-btn__symbol">
                  +
                </span>
              </div>
            </div>
            {/* ----------------------------------------------- */}
            {/* ----------------------------------------------- */}
            <div className="keyboard__keyboard-row-key">
              <div className="keyboard__keyboard-row-key__key-btn keyboard__keyboard-row-key__key-btn--double keyboard__keyboard-row-key__key-btn--number-btn">
                <span className="keyboard__keyboard-row-key__key-btn__symbol">
                  0
                </span>
              </div>
              <div className="keyboard__keyboard-row-key__key-btn keyboard__keyboard-row-key__key-btn--number-btn">
                <span className="keyboard__keyboard-row-key__key-btn__symbol">
                  .
                </span>
              </div>
              <div className="keyboard__keyboard-row-key__key-btn keyboard__keyboard-row-key__key-btn--operation-btn">
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
