import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css';
import Header from './components/Layout/Header.js';
import About from './components/Pages/About.js';
import Contacts from './components/Contact/Contacts.js';
import AddContact from './components/Contact/AddContact';

//Import the provider part of context.
import { Provider } from './context.js'

import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  render() {
    return (

      //Wrap provider around app where it will be available.
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Contact Manager"></Header>
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts}/>
                <Route  path="/contact/add" component={AddContact}/>
                <Route  path="/about" component={About}/>
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
