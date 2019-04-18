import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="d-flex flex-column tdd-fun-app">
        <div className="d-flex justify-content-end p-2">
          <button className="btn btn-warning">Login</button>
        </div>
        <div className="container flex-grow-1 d-flex flex-column justify-content-center align-items-center">
          <h1>Let's have some fun</h1>
          <p>Input text to translate it to master Yoda style</p>
          <div className="input-group">
            <textarea className="form-control" aria-label="With textarea" placeholder="Enter text..."></textarea>
          </div>
          <div className="my-2">
            <button className="btn btn-primary">Translate</button>
          </div>
          <div className="input-group">
            <textarea className="form-control" 
              aria-label="With textarea" 
              placeholder="Translated text..." 
              disabled></textarea>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
