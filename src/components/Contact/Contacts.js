import React, { Component } from 'react'
import Contact from './Contact';
import {Consumer} from '../../context';

 class Contacts extends Component {
  
    render() {
      return(
        <Consumer>
          {
            store => {
              const {contacts} = store;
              return (
                <React.Fragment>
                  {contacts.map((contact)=>{
                    return (
                      <Contact key={contact.id} contact={contact} />
                    )
                  })}
                </React.Fragment>
              )
            }
          }
        </Consumer>
      )
    }
 }
export default Contacts;

