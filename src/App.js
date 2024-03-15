import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 },
    ],
  };
  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDelete = (CounterId) => {
    const counter = this.state.counters.filter((item) => item.id !== CounterId);
    this.setState({ counters: counter });
    console.log("counter", counter);
  };

  handleReset = () => {
    // const counters = this.state.counters.map((item) => {
    //   item.value = 0;
    //   return item;
    // });
    // console.log(counters);
    // this.setState({ counters: counters });
  };
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="Container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
