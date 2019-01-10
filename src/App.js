import React, { Component } from 'react';

import './App.css';
import Header from './components/Layout/Header.js';
import Contacts from './components/Contact/Contacts.js';
import AddContact from './components/Contact/AddContact';

//Import the provider part of context.
import {Provider} from './context.js'

import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  render() {
    return (

      //Wrap provider around app where it will be available.
      <Provider>
        <div className="App">
          <Header branding="Contact Manager"></Header>
          <div className="container">
            <AddContact/>
            <Contacts/>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
