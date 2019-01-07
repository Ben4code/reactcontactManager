import React, { Component } from 'react';

import './App.css';
import Header from './components/Header.js'
import Contacts from './components/Contacts.js'
import Contact from './components/Contact.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Contact></Contact>
        <Contacts></Contacts>
      </div>
    );
  }
}

export default App;
