import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="d-flex flex-column tdd-fun-app">
        <div className="d-flex justify-content-end p-2">
          <ul className="nav custom-nav">
            <li className="nav-item fun-nav-item mr-2">
              <NavLink to="/yoda" className="nav-link rounded">Talk like Yoda</NavLink>
            </li>
            <li className="nav-item fun-nav-item mr-2">
              <NavLink to="/pirate" className="nav-link rounded">Talk like Pirate</NavLink>
            </li>
          </ul>
          <button className="btn btn-warning">Login for more</button>
        </div>
        <div className="container flex-grow-1">
          { this.props.children }
        </div>
      </div>
    );
  }
}

export default App;
