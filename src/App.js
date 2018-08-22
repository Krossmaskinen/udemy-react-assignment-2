import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    inputText: ''
  };

  inputTextChangedHandler = (event) => {
    this.setState({inputText: event.target.value});
  };

  render() {
    return (
      <div className="App">
        <header>
          <h1>Udemy React - Assignment 2</h1>
        </header>
        <input onChange={this.inputTextChangedHandler} value={this.state.inputText} />
        <p>Length of input: {this.state.inputText.length}</p>
      </div>
    );
  }
}

export default App;
