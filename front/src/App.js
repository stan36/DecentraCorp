import React, { Component } from 'react';
import './App.css';
import { Navigation } from './Nav';
import { Main } from './Nav';


class App extends Component {

  render() {
    return (
      <div className='app'>
        <h1>DecentraCorp Dapp</h1>
        <Navigation />
        <Main />
      </div>
    );
  }
}






export default App;
