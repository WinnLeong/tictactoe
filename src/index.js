import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './Game';

class App extends Component {
  render() {
    return (
      <Game />
    );
  }
}

// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
