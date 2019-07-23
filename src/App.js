import React, {Component} from 'react';
import './App.css';

// komponent klasowy musi zawsze zawierac metode render, funkcyjny wystarczy return
class App extends Component {

  constructor() {
    super();
    this.state = {
      parText: ''
    }
  }

  setParText = (event) => {
    console.log(event.target.value);
    // setState moze przyjac za parametr albo obiekt albo funkcje!!!!
    this.setState({parText: event.target.value})
  }

  render() {
    return (
      <div className="App">
        <p>{this.state.parText}</p>
        <textarea cols="30" rows="10" onChange={this.setParText}></textarea>
      </div>
    );
  }
}

export default App;
