import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/main.jsx';

class App extends Component {
  render() {
    return (
      <div className="App" background="../public/assets/wallpaper">
        <header className="App-header">
          <Main/>
        </header>
      </div>
    );
  }
}

export default App;
