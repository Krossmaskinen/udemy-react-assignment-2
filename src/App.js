import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    inputText: ''
  };

  inputTextChangedHandler = (event) => {
    this.setState({inputText: event.target.value});
  };

  removeChar = (index) => {
    let text = this.state.inputText.split('');

    text.splice(index, 1);

    this.setState({inputText: text.join('')});
  };

  chars = () => {
    const text = this.state.inputText;
    const idPrefix = 'hsntoaehu';
    let charList = text.split('');
    let chars = null;

    chars = charList.map((c, index) => {
      let id = `${idPrefix}-${index}`;

      return (
        <Char char={c} key={id} click={() => {this.removeChar(index);}}/>
      );
    });

    return chars;
  };

  render() {
    const chars = this.chars();

    return (
      <div className="App">
        <header>
          <h1>Udemy React - Assignment 2</h1>
        </header>
        <input onChange={this.inputTextChangedHandler} value={this.state.inputText} />
        <p>Length of input: {this.state.inputText.length}</p>
        <div>{chars}</div>
        <Validation length={this.state.inputText.length} />
      </div>
    );
  }
}

export default App;
