import React, { Component } from 'react'

export default class AddContact extends Component {
    state = {
        name: '',
        email: '',
        phone: ''
    }

  render() {
    return (
      <div className="card card-primary mb-3">
          <div className="card-header">Add Contact</div>
          <div className="card-body">
          <form action="">
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control form-control-lg" name="name" placeholder="Enter Name..."/>
            </div>
                
                <input type="text" className=""/>
                <input type="text" className=""/>
            </form>  
          </div>
        
      </div>
    )
  }
}
