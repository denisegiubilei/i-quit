import React from "react";
import CircularProgressbar from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";

class CircularBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      percentage: this.props.percentage
    };

    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseClick = this.handleMouseClick.bind(this);
  }

  handleMouseMove(event) {
    event.preventDefault();
    console.log("MOVE: X: " + event.clientX + " Y: " + event.clientY);
    if (event.clientX > 380) {
      this.setState({
        percentage: event.clientY % 100
      });
    }
  }

  handleMouseClick(event) {
    event.preventDefault();
    console.log("CLICK: X: " + event.clientX + " Y: " + event.clientY);
  }

  render() {
    return (
      <div onMouseMove={this.handleMouseMove} onClick={this.handleMouseClick}>
        <CircularProgressbar
          percentage={this.state.percentage}
          text={`${this.state.percentage}%`}
          initialAnimation={true}
        />
      </div>
    );
  }
}

export default CircularBar;
