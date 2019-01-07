import React, { Component } from 'react'
import Contact from './Contact';

 class Contacts extends Component {
   state = {
        contacts : [
          {id: 1, name: 'Ben Obi', email: 'benobi@email.com', phone: '123-456-789'},
          {id: 2, name: 'Jane Doe', email: 'marydoe@email.com', phone: '098-456-789'},
          {id: 3, name: 'Terry Smith', email: 'terrysmith@email.com', phone: '123-103-789'}
        ]
     }
   
     deleteContact = (id)=>{
      //Get copy of contects in state.
      const {contacts} = this.state;
      //Filter out contact that matched passed id.
      const newContacts  = contacts.filter((contact)=>  contact.id !== id);
      //Set contacts in state equal to newContacts
      this.setState({contacts:  newContacts})
     }

  render() {
    const {contacts} = this.state;

    return (
      <div>
        {contacts.map(contact => {
          return (
            <Contact key={contact.id} contact= {contact} deleteClickHandler={this.deleteContact}/>
          )
        })}
      </div>
    )
  }
}


export default Contacts;