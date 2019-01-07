import React, { Component } from 'react'
import PropTypes from 'prop-types'


class Contact extends Component {
   
  state = {
    showContactInfo: false
  };

  showClick = () =>{
    this.setState({ showContactInfo: !this.state.showContactInfo }); 
  }
  deleteClick = (id, e) =>{
    this.props.deleteClickHandler(id);
  }
  render() {
    const {showContactInfo} = this.state;
    const {id, name, email, phone} = this.props.contact;
    
    return (
      <div>
        <div className="card card-body mb-3">
            <h4> {name} <i onClick={this.showClick} className=" hover fas fa-sort-down" style={{cursor: 'pointer', color: 'green', }}></i>
            <i onClick={this.deleteClick.bind(this, id)} className=" hover fas fa-trash" style={{cursor: 'pointer', color: 'red', float: 'right'}}></i>
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
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteClickHandler: PropTypes.func.isRequired
}

export default Contact;