import React, { Component } from 'react';

import './App.css';
import Header from './components/Header.js'
import Contacts from './components/Contacts.js'
//import Contact from './components/Contact.js'

import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager"></Header>
        <div className="container">
          <Contacts/>
        </div>
      </div>
    );
  }
}

export default App;
