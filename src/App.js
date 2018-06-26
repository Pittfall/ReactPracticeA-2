import React, { Component } from 'react';
import './App.css';
import Validation from './Validation';
import Char from './Char';

class App extends Component {
  state = {
    inputString : ''
  }
  
  inputChangeHandler = (event) => {
    this.setState({inputString: event.target.value});
  }

  deleteCharHandler = (index) => {
    const newInputString = this.state.inputString.split('');
    newInputString.splice(index, 1);
    
    this.setState({inputString: newInputString.join('')});
  }

  render() {
    const inputArray = this.state.inputString.split('');

    const charComponents = (
          inputArray.map((c, index) => {
            return <Char character={c} key={index} deleteChar={() => this.deleteCharHandler(index)} />
          })
    );

    return (
      <div className="App">
        <h1>Assignment 2</h1>
        <input type="text" onChange={this.inputChangeHandler} value={this.state.inputString} />
        <p>{this.state.inputString.length}</p>
        <Validation inputLength={this.state.inputString.length} />
        {charComponents}
      </div>
    );
  }
}

export default App;
