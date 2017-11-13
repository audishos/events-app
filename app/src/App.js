import React, { Component } from 'react';
// import './App.css';
import NavBar from './components/NavBar';
import Event from './components/Event';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Event />
      </div>
    );
  }
}

export default App;
