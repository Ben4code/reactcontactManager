import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Consumer }from '../../context'


class Contact extends Component {
   
  state = {
    showContactInfo: false
  };

  showClick = () =>{
    this.setState({ showContactInfo: !this.state.showContactInfo }); 
  }
  
  //Delete the contact handler
  deleteContact = (dispatch, id)=>{
    dispatch({type: 'DELETE_CONTACT', payload: id})
  }


  render() {
    const {showContactInfo} = this.state;
    const {id, name, email, phone} = this.props.contact;
    
    return (
      //We do this to make the value from context available.
      <Consumer>
        {(value) => {
          const {dispatch} = value; 
          return (
            <div>
              <div className="card card-body mb-3">
                  <h4> {name} <i onClick={this.showClick} className=" hover fas fa-sort-down" style={{cursor: 'pointer', color: 'green', }}></i>
                  <i onClick={this.deleteContact.bind(this, dispatch, id)} className=" hover fas fa-trash" style={{cursor: 'pointer', color: 'red', float: 'right'}}></i>
                  </h4>
                  
                  { showContactInfo ? 
                    (<ul className="list-group">
                      <li className="list-group-item">Email: {email}</li>
                      <li className="list-group-item">Phone: {phone}</li>
                    </ul>)
                  : null}
              </div>
            </div>
          )
        }}
      </Consumer>
      
    )
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
}

export default Contact;