import React, { Component } from 'react';
import './resources/styles.css'

import Header from './components/layouts/Header'


class App extends Component {
  render () {
    return (
      <div className="App">
        <Header/>
        Hello
      </div>
    );
  }
}

export default App;
