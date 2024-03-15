import React, { Component } from "react";
class Counter extends Component {
  // state = {
  //   counter: this.props.counter,
  //   onDelete: this.props.onDelete,
  // };

  // handleIncrement = () => {
  //   this.setState({
  //     counter: { ...this.state.counter, value: this.state.counter.value + 1 },
  //   });
  // };
  // handleDecrement = () => {
  //   if (this.state.counter.value !== 0) {
  //     this.setState({
  //       counter: { ...this.state.counter, value: this.state.counter.value - 1 },
  //     });
  //   }
  // };
  render() {
    const getBadgeClasses = () => {
      let classes = "m-3 bg-";
      classes += this.props.counter.value === 0 ? "warning" : "primary";
      return classes;
    };

    return (
      <>
        <div>
          <span className={getBadgeClasses()}>{this.formatcount()}</span>
          <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary">
            Increment
          </button>
         
          {/* <button
            onClick={this.handleDecrement}
            className="btn btn-warning m-2"
          >
            Decrement
          </button> */}
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger m-2 "
          >
            Delete
          </button>
        </div>
      </>
    );
  }

  formatcount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "zero" : count;
  }
}

export default Counter;
