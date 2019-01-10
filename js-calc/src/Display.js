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
          {this.props.secondaryDisplay}
        </div>
        <div className="display__primary-display">
          {this.props.primaryDisplay}
        </div>
      </div>
    );
  }
}

export default Display;
