import React, { Component } from 'react';
import Parent from './components/Parent';
import ThemeParent from './components/ThemeParent';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Function as Children Demo</h1>
        </header>

        <h2>Logging example</h2>
        <Parent withLogging />

        <h2>Theme toggle example</h2>
        <ThemeParent />


      </div>
    );
  }
}

export default App;
