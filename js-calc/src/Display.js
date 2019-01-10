import React, { Component } from "react";
class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="display">
        <div className="display__secondary-display">
          <div className="display__primary-display">
            {this.props.currDisplay}7
          </div>
        </div>
      </div>
    );
  }
}

export default Display;
