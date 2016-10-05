import React, { Component } from 'react';
import logo from './logo.svg';
import TweetBox     from './TweetBox';
import FilteredList from './FilteredList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>TweetBox en React</h2>
        </div>
        <TweetBox/>
        <FilteredList/>
      </div>
    );
  }
}

export default App;
